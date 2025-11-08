const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
        required: true,
      },
      quantity: { type: Number, required: true, min: 1, default: 1 },
      selectedSize: { type: String, required: true },
      selectedColor: { type: String, required: true },
      selectedBodyTypeFit: { type: String, required: true },
      addedAt: { type: Date, default: Date.now },
    },
  ],

  total: { type: Number, default: 0 },
});

module.exports = mongoose.model("Cart", cartSchema);
