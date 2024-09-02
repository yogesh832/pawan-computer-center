


const mongoose = require('mongoose');

// Define the user schema with all fields non-required
const userSchema = new mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  dob: { type: String },
  state: { type: String },
  district: { type: String },
  course: { type: String },
  courseOption: { type: String },
  mothername: { type: String },
  qualification: { type: String },
  contactno: { type: String },
  guardiancontact: { type: String },
  adhar: { type: String },
  gender: { type: String },
  category: { type: String },
  religion: { type: String },
  maritalstatus: { type: String },  // Optional field
  address: { type: String },
  presentaddress: { type: String },
  photo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'uploads.files'
  },
  signature: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'uploads.files'
  },
  marksheet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'uploads.files'
  },
  registrationNumber: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Check if model already exists to avoid recompiling
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;

// File retrieval functions

// Example function to fetch file from GridFS
const getFileFromGridFS = async (photoId) => {
  if (!photoId) return null;

  try {
    const db = mongoose.connection.db;
    const gfs = new mongoose.mongo.GridFSBucket(db, { bucketName: 'uploads' });

    return new Promise((resolve, reject) => {
      const downloadStream = gfs.openDownloadStream(new mongoose.Types.ObjectId(photoId));
      let fileData = [];

      downloadStream.on('data', (chunk) => fileData.push(chunk));
      downloadStream.on('end', () => resolve(Buffer.concat(fileData)));
      downloadStream.on('error', (err) => reject(err));
    });
  } catch (error) {
    console.error('Error fetching file from GridFS:', error);
    throw error;
  }
};

// Fetch user and their associated file
const getUserWithFile = async (userId) => {
  try {
    // Find user by ID
    const user = await User.findById(userId).exec();
    if (!user) {
      throw new Error('User not found');
    }
    
    // Fetch file information
    const photoFile = user.photo ? await getFileFromGridFS(user.photo) : null;
    const signatureFile = user.signature ? await getFileFromGridFS(user.signature) : null;
    const marksheetFile = user.marksheet ? await getFileFromGridFS(user.marksheet) : null;

    return { ...user.toObject(), photoFile, signatureFile, marksheetFile };
  } catch (error) {
    console.error('Error in getUserWithFile:', error);
    throw error;
  }
};

module.exports = User;


