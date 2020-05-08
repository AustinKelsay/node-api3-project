const express = require('express');
const userRouter = require("./users/userRouter")
const logger = require("./middleware/logger")

const server = express();
const port = 5000;

//custom middleware

server.use(logger);
server.use(express.json)

server.get("/", (req, res) => {
  res.json({
    message: "Welcome!"
  })
});

module.exports = {server, port};
