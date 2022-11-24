const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
 status:{type:String, default:"user"}
});
const User = mongoose.model("user", userSchema);

module.exports = User;