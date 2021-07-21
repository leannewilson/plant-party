const { Schema, model } = require("mongoose");

const plantSchema = new Schema({
  commonName: { type: String, required: true },
  scientificName: String,
  careLevel: String,
  light: String,
  water: String,
  soil: String,
  humidity: String,
  propagation: String,
  growthHabit: String,
  position: String,
  toxicity: String,
  image: String,
  userIds: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

module.exports = model("plant", plantSchema);
