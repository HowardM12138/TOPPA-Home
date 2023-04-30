const express = require("express");
const router = express.Router();
const model = require("../models/reimbursement");

// sample add item into collection
// router.get("/add-reimbursement", (req, res) => {
//   const reimbursement = new Reimbursement({
//     name: "Coco",
//     event: "retreat",
//     amount: "123.45",
//   });

//   reimbursement
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// sample get all items in collection
router.get("/all-reimbursements", (req, res) => {
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

router.post("/Reimbursement", (req, res) => {
  const reimbursement = new model(req.body);
  reimbursement
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
