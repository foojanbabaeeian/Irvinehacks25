// filepath: /C:/Users/fooja/Documents/GitHub/Irvinehacks25/backend/controllers/svmController.js
const joblib = require('joblib');
const path = require('path');

// Load the SVM model
const modelPath = path.join(__dirname, '../model/real_estate_svm_model.pkl');
const svmModel = joblib.load(modelPath);

const predictPrice = (req, res) => {
    const { features } = req.body;
    if (!features) {
        return res.status(400).json({ error: 'Features are required' });
    }

    try {
        const predictions = svmModel.predict(features);
        res.status(200).json({ predictions });
    } catch (error) {
        console.error('Error making predictions:', error);
        res.status(500).json({ error: 'Failed to make predictions' });
    }
};

module.exports = {
    predictPrice,
};