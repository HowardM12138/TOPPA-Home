//If you want to run nodemon locally instead of globally, you can run npxnodemon

const express = require("express");
const cors = require("cors");
const mongooes = require("mongoose");
const AttendanceRoutes = require("./routes/AttendanceRoutes");
const KudoBoardRoutes = require("./routes/KudoBoardRoutes");

require("dotenv").config();

const app = express();
const port = 5002;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//自动parse的middleware

const uri =
  "mongodb+srv://yjf:yjf20040705@cluster0.fmutcua.mongodb.net/?retryWrites=true&w=majority";
mongooes.connect(uri);
const connection = mongooes.connection;
connection.once("open", () => {
  console.log("connected!");
});

app.use(AttendanceRoutes);
app.use(KudoBoardRoutes);

app.listen(port);

module.exports = connection;