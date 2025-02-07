// models/Store.js
const mongoose = require("mongoose");

// Define the Store Schema
const StoreSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    owner: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    subscription: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subscription", // Reference to Subscription model
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "suspended", "inactive"],
      default: "active",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Create a virtual for updating the `updatedAt` field when an update happens
StoreSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create Store model
module.exports = mongoose.model("Store", StoreSchema);
