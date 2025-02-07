const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const user = await User.create({ name, email, password, role });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: "Error registering user" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Generate Token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Set Secure Cookie
    res
      .cookie("token", token, { httpOnly: true, secure: false })
      .status(200)
      .json({
        message: "Login successful",
        token,
        user: { name: user.name, email: user.email, role: user.role },
      });

  } catch (error) {
    console.error("Login error:", error); // Log error for debugging
    res.status(500).json({ error: "Internal Server Error" });
  }
};

