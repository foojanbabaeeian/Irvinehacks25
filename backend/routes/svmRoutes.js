const express = require('express');
const { predictPrice } = require('../controllers/svmController');

const router = express.Router();

// Route to predict real estate prices
router.post('/predict', predictPrice);

module.exports = router;