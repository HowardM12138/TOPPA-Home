const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
	console.log(error);
});

database.once("connected", () => {
	console.log("Database Connected");
	console.log(database);
});

const app = express();

app.use(express.json());

app.listen(4000, () => {
	console.log(`Server Started at ${4000}`);
});
