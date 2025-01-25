const express = require('express');
const { fetchHousingData, calculateAffordability } = require('../controllers/housingController');
const router = express.Router();

// Route to fetch housing data
router.get('/data', fetchHousingData);

// Route to calculate affordability
router.post('/affordability', calculateAffordability);

module.exports = router;