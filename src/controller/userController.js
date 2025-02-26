require('dotenv').config();
const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const redisClient = require('../config/redis');

// Register a new user
exports.register = async (req, res) => {
    const { name, email, password, phone_no, address } = req.body;
    if (!password) {
        return res.status(400).json({ error: 'Password is required' });
    }
    const id = uuidv4()
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            id: id,
            name,
            email,
            password: hashedPassword,
            phone_no,
        });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Login a user
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.Lognout = async (req, res, next) => {
    try {
      const token = req.cookies.token;
  
      if (!token) {
        return res.status(400).json({ message: "Token not found!" });
      }
  
      // Delegate token blacklist logic to service
      const result = await redisClient.set(`blacklist_${token}`, "true", {
        EX: 3600, // Token will be blacklisted for 1 hour
      });
  
      res.clearCookie("token");
  
      res.status(200).json({ message: "Logout successful!" });
    } catch (error) {
      next(error);
      console.log(error.message);
    }
  };