const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: String,
  email: String,
  imageUrl: String,
  googleId: String,
  favPlants: [{ type: Schema.Types.ObjectId, ref: "Plant" }],
  admin: Boolean,
});

module.exports = model("User", userSchema);
