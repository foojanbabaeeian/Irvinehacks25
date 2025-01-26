const axios = require('axios');

const getHousingData = async (body) => {
    const { address } = body;
    if (!address) {
        throw new Error('Address is required');
    }

    const melissaPropURL = "https://property.melissadata.net/v4/WEB/LookupProperty/";
    const params = {
        id: process.env.MELISSA_API_KEY,
        cols: "GrpAll",
        format: "json",
        ff: address,
    };
    try {
        const response = await axios.get(melissaPropURL, { params });
        console.log('success finding property data!')
        
        return response.data;
    } catch(error) {
        console.error('Error fetching property data:', error.message);
        throw new Error('Error fetching property data');
    }
};

const analyzeAffordability = async (location, income) => {
    // Implement your affordability analysis logic here
    if (!location || !income) {
        throw new Error('Location and income are required');
    }
    return {
        location,
        income,
        affordable: income > 50000, // Simple mock logic
        affordabilityScore: (income / 100000) * 100 // Mock score
      };
};

module.exports = {
    getHousingData,
    analyzeAffordability,
};