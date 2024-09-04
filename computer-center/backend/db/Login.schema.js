// db/user.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoginSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const LoginModel = mongoose.model('Login', LoginSchema);
module.exports = LoginModel;
