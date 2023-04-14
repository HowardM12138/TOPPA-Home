const express = require("express");
const router = express.Router();
const KudoSubmit = require("../models/KudoSubmitModel");
const connection = require("../server");

router.get("/KudoBoard/refresh", (req, res) => {
  KudoSubmit.find() //find的result就是a list of json，是全部的数据
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

//几个很有用的Status Code：404是connection错误，说明前端的fetch没有连接到后端
//500系列是internal server error，前端莫得问题全是后端问题，来查server的console找error
router.post("/KudoBoard/KudoSubmit/upload", (req, res) => {
  //req.body这里会因为前面的middleware自动从JSON变为Javascript object，不用再parse，直接用key来提取就行
  const person = req.body.person;
  const content = req.body.kudocontent;
  const NewKudoSubmit = new KudoSubmit({ name: person, kudocontent: content });
  //Model的argument是一个Javascript object

  NewKudoSubmit.save()
    .then(() => {
      res.redirect("http://localhost:3000/KudoBoard");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/KudoBoard/delete", (req, res) => {
  const ID = req.body.id; //不一定非得把id放到req.param里，可以放到req.body中
  KudoSubmit.deleteOne({ _id: ID }) //Model真是万能的，一个Model就代表那个collection
    .then((result) => {
      res.send("deleted!"); //一定要写个res.send，不然前端认为还没有fetch到不会去then function
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
