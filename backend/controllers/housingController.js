const axios = require('axios');

/**
 * Property Intelligence - Analyze property data for 140+ million U.S. properties.
 * Fetch property values, sales history, market trends, and generate affordability scores.
 */
const propertyIntelligence = async (req, res) => {
  const { address } = req.query;

  if (!address) {
    return res.status(400).json({ error: "Address is required." });
  }

  try {
    const propertyApiUrl = "https://property.melissadata.net/v4/WEB/LookupProperty/";
    const params = {
      apiKey: process.env.PROPERTY_API_KEY,
      address,
    };

    const response = await axios.get(propertyApiUrl, { params });
    const { propertyValues, salesHistory, marketTrends, affordabilityScore } = response.data;

    res.status(200).json({
      propertyValues,
      salesHistory,
      marketTrends,
      affordabilityScore,
    });
  } catch (error) {
    console.error("Error fetching property intelligence data:", error);
    res.status(500).json({
      error: "An error occurred while analyzing property data. Please try again later.",
    });
  }
};

/**
 * Location Analysis - Verify addresses and map affordable housing options.
 * Leverage Global Address Verification and Reverse GeoCoder APIs.
 */
const locationAnalysis = async (req, res) => {
  const { address } = req.query;

  if (!address) {
    return res.status(400).json({ error: "Address is required." });
  }

  try {
    // Global Address Verification API
    const addressVerificationUrl = "https://api.addressverification.com/v1/verify";
    const addressParams = {
      apiKey: process.env.ADDRESS_API_KEY,
      address,
    };

    const addressVerificationResponse = await axios.get(addressVerificationUrl, { params: addressParams });
    const verifiedAddress = addressVerificationResponse.data.verifiedAddress;

    if (!verifiedAddress) {
      return res.status(400).json({ error: "Unable to verify address." });
    }

    // Reverse GeoCoder API
    const geoCoderUrl = "https://api.reversegeocoder.com/v1/affordable-areas";
    const geoCoderParams = {
      apiKey: process.env.GEOCODER_API_KEY,
      address: verifiedAddress,
      radius: 30, // Radius in miles for commuting distance
    };

    const geoCoderResponse = await axios.get(geoCoderUrl, { params: geoCoderParams });
    const affordableAreas = geoCoderResponse.data.affordableAreas;

    res.status(200).json({
      verifiedAddress,
      affordableAreas,
    });
  } catch (error) {
    console.error("Error fetching location analysis data:", error);
    res.status(500).json({
      error: "An error occurred while analyzing the location. Please try again later.",
    });
  }
};

/**
 * Market Assessment - Analyze economic conditions and employment opportunities.
 * Use Global Business API to track salary ranges and identify affordable neighborhoods.
 */
const marketAssessment = async (req, res) => {
  const { location } = req.query;

  if (!location) {
    return res.status(400).json({ error: "Location is required." });
  }

  try {
    const globalBusinessApiUrl = "https://api.globalbusiness.com/v1/economic-analytics";
    const params = {
      apiKey: process.env.GLOBAL_BUSINESS_API_KEY,
      location,
      metrics: "economy,employment,affordable_neighborhoods",
    };

    const response = await axios.get(globalBusinessApiUrl, { params });
    const {
      economicTrends,
      employmentStats,
      affordableNeighborhoods,
    } = response.data;

    res.status(200).json({
      economicTrends,
      employmentOpportunities: employmentStats?.opportunities || [],
      averageSalaryRanges: employmentStats?.salaryRanges || [],
      affordableNeighborhoods,
    });
  } catch (error) {
    console.error("Error fetching market assessment data:", error);
    res.status(500).json({
      error: "An error occurred while analyzing market conditions. Please try again later.",
    });
  }
};

module.exports = {
  propertyIntelligence,
  locationAnalysis,
  marketAssessment,
};
