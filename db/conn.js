const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

mongoose
  .connect(process.env.MONG0DB_URI)
  .then(() => {
    console.log("db connected succesfully");
  })
  .catch((err) => {
    console.log(err);
  });
