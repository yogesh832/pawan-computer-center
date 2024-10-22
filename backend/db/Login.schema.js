const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  name: String,
  Registration: { type: String,  unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('Login', loginSchema);
