const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name']
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: true
  }
},
  {
    timestamps: true
  }
);

module.exports = mongoose.model('User', userSchema);