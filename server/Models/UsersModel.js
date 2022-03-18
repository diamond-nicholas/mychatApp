const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({});

module.exports = mongoose.model('Users', userSchema);
