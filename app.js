const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("*" , (req,res) => {
    res.status(404).json( { error:"Page Not FOUND"})
});

module.exports = app;
