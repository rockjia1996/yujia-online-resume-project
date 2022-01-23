const express = require("express");
const server = express();

server.use(express.static("public"));

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/html/resume.html");
});

server.listen(3000);
