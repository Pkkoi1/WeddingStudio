const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authController = {
  // POST /api/auth/register
  register: async (req, res) => {
    try {
      const { email, password, fullName, phone } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "User already exists with this email",
        });
      }

      // Create new user
      const user = new User({
        email,
        password,
        fullName,
        phone,
      });

      await user.save();

      // Generate JWT token
      const token = jwt.sign(
        { userId: user._id, email: user.email, role: user.role },
        process.env.JWT_SECRET || "wedding_studio_secret",
        { expiresIn: "7d" }
      );

      res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: {
          user,
          token,
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  },

  // POST /api/auth/login
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Find user by email
      const user = await User.findOne({ email, isActive: true });
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      // Check password
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      // Generate JWT token
      const token = jwt.sign(
        { userId: user._id, email: user.email, role: user.role },
        process.env.JWT_SECRET || "wedding_studio_secret",
        { expiresIn: "7d" }
      );

      res.json({
        success: true,
        message: "Login successful",
        data: {
          user,
          token,
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  },

  // POST /api/auth/refresh-token
  refreshToken: async (req, res) => {
    try {
      const { refreshToken } = req.body;

      if (!refreshToken) {
        return res.status(401).json({
          success: false,
          message: "Refresh token is required",
        });
      }

      // Verify refresh token
      const decoded = jwt.verify(
        refreshToken,
        process.env.JWT_SECRET || "wedding_studio_secret"
      );

      // Find user
      const user = await User.findById(decoded.userId);
      if (!user || !user.isActive) {
        return res.status(401).json({
          success: false,
          message: "Invalid refresh token",
        });
      }

      // Generate new token
      const newToken = jwt.sign(
        { userId: user._id, email: user.email, role: user.role },
        process.env.JWT_SECRET || "wedding_studio_secret",
        { expiresIn: "7d" }
      );

      res.json({
        success: true,
        message: "Token refreshed successfully",
        data: {
          token: newToken,
        },
      });
    } catch (error) {
      res.status(401).json({
        success: false,
        message: "Invalid refresh token",
        error: error.message,
      });
    }
  },

  // POST /api/auth/logout
  logout: async (req, res) => {
    try {
      // In a real app, you might want to blacklist the token
      res.json({
        success: true,
        message: "Logged out successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message,
      });
    }
  },
};

module.exports = authController;
