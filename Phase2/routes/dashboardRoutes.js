// routes/dashboardRoutes.js
const express = require("express");
const { getDashboardData } = require("../controllers/dashboardController");
const { authMiddleware, isSuperAdmin } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, isSuperAdmin, getDashboardData);

module.exports = router;
