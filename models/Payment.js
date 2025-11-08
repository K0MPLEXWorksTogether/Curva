const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
  cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart", required: true },
  stripePaymentIntentId: { type: String, required: true, unique: true },
  stripePaymentStatus: {
    type: String,
    enum: [
      "requires_payment_method",
      "requires_confirmation",
      "requires_action",
      "processing",
      "succeeded",
      "canceled",
      "requires_capture",
    ],
    required: true,
  },
  subtotal: { type: Number, required: true },
  discountTotal: { type: Number, default: 0, required: true },
  tax: { type: Number, default: 0, required: true },
  shippingFee: { type: Number, default: 0, required: true },
  totalAmount: { type: Number, required: true },

  billingAddress: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
    required: true,
  },
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
    required: true,
  },

  notes: { type: String },
});

module.exports = mongoose.model("Payments", paymentSchema);
