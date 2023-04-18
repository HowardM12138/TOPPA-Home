const mongooes = require("mongoose");

const KudoSubmitSchema = mongooes.Schema({
  name: { type: String, required: true },
  kudocontent: { type: String, required: true },
  thumbup: { type: Number, required: false },
});

const KudoSubmit = new mongooes.model("kudosubmit", KudoSubmitSchema);
module.exports = KudoSubmit;
