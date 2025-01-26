// const express = require('express');
// const { fetchHousingData, analyzeHousingAffordability } = require('../controllers/housingController');
// const router = express.Router();

// // Route to fetch housing data
// // router.get('/data', fetchHousingData);

// router.post('/data', fetchHousingData);
// router.get('/data', fetchHousingData);

// // Route to analyze housing affordability
// router.post('/affordability', analyzeHousingAffordability);

// module.exports = router;

const express = require('express');
const { fetchHousingData, analyzeHousingAffordability } = require('../controllers/housingController');

const router = express.Router();

router.post('/data', fetchHousingData);
router.post('/analyze', analyzeHousingAffordability);

module.exports = router;
