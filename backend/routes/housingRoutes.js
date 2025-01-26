const express = require('express');
const {
  propertyIntelligence,
  locationAnalysis,
  marketAssessment,
} = require('../controllers/housingControllers');

const router = express.Router();

router.get('/property-intelligence', propertyIntelligence);
router.get('/location-analysis', locationAnalysis);
router.get('/market-assessment', marketAssessment);

module.exports = router;
