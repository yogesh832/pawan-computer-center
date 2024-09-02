

// const mongoose = require('mongoose')

// const UserSchema = new mongoose.Schema({
//   firstname: { type: String  },
//   lastname: { type: String  },
//   dob: { type: String },
//   district: { type: String  },
//   course: { type: String  },
//   courseOption: { type: String },
//   mothername: { type: String },
//   qualification: { type: String },
//   contactno: { type: String },
//   guardiancontact: { type: String },
//   adhar: { type: String },
//   gender: { type: String },
//   category: { type: String },
//   religion: { type: String },
//   maritalstatus: { type: String },
//   address: { type: String },
//   presentaddress: { type: String },
//   photo: { type: String },
//   signature: { type: String },
//   marksheet: { type: String },
//   registrationNumber: { type: String }
// }, {
//   timestamps: true
// });

// const User = mongoose.model('User', UserSchema);

// module.exports = User;



// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//   firstname: { type: String, required: true },
//   lastname: { type: String, required: true },
//   registrationNumber: { type: String, required: true },
// }, {
//   timestamps: true // This adds createdAt and updatedAt fields automatically
// });

// const User = mongoose.model('User', UserSchema);

// module.exports = User;


// db/user.js or a relevant file

// const mongoose = require('mongoose');
// const User = require('../db/user'); // Adjust the path as needed

// // Example function to fetch file from GridFS (Replace with actual implementation)
// const getFileFromGridFS = async (photoId) => {
//   if (!photoId) return null;

//   // Replace this with actual GridFS retrieval logic
//   try {
//     const db = mongoose.connection.db;
//     const gfs = new mongoose.mongo.GridFSBucket(db, { bucketName: 'uploads' });

//     return new Promise((resolve, reject) => {
//       const downloadStream = gfs.openDownloadStream(new mongoose.Types.ObjectId(photoId));
//       let fileData = [];

//       downloadStream.on('data', (chunk) => fileData.push(chunk));
//       downloadStream.on('end', () => resolve(Buffer.concat(fileData)));
//       downloadStream.on('error', (err) => reject(err));
//     });
//   } catch (error) {
//     console.error('Error fetching file from GridFS:', error);
//     throw error;
//   }
// };

// // Fetch user and their associated file
// const getUserWithFile = async (userId) => {
//   try {
//     // Find user by ID
//     const user = await User.findById(userId).exec();
//     if (!user) {
//       throw new Error('User not found');
//     }
    
//     // Fetch file information
//     const file = await getFileFromGridFS(user.photo);

//     return { ...user.toObject(), file };
//   } catch (error) {
//     console.error('Error in getUserWithFile:', error);
//     throw error;
//   }
// };

// module.exports = getUserWithFile;



const mongoose = require('mongoose');

// Define User Schema
const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  registrationNumber: String,
  photo: {
    type: mongoose.Schema.Types.ObjectId, // Reference to File
    ref: 'uploads.files' // Assuming 'uploads.files' is your GridFS collection name
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Check if model already exists to avoid recompiling
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;

