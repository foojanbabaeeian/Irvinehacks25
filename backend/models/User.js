const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email"
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  }
}, {
  timestamps: true
});

// Password hashing middleware
UserSchema.pre('save', async function(next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) return next();

  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    
    // Hash the password along with the salt
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    return next(error);
  }
});

// Method to check password
UserSchema.methods.checkPassword = function(loginPw) {
  return bcrypt.compareSync(loginPw, this.password);
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
