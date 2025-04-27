import express from "express";
import User from "../src/backend/models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Create new user
    const user = new User({
      name,
      email,
      password,
    });

    // Save user to the database
    await user.save();

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    // Send success response with token
    res.status(201).json({
      message: "User created successfully!",
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error!" });
  }
});

export default router;



// Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials!" });
      }
  
      // Compare password
      const isMatch = await user.matchPassword(password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials!" });
      }
  
      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
  
      // Send success response with token
      res.status(200).json({
        message: "Login successful!",
        token,
        user: {
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      res.status(500).json({ message: "Server Error!" });
    }
  });
  