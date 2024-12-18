const mongooes = require("mongoose");

//和collection里面的不统一
const AttendanceTitleSchema = mongooes.Schema({
	activity_date: { type: String, required: true },
	activity_name: { type: String, required: true },
});

const AttendanceTitle = new mongooes.model(
	"attendancetitles",
	AttendanceTitleSchema
);
module.exports = AttendanceTitle;
