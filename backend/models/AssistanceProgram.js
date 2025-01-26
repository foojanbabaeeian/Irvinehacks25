const mongoose = require('mongoose');

// Define the AssistanceProgram schema
const AssistanceProgramSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // Remove extra spaces
    },
    description: {
      type: String,
      required: true,
    },
    eligibilityCriteria: {
      type: String,
      required: true, // e.g., "Must be a resident of X state, income below Y, etc."
    },
    contactInfo: {
      type: String,
      required: true, // e.g., phone number or email
    },
    applicationLink: {
      type: String, // URL for applying to the program
      validate: {
        validator: function (v) {
          return /^(ftp|http|https):\/\/[^ "]+$/.test(v); // URL validation
        },
        message: 'Please enter a valid URL',
      },
    },
    deadline: {
      type: Date, // Application deadline
    },
    assistanceType: {
      type: String,
      enum: ['Financial', 'Housing', 'Food', 'Utility', 'Other'], // Categories of assistance
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically set the creation date
    },
    updatedAt: {
      type: Date,
      default: Date.now, // Automatically update the last modification date
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

// Create the model
const AssistanceProgram = mongoose.model('AssistanceProgram', AssistanceProgramSchema);

// Export the model
module.exports = AssistanceProgram;
