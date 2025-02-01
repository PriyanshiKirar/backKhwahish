const mongoose = require("mongoose");
const UUID=require('uuid');

const PermissionSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.UUID, required: true },
    name: { type: String, required: true },
    description: { type: String }
});

module.exports = mongoose.model("Permission", PermissionSchema);
