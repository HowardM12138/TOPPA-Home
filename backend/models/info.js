const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infoSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      required: true,
    },
    grade: {
      type: String,
      required: true,
    },
    major: {
      type: String,
      required: true,
    },
    hometown: {
      type: String,
      required: true,
    },
    hobby: {
      type: String,
      required: true,
    },
    ins: {
      type: String,
      required: true,
    },
    linkedin: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Info = mongoose.model("info", infoSchema);

module.exports = Info;
