const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstname:{ type: String, required: true},
    lastname: { type: String, required: true},
    fathername: String,
    mothername: String,
    dob: Date,
    course: String,
    courseOption: String,
    state: String,
    district: String,
    qualification: String,
    contactno: String,
    guardiancontact: String,
    adhar: Number,
    gender: String,
    category: String,
    religion: String,
    martialstatus: String,
    photo: Buffer, 
    signature: Buffer,
    marksheet: Buffer,
    address: String,
})


const User = mongoose.model('User', UserSchema);

module.exports = User;