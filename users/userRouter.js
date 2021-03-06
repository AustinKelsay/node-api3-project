const express = require('express');

const router = express.Router();

const db = require("./userDb");
const posts = require("../posts/postDb");

const validatePost = require("../middleware/validatePost")
const validateUser = require("../middleware/validateUser")
const validateUserId = require("../middleware/validateUserId")

router.post('/', validateUser(), (req, res) => {
  const {name} = req.body

  db
  .insert(req.body)
  .then((user) => res.status(201).json({ message: "User created" }))
  .catch((err) =>
      res.status(500).json({
        error: "There was an error while saving the user to the database",
      })
    );
});

router.post('/:id/posts', validatePost(), (req, res) => {
  posts
    .insert({ text: req.body.text, user_id: req.params.id })
    .then((post) => res.status(201).json({ post }))
    .catch((err) => res.status(500).json({ message: err }));
});

router.get('/', (req, res) => {
  db
  .get()
  .then((users) => {
    res.status(200).json(users)
  })
  .catch((err) => {
    res.status(500).json({
      message: "Error retrieving users"
    })
  })
});

router.get('/:id', (req, res) => {
  db
  .getById(req.params.id)
  .then((user) => {
    res.status(200).json(user)
  })
  .catch((err) => {
    res.status(500).json({
      message: "Error retrieving user"
    })
  })
});

router.get('/:id/posts', (req, res) => {
  db
  .getUserPosts(req.params.id)
  .then((post) => {
    res.status(200).json(post)
  })
  .catch((err) => {
    res.status(500).json({
      message: "Error retrieving post"
    })
  })
});

router.delete('/:id', (req, res) => {
  db
    .remove(req.params.id)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json({ message: err }));
});

router.put('/:id', validateUserId(), (req, res) => {
  db
    .update(req.params.id, req.body)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json({ message: err }));
});

module.exports = router;
