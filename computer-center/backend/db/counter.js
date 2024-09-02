const mongoose = require('mongoose');

// Define Counter Schema
const counterSchema = new mongoose.Schema({
  _id: String,
  sequence_value: Number
});

// Check if model already exists to avoid recompiling
const Counter = mongoose.models.Counter || mongoose.model('Counter', counterSchema);

module.exports = Counter;

