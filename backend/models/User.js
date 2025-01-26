const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the user schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
}, {
  timestamps: true,
});

// Password hashing middleware
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();  // Only hash password if it's new or modified

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);  // Propagate any error to next middleware
  }
});

// Method to check password
UserSchema.methods.checkPassword = function(loginPw) {
  return bcrypt.compare(loginPw, this.password);  // bcrypt.compare returns a promise, so await when using it
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
