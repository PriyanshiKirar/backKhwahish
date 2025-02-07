// controllers/dashboardController.js
const Store = require("../models/Store");
const Subscription = require("../models/Subscription");

exports.getDashboardData = async (req, res) => {
  try {
    const totalRevenue = await Subscription.aggregate([{ $group: { _id: null, total: { $sum: "$price" } } }]);
    const activeStores = await Store.countDocuments({ status: "active" });

    const systemHealth = "Good";  // Placeholder for actual system monitoring logic

    const revenueData = [
      { name: "Jan", revenue: 2000 },
      { name: "Feb", revenue: 2500 },
      { name: "Mar", revenue: 3000 },
    ];

    res.json({
      totalRevenue: totalRevenue[0]?.total || 0,
      activeStores,
      systemHealth,
      revenueData,
    });
  } catch (error) {
    res.status(500).json({ error: "Error fetching dashboard data" });
  }
};
