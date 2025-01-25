const { getHousingData, analyzeAffordability} = require('../services/housingService');

// Fetch housing data
const fetchHousingData = async (req, res) => {
    try {
        const data = await getHousingData(req.query);
        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Could not fetch housing data');
        res.status(500).json({error: 'An error occurred'});
    }
}

// Analyze housing affordability
const analyzeHousingAffordability = async (req, res) => {
    try {
        const { location, income } = req.body;
        const analysis = await analyzeAffordability(location, income);
        res.status(200).json({ success: true, data: analysis });
    } catch (error) {
        console.error('Could not analyze housing affordability');
        res.status(500).json({ success: false, error: 'An error occurred' });
    }
}

module.exports = {
    fetchHousingData,
    analyzeHousingAffordability,
};