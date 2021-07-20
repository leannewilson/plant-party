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

module.exports = router;
