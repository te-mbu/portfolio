const mongoose = require("mongoose");

const PostsSchema = mongoose.Schema({
  topic: String,
  title: String,
  author: String,
  href: String,
});

const Post = mongoose.model("posts", PostsSchema);
module.exports = Post;
