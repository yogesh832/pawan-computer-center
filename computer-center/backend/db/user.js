// const mongoose = require('mongoose')

// const UserSchema = new mongoose.Schema({
//     name:{ type: String, required: true},
//     fathername: { type: String, required: true},
//     mothername: { type: String, required: true},
//     dob: Date,
//     course: String,
//     courseOption: String,
//     state: String,
//     district: String,
//     qualification: String,
//     contactno: String,
//     guardiancontact: String,
//     adhar: Number,
//     gender: String,
//     category: String,
//     religion: String,
//     martialstatus: String,
//     photo: Buffer, 
//     signature: Buffer,
//     marksheet: Buffer,
//     address: String,
// })


// const User = mongoose.model('User', UserSchema);

// module.exports = User;

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
}, {
  timestamps: true
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
