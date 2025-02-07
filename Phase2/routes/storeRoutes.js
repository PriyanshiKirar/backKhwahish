// routes/storeRoutes.js
const express = require("express");
const { getStores, suspendStore, activateStore, createStore } = require("../controllers/storeController");
const { authMiddleware, isSuperAdmin } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/create", authMiddleware, isSuperAdmin, createStore);
router.get("/", authMiddleware, getStores);
router.post("/suspend/:storeId", authMiddleware, isSuperAdmin, suspendStore);   //check
router.post("/activate/:storeId", authMiddleware, isSuperAdmin, activateStore); //check

module.exports = router;
