
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Create a new user
router.post('/', userController.registerUser);


// Logout the user
router.post('/logout', userController.logoutUser);

module.exports = router;