const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var Product = new Schema({
  Nom: String,
  PrixUnitaire: Number,
  Quantité: Number,
});
module.exports = mongoose.model("Product", Product);
