var express = require("express");
var router = express.Router();
const { checkBody } = require("../modules/checkBody");
const Post = require("../models/posts");

// POST /send post
router.post("/", function (req, res) {
  if (!checkBody(req.body, ["topic", "title", "author", "article"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  const newPost = new Post({
    topic: req.body.topic,
    title: req.body.title,
    author: req.body.author,
    article: req.body.article,
  });

  // Save new tweet to database
  newPost.save().then(() => {
    res.json({ result: true, message: "Post saved in the DB" });
  });
});

/* GET home page. */
router.get("/", function (req, res, next) {
  Post.find({}).then((data) => {
    res.json({ allPost: data });
  });
});

module.exports = router;
