const mongooes = require("mongoose");

const KudoSubmitSchema = mongooes.Schema({
  name: { type: String, required: true },
  kudocontent: { type: String, required: true },
});

const KudoSubmit = new mongooes.model("kudosubmit", KudoSubmitSchema);
module.exports = KudoSubmit;
