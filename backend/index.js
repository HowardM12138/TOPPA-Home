const express = require("express");
const mongoose = require("mongoose");
const Reimbursement = require("./routes/reimbursement_route");
const Info = require("./routes/submitinfo_route");
const cors = require("cors");

require("dotenv").config();

const uri = process.env.DATABASE_URL;
mongoose
  .connect(uri)
  .then((result) => {
    app.listen(4000, () => {
      console.log(`Server Started at ${4000}`);
    });
  })
  .catch((err) => console.log(err));

// const database = mongoose.connection;

// database.on("error", (error) => {
//   console.log(error);
// });

// database.once("connected", () => {
//   console.log("Database Connected");
//   console.log(database);
// });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Reimbursement);
app.use(Info);

// sample get one item in collection
// app.get("/all-reimbursements", (req, res) => {
//   // find one item
//   Reimbursement.findById()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
