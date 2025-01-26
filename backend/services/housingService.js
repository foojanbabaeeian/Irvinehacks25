// filepath: /C:/Users/fooja/Documents/GitHub/Irvinehacks25/backend/services/housingService.js
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

    const response = await axios.get(melissaPropURL, { params });
    return response.data;
};

const analyzeAffordability = async (location, income) => {
    // Implement your affordability analysis logic here
    return { location, income, affordable: true };
};

module.exports = {
    getHousingData,
    analyzeAffordability,
};