const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// Register route
router.post('/register', authController.registerUser);

// Login route
router.post('/login', authController.loginUser);

// Logout route
router.post('/logout', authController.logoutUser);

module.exports = router;