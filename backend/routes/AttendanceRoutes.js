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

  queryTrue[event + "." + we_ev] = true;
  //非nested field可以用[event]来找到event这个constant
  //mongodb的nested field query没办法在括号中再evaluate constant
  //“[event].[we_ev]”会把[event]和[we_ev]当成string作为新的field
  //解决办法是提前写好query，query中的路径可以找到constant，但这个路径也是在双引号下的

  SecretWord.find({ word: secret })
    .then((result) => {
      console.log(member);
      if (!(result.length === 0)) {
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

//当某个事件结束后，在postman中用这个api post一次
//这样所有没有参加本次事件的成员都会显示absent
router.post("/Attendance/AllAbsent", (req, res) => {
  const week = req.body.week;
  const event = req.body.event;
  const we_ev = week + " " + event;
  const field = event + "." + we_ev;
  const queryFalse = {};

  queryFalse[field] = false;
  //$exist operator放在filter之中，如果等于true就是filter出所有有这个field的
  //如果等于false就是filter出所有没有这个field的
  //field如果想引用constant必须加中括号！
  MemberInfo.updateMany({ [field]: { $exists: false } }, { $set: queryFalse })
    .then((result) => {
      res.send(result);
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
