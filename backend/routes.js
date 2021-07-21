const express = require("express");
// const jwt = require("jsonwebtoken");
const router = express.Router();
const Plant = require("./models/Plants");
const User = require("./models/User");
/**ALL OUR BACKEND ROUTES */

router.get("/", (req, res) => {
  res.json({ serverWorking: true });
});

router.post("/add-plant", (req, res) => {
  let newPlant = req.body;
  console.log(newPlant);
  Plant.create(newPlant).then((res) => {
    res.json(res);
  });
});

router.get("/getplantsfromserver", (req, res) => {
  Plant.find().then((plants) => {
    res.json(plants);
    // console.log(plants);
  });
});

router.post("/savedplants", authorize, async (req, res) => {
  let savedPlant = req.body;
  savedPlant.userId = res.locals.user._id;
});

router.get("/get-the-user", authorize, async (req, res) => {
  let user = await User.findById(res.locals.user._id);
  res.json(user);
});

router.post("/authenticate", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });

  if (!user) {
    user = await User.create(req.body);
  }
  jwt.sign({ user }, "secret key", { expiresIn: "30min" }, (err, token) => {
    res.json({ user, token });
  });
});

//Middle ware >>> Put this in the middle of any route where you want to authorize
function authorize(req, res, next) {
  let token = req.headers.authorization.split(" ")[1]; //Token from front end
  if (token) {
    jwt.verify(token, "secret key", (err, data) => {
      if (!err) {
        res.locals.user = data.user; //Set global variable with user data in the backend
        next();
      } else {
        res.status(403).json({ message: err });
        //throw new Error({ message: "ahhh" })
      }
    });
  } else {
    res.status(403).json({ message: "Must be logged in!" });
  }
}

module.exports = router;
