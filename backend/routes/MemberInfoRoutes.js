const express = require("express");
const router = express.Router();
const multer = require("multer");
const model = require("../models/MemberInfoModel.js");
const imgModel = require("../models/ImageModel.js");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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

router.get("/info/:name", (req, res) => {
	// find all
	model
		.findOne({
			$or: [{ name: req.params.name }, { legalName: req.params.name }],
		})
		.then((result) => {
			res.send(result);
		})
		.catch((err) => {
			console.log(err);
			res.status(404).send("Can't find the user as a TOPPA Member!");
		});
});

router.post("/sign-up", (req, res) => {
	const password = req.query.password;
	if (password != "toppahome123")
		return res.status(400).send("Sign-up Failed!");
	const info = new model(req.body);
	info
		.save()
		.then((result) => {
			return res.send(result);
		})
		.catch((err) => {
			console.log(err);
			return res.status(400).send("Sign-up Failed!");
		});
});

router.get("/image/:name", (req, res) => {
	imgModel
		.findOne({ name: req.params.name })
		.then((data) => {
			if (data) {
				res.send(data.img.data.toString("base64"));
			} else res.status(400).send("Can't find image!");
		})
		.catch((err) => console.log(err));
});

router.post("/image", upload.single("file"), (req, res) => {
	//check if the request has an image or not
	if (!req.file) {
		res.json({
			success: false,
			message: "You must provide at least 1 file",
		});
	} else {
		let imageUploadObject = {
			img: {
				data: req.file.buffer,
				contentType: req.file.mimetype,
			},
			name: req.body.name,
		};
		const imgObject = new imgModel(imageUploadObject);
		imgObject.save().catch((err) => {
			console.log(err);
			res.status(400).send("File upload failed");
		});
		res.send("Successfully uploaded the file");
	}
});

module.exports = router;
