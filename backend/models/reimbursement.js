const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reimbursementSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    event: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Reimbursement = mongoose.model("reimbursement", reimbursementSchema);

module.exports = Reimbursement;
