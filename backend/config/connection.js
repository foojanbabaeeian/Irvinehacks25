const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from the `.env` file
dotenv.config();

// Retrieve the MongoDB connection string from environment variables
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/yourDatabaseName';

// Function to establish a connection
const connectToDB = async () => {
  try {
    // Establish the connection
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with failure
  }
};

// Export the connection function
module.exports = connectToDB;
