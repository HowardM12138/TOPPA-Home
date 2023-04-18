const express = require("express");
const router = express.Router();
const SecretWord = require("../models/SecretWordModel");
const AttendanceTitle = require("../models/AttendanceTitleModel");
const MemberInfo = require("../models/MemberInforModel");

router.post("/Attendance/AddSecretWord", (req, res) => {
  const secret = req.body.secretword;
  const member = req.body.name;
  const week = req.body.week;
  const event = req.body.event;
  const we_ev = week + " " + event;
  const queryTrue = {};
  const queryFalse = {};

  queryTrue[event + "." + we_ev] = true;
  queryFalse[event + "." + we_ev] = false;
  //非nested field可以用[event]来找到event这个constant
  //mongodb的nested field query没办法在括号中再evaluate constant
  //“[event].[we_ev]”会把[event]和[we_ev]当成string作为新的field
  //解决办法是提前写好query，query中的路径可以找到constant，但这个路径也是在双引号下的

  SecretWord.find({ word: secret })
    .then((result) => {
      console.log(member);
      if (result.length === 0) {
        //result.length判断这个表是否为空
        MemberInfo.updateOne({ name: member }, { $set: queryFalse })
          //schema定义的时候必须是strict: false的才可以接受后加的field value pair
          .then((result) => {
            res.send(result);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        MemberInfo.updateOne({ name: member }, { $set: queryTrue })
          .then((result) => {
            res.send(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
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

router.post("/Attendance/Blockrefresh", (req, res) => {
  const member = req.body.name;

  MemberInfo.find({ name: member })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;

/*
router.post("/aaa", (req, res) => {
  const NewMemberInfo = new MemberInfo({
    name: "Jingfeng Yang",
    email: "yangjingfeng0705@berkeley.edu",
  });

  NewMemberInfo.save().then(() => {
    res.send("saved");
  });
});*/
