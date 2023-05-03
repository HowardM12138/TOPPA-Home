const express = require("express");
const router = express.Router();
const MemberInfo = require("../models/MemberInfoModel");

router.post("/Calendar/getUrl", (req, res) => {
	member = req.body.name;
	MemberInfo.find({ name: member })
		.then((result) => {
			res.send(result[0].publicUrl);
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;
