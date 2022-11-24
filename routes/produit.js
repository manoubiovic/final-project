const express = require("express");
const produit = require("../models/produit");
const produitroute = express.Router();

//GET :  RETURN ALL produit

produitroute.get("/produit", async (req, res) => {
  try {
    const result = await produit.find();
    res.send({produit:result});
  } catch (error) {
    console.log("can't find Produit");
  }
});

//POST :  ADD A NEW produit TO THE DATABASE

produitroute.post("/add", async (req, res) => {
  const newproduit = new produit(req.body);
  const result = await newproduit.save();
  res.send(result);
});

// PUT : EDIT A produit BY ID

produitroute.put("/produit/update/:id", async (req, res) => {
  try {
    const result = await produit.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    res.send({ produit: result, msg: "Produit Updated" });
  } catch (error) {
    console.log("can't update Produit");
  }
});

//  DELETE : REMOVE A produit BY ID

produitroute.delete("/produit/delete/:id", async (req, res) => {
  try {
    const result = await produit.findByIdAndRemove({ _id: req.params.id });
    res.send({ produit: result, msg: "Produit Deleted" });
  } catch (error) {
    console.log("can't delete Produit");
  }
});

module.exports = produitroute;
