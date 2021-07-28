const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  comment: String,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  created: { type: Date, default: Date.now },
  postId: { type: Schema.Types.ObjectId, ref: "Post" },
});

module.exports = model("Comment", commentSchema);
