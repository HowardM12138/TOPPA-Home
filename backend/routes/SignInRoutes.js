const express = require("express");
const router = express.Router();
const MemberInfo = require("../models/MemberInforModel");

router.post("/sign-in/check", (req, res) => {
  berkeleymail = req.body.email;
  MemberInfo.find({ email: berkeleymail })
    .then((result) => {
      if (!(result.length === 0)) {
        res.send("ismember");
      } else {
        res.send("notmember");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
