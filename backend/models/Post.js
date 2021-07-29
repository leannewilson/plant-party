const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  post: String,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  created: { type: Date, default: Date.now },
  comments: { type: Schema.Types.ObjectId, ref: "Comment" },
  image: String,
});

module.exports = model("Post", postSchema);
