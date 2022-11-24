const { Router } = require("express");
const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/validator");
const isAuth = require("../middleware/passport");


//  register

router.post("/register", registerRules(), validation, async (req, res) => {
  const newUser = new User(req.body);

  //  check if the email exists
  const searchedUser = await User.findOne({ email: req.body.email });
  if (searchedUser) {
    return res.status(400).send({ message: "email exists" });
  }

  //  hash pasword
  const salt = 10;
  const genSalt = await bcrypt.genSalt(salt);
  const hashedPassword = await bcrypt.hash(newUser.password, genSalt);
  console.log(hashedPassword);

  newUser.password = hashedPassword;
  console.log(newUser)

  // //save the user

  const result = await newUser.save();
  const payload = {
    id: result.id,
    name: result.name,
  };
  jwt.sign(
    payload,
    process.env.SecretOrkey,
    { expiresIn: 1000 * 3600 * 24 },
    (error, token) => {
      if (error) {
        throw error;
      }
      res.send({
        msg: "register mriglin jawna bahi",
        user: result,
        token: `Bearer ${token}`,
      });
    }
  );
});

// login;
router.post("/login", loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    //find if the user exist
    const searchedUser = await User.findOne({
      email: email,
    });
    //if the emeil not exist
    if (!searchedUser) {
      return res.status(400).send({ message: "User not found" });
    }
    //password are equals
    const match = bcrypt.compare(password, searchedUser.password);
    if (!match) {
      return res.status(400).send({
        message: "Password is not equal to the current user's password",
      });
    }
    console.log(searchedUser)

    // cree un token
    const payload = {
      _id: searchedUser._id,
      name: searchedUser.name,
    };
    
    const token = jwt.sign(payload, process.env.SecretOrkey, {
      expiresIn: 3600 * 1000 * 24,
    });
    // console.log(token);
    // send the user
    res.status(200).send({
      user: searchedUser,
      message: "Login successfully",
      token: `Bearer ${token}`,
    });
  } catch (error) {
    res.status(500).send({ message: "can not find the user" });
  }
});

// get all users

router.get("/", async (req, res) => {
  try {
    const result = await User.find();
    res.send({user:result,msg:"get all user success"});
  } catch (error) {
    console.log("can't find the user");
  }
});

// delete a user

router.delete("/delete/:id", async (req, res) => {
  try {
    const result = await User.findByIdAndRemove({_id: req.params.id});
    res.send({User:result, msg:"users deleted"});
  } catch (error) {
    console.log("can't delete users");
  }
});

// update a user

 
router.put("/update/:id", async (req, res) => {
  try {
    const result = await User.findByIdAndUpdate({_id: req.params.id},{$set:req.body},{new:true});
    res.send({User:result, msg:"users updated"});
  } catch (error) {
    console.log("can't update users");
  }
});

router.get("/current", isAuth(), (req, res) => {
  res.status(200).send({ user: req.user });
});

module.exports = router;
