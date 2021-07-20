const express = require("express");
// const jwt = require("jsonwebtoken");
const router = express.Router();
const Plant = require("./models/Plants");

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

router.post("/authenticate", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });

  if (!user) {
    user = await User.create(req.body);
  }

  jwt.sign({ user }, "secret key", { expiresIn: "30min" }, (err, token) => {
    res.json({ user, token });
  });
});

module.exports = router;
