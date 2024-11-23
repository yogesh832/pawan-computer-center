const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  name: { type: String, required: true },
  Registration: { type: String, unique: true, }, // Ensures Registration is required
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps automatically

module.exports = mongoose.model("Login", loginSchema);
