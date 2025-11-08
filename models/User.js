const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },

  dateOfBirth: { type: Date },
  height: { type: Number },
  weight: { type: Number },
  bodyType: { type: String, enum: ["apple", "pear", "hourglass", "rectangle"] },
  preferredFit: { type: String, enum: ["snug", "regular", "loose"] },
  fabricPreferences: {
    type: [String],
    enum: ["natural", "synthetic", "blend"],
  },
  favoriteColors: [String],
  clothingCategories: [String],
});

module.exports = mongoose.model("Users", userSchema);
