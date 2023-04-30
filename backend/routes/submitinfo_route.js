const express = require("express");
const router = express.Router();
const model = require("../models/info");

// sample get all items in collection
router.get("/all-info", (req, res) => {
  // find all
  model
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/info/:memberName", (req, res) => {
  // find all
  model
    .findOne({ name: req.params["memberName"] })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/submitinfo", (req, res) => {
  const info = new model(req.body);
  info
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
