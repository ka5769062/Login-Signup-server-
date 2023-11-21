const mongoose = require("mongoose");
const bycrypt = require("bycrypt");
const jswt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fname: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 3 },
});



const userData = new mongoose.model("kamran",userSchema);

module.exports = userData; 