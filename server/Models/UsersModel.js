const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    min: 3,
    max: 20,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    min: 8,
    required: true,
  },
  isAvatarImageSet: {
    type: Boolean,
    default: false,
  },
  avatarImage: {
    type: String,
    default: '',
  },
});

module.exports = mongoose.model('Users', userSchema);
