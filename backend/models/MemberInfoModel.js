const mongooes = require("mongoose");

const MemberInfoSchema = mongooes.Schema(
	{
		name: { type: String, required: true },
		legalName: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		execRole: { type: String, required: true },
		projTeam: { type: String, required: true },
		toppaAge: { type: Number, required: true },
		grade: { type: String, required: true },
		major: { type: String, required: true },
		hometown: { type: String, required: true },
		hobby: { type: String, required: true },
		ins: { type: String, required: true },
		linkedin: { type: String, required: true },
	},
	{ strict: false }
);

const MemberInfo = new mongooes.model("memberinfos", MemberInfoSchema);
module.exports = MemberInfo;
