const { Schema, model } = require("mongoose");

const plantSchema = new Schema({
  commonName: { type: String, required: true, unique: true },
  scientificName: { type: String, required: true, unique: true },
  careLevel: {
    type: String,
    enum: ["Novice", "Green thumb", "Expert"],
    required: true,
  },
  light: {
    type: String,
    enum: ["Low-moderate", "Bright, indirect", "Full sun"],
    required: true,
  },
  water: {
    type: String,
    enum: ["Low", "Low-moderate", "Moderate", "Moderate-high", "High"],
    required: true,
  },
  soil: {
    type: String,
    enum: ["Well-draining", "Moisture-retaining", "Coarse + sandy"],
    required: true,
  },
  humidity: {
    type: String,
    enum: ["None", "Low", "Low-medium", "Medium", "Medium-high", "High"],
    required: true,
  },
  propagation: {
    type: String,
    enum: [
      "Stem-cuttings",
      "Plantlets + offsets  ",
      "Leaf cuttings",
      "Division",
    ],
    required: true,
  },
  growthHabit: {
    type: String,
    enum: ["Trailing", "Climbing", "Upright", "Clumping", "Rosette"],
    required: true,
  },
  position: {
    type: String,
    enum: [
      "Floor",
      "Tabletop",
      "Windowsill",
      "Bookshelf or stand",
      "Covered balcony",
    ],
    required: true,
  },
  toxicity: {
    type: String,
    enum: ["Pet friendly", "Mildly toxic", "Toxic"],
    required: true,
  },
});

module.exports = model("plant", plantSchema);
