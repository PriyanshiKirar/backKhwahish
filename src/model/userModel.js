const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone_no: { type: Number, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema)




// address: { type: mongoose.Schema.Types.UUID, },
// cart: { type: mongoose.Schema.Types.UUID },
// order: { type: mongoose.Schema.Types.UUID },
// role_id: { type: mongoose.Schema.Types.UUID, },