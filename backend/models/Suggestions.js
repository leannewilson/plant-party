const { Schema, model } = require("mongoose");

const suggestionSchema = new Schema({
  suggestion: String,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Suggestion", suggestionSchema);
