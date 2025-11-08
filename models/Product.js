const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  sku: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  stockQuantity: { type: Number, required: true, min: 0 },
  sizesAvailable: {
    type: [String],
    required: true,
    enum: ["2XL", "3XL", "4XL", "5XL", "6XL", "7XL", "8XL", "9XL", "10XL"],
  },
  category: { type: String, required: true },
  imageUrls: [{ type: String, required: true }],

  subCategory: { type: String },
  brand: { type: String },
  discountPrice: { type: Number },
  colorsAvailable: { type: [String] },
  bodyTypeFit: {
    type: [String],
    enum: ["apple", "pear", "hourglass", "rectangle"],
  },
  fitType: {
    type: String,
    enum: ["snug", "regular", "loose"],
  },
  fabricType: {
    type: String,
    enum: ["natural", "synthetic", "blend"],
  },
  pattern: { type: String },
  occasion: { type: String },
  season: { type: String },
  videoUrl: { type: String },
  tags: { type: [String] },
});

module.exports = mongoose.model("Products", productSchema);
