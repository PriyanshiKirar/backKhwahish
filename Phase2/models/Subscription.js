// models/Subscription.js
const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema({
  planName: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true },
  storesAssigned: { type: Array, default: [] },  // Store IDs
});

module.exports = mongoose.model("Subscription", SubscriptionSchema);
