// routes/subscriptionRoutes.js
const express = require("express");
const { createSubscription, updateSubscription, getSubscriptions } = require("../controllers/subscriptionController");
const { isSuperAdmin, authMiddleware } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isSuperAdmin, createSubscription);
router.put("/:subscriptionId", authMiddleware, isSuperAdmin, updateSubscription);
router.get("/", authMiddleware, getSubscriptions);

module.exports = router;
