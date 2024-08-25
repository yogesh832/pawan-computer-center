

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  firstname: { type: String  },
  lastname: { type: String  },
  dob: { type: String },
  district: { type: String  },
  course: { type: String  },
  courseOption: { type: String },
  mothername: { type: String },
  qualification: { type: String },
  contactno: { type: String },
  guardiancontact: { type: String },
  adhar: { type: String },
  gender: { type: String },
  category: { type: String },
  religion: { type: String },
  maritalstatus: { type: String },
  address: { type: String },
  presentaddress: { type: String },
  photo: { type: String },
  signature: { type: String },
  marksheet: { type: String },
  registrationNumber: { type: String }
}, {
  timestamps: true
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
