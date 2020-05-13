const express = require('express');
const userRouter = require("./users/userRouter")
const postRouter = require("./posts/postRouter")
const logger = require("./middleware/logger")

const server = express();
const port = (process.env.PORT || 5000;

//custom middleware

server.use(logger());
server.use(express.json())

server.use("/users", userRouter)
server.use("/posts", postRouter)

server.get("/", (req, res) => {
  res.json({
  message: "Welcome!"
  })
});

module.exports = {server, port};
