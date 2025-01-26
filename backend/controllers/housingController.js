const { getHousingData, analyzeAffordability } = require('../services/housingService');

// Fetch housing data
const fetchHousingData = async (req, res) => {
    try {
        const data = await getHousingData(req.body);
        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Could not fetch housing data: ', error.message);
        res.status(400).json({ success: false, error: error.message });
    }
};

// Analyze housing affordability
const analyzeHousingAffordability = async (req, res) => {
    try {
        const { location, income } = req.body;
        if (!location || !income) {
          return res.status(400).json({ success: false, error: 'Location and income are required' });
        }
        const analysis = await analyzeAffordability(location, income);
        res.status(200).json({ success: true, data: analysis });
      } catch (error) {
        console.error('Could not analyze housing affordability:', error);
        res.status(500).json({ success: false, error: 'An error occurred during analysis' });
      }
};

module.exports = {
  fetchHousingData,
  analyzeHousingAffordability,
};
