const express = require("express");
const app = express();
const { adminData } = require("../Middleware/auth.js");

app.use("/user", adminData, (req, res) => {
  res.send("hello world2");
});

app.listen(3000, (req, res) => {
  console.log("Server is listening")
});
