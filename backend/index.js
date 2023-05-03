//If you want to run nodemon locally instead of globally, you can run npxnodemon

const express = require("express");
const cors = require("cors");
const mongooes = require("mongoose");
const AttendanceRoutes = require("./routes/AttendanceRoutes");
const KudoBoardRoutes = require("./routes/KudoBoardRoutes");
const CalendarRoutes = require("./routes/CalendarRoutes");
const Reimbursement = require("./routes/reimbursement_route");
const Info = require("./routes/MemberInfoRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//自动parse的middleware

require("dotenv").config();
const uri = process.env.DATABASE_URL;
mongooes
	.connect(uri)
	.then((result) => {
		console.log(`MongoDB connected successfully`);
	})
	.catch((err) => console.log(err));

app.use(AttendanceRoutes);
app.use(KudoBoardRoutes);
app.use(CalendarRoutes);
app.use(Reimbursement);
app.use(Info);

app.get("/", (req, res) => {
	res.send("toppa home backend online");
});

app.listen(process.env.PORT, () => {
	console.log("Server started at PORT:" + process.env.PORT);
});
