const dotenv = require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/twitter", (req, res) => {
  res.send("<h1>Amitpandey.com</h1>");
});

app.listen(port, () => console.log(`app listening at port ${port}`));
