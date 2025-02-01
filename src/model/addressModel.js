const mongoose = require("mongoose");
const UUID = require('uuid');

const AddressSchema = new mongoose.Schema({
    id: { type: Number, required: [true, "ID is required"] },
    users: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: [true, "User reference is required"] },
    address_line1: { type: String, required: [true, "Address Line 1 is required"] },
    address_line2: { type: String },
    country: { type: String, required: [true, "Country is required"] },
    state: { type: String, required: [true, "State is required"] },
    city: { type: String, required: [true, "City is required"] },
    pincode: { type: Number, required: [true, "Pincode is required"] }

});

module.exports = mongoose.model("Address", AddressSchema);
