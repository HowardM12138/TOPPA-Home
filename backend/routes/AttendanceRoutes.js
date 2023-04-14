const express = require("express");
const router = express.Router();
const SecretWord = require("../models/SecretWordModel");
const AttendanceTitle = require("../models/AttendanceTitleModel");

//几个很有用的Status Code：404是connection错误，说明前端的fetch没有连接到后端
//500系列是internal server error，前端莫得问题全是后端问题，来查server的console找error
router.post("/Attendance/AddSecretWord", (req, res) => {
  //req.body这里会因为前面的middleware自动从JSON变为Javascript object，不用再parse，直接用key来提取就行
  const secret = req.body.secretword;
  const NewSecretWord = new SecretWord({ word: secret });
  //Model的argument是一个Javascript object

  NewSecretWord.save()
    .then(() => {
      res.send("saved!");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/Attendance/refresh", (req, res) => {
  AttendanceTitle.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

//并不需要前端输入，想更改的时候直接改database也行
router.post("/Attendance/update_title", (req, res) => {
  const NewAttendanceTitle = new AttendanceTitle({
    activity_title: "General Meeting Attendance",
    activity_date: "Week 1",
    activity_name: "General Meeting",
  });
  NewAttendanceTitle.save()
    .then((result) => {
      res.send("saved!");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
