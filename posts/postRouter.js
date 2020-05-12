const express = require('express');

const router = express.Router();

const posts = require("./postDb")
const validatePostId = require("../middleware/validatePostId")

router.get('/', (req, res) => {
  posts
  .get()
  .then((users) => {
    res.status(200).json(users)
  })
  .catch((err) => {
    res.status(500).json({
      message: "Error retrieving posts"
    })
  })
});

router.get('/:id', (req, res) => {
  posts
  .getById(req.params.id)
  .then((post) => {
    res.status(200).json(post)
  })
  .catch((err) => {
    res.status(500).json({
      message: "Error retrieving post"
    })
  })
});

router.delete('/:id', validatePostId(), (req, res) => {
  posts
    .remove(req.params.id)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json({ message: err }));
});

router.put('/:id', validatePostId(), (req, res) => {
  posts
    .update(req.params.id, req.body)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json({ message: err }));
});

module.exports = router;
