const mongoose = require("mongoose");

let produitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img:{type:String},
  type: { type: String, required: true },
  prix: { type: String, required: true },
  description: { type: String, required: true },
  cathegori : { type: String },
  marque : { type: String },
});
const produit = mongoose.model("produit", produitSchema);

module.exports = produit;
