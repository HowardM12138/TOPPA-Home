const express = require("express");
const router = express.Router();
const MemberInfo = require("../models/MemberInforModel");

router.post("/getInfo", (req, res) => {
  member = req.body.name;
  MemberInfo.find({ name: member })
    .then((result) => res.send(result[0]))
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
