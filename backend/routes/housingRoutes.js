const express = require('express');
const { fetchHousingData, analyzeHousingAffordability } = require('../controllers/housingController');
const router = express.Router();

// Route to fetch housing data
// router.get('/data', fetchHousingData);

router.post('/data', fetchHousingData);

// Route to analyze housing affordability
router.post('/affordability', analyzeHousingAffordability);

module.exports = router;