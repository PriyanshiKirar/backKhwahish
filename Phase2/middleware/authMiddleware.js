const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  const token = req.cookies?.token; // Extract token safely

  if (!token) return res.status(401).json({ error: "Unauthorized - No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token expired. Please log in again." });
    }
    res.status(401).json({ error: "Invalid token" });
  }
};

exports.isSuperAdmin = (req, res, next) => {
  if (!req.user) return res.status(401).json({ error: "Unauthorized" });
  if (req.user.role !== "superadmin") return res.status(403).json({ error: "Forbidden - Not a Super Admin" });
  next();
};
