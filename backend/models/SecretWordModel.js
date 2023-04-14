const mongooes = require("mongoose");

const SecretWordSchema = mongooes.Schema({
  word: { type: String, required: true },
});

const SecretWord = new mongooes.model("secretword", SecretWordSchema);
module.exports = SecretWord;
