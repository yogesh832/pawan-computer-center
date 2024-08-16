const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{ type: String, required: true},
    fathername: { type: String, required: true},
    mothername: { type: String, required: true},
    dob: Date,
    nationality: String,
    qualification: String,
    contactno: String,
    guardiancontact: String,
    adhar: String,
    gender: String,
    category: String,
    religion: String,
    martialstatus: String,
    photo: Buffer, 
    signature: Buffer,
    marksheet: Buffer,
    address: String,
    presentaddress: String,
})


const User = mongoose.model('User', UserSchema);

module.exports = User;