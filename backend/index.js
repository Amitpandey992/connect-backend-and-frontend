const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

const jokes = [
  { id: 1, content: "haha" },
  { id: 2, content: "hehe" },
  { id: 3, content: "huhu" },
];

app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});

app.listen(port, () => {
  console.log("app is listening on port" + port);
});
