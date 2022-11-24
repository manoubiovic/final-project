//import express
const express = require("express");
const cors = require ("cors");
//import database
const connectDB = require("./config/dbConnect");
const passport = require("passport");
//initialisation
const app = express();
//import .env
require("dotenv").config();

//connect to db
connectDB();

//convert json to middleware
app.use(express.json());
app.use(cors());

//running passport.
app.use(passport.initialize());

// server

const PORT = process.env.PORT;

//routes
app.use("/user", require("./routes/user"));
app.use("/produit", require("./routes/produit"));


app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`serveur is running on ${PORT}`)
);
