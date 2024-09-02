const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const { GridFSBucket } = require('mongodb');
const connectDB = require('./db/dbConnection'); // Ensure this file exports the connectDB function
const User = require('./db/user'); // Ensure this file exports the User model
const Counter = require('./db/counter');

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors({ origin: '*' })); // Temporarily allow all origins for testing

// Initialize GridFSBucket
let gfs;
connectDB().then(() => {
  const db = mongoose.connection.db; // Access the MongoDB database instance
  gfs = new GridFSBucket(db, { bucketName: 'uploads' });
  console.log('Database connected and GridFSBucket initialized');
}).catch(error => {
  console.error('Failed to connect to database:', error);
});

// Configure Multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to handle form submissions with file uploads
app.post('/dashboard/AddStudent', upload.single('photo'), async (req, res) => {
  console.log('Request received:', req.body); // Log the request body
  console.log('File received:', req.file); // Log the file object

  try {
    if (!gfs) {
      return res.status(500).send('GridFS is not initialized.');
    }

    let counter = await Counter.findById('registrationNumber');
    if (!counter) {
      counter = await Counter.create({
        _id: 'registrationNumber',
        sequence_value: 0,
      });
    }
    counter.sequence_value += 1;
    await counter.save();

    const registrationNumber = `PCC${String(counter.sequence_value).padStart(6, '0')}`;

    const uploadFileToGridFS = (file) => {
      return new Promise((resolve, reject) => {
        if (file) {
          const uploadStream = gfs.openUploadStream(file.originalname);
          uploadStream.end(file.buffer);

          uploadStream.on('finish', () => {
            console.log(`File uploaded successfully: ${file.originalname}`);
            resolve(uploadStream.id); // Return fileId
          });

          uploadStream.on('error', (error) => {
            console.error(`Upload error for file ${file.originalname}:`, error);
            reject(error);
          });
        } else {
          console.log('No file to upload');
          resolve(null);
        }
      });
    };

    // Validate required fields
    const requiredFields = ['firstname', 'lastname'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    // Upload file to GridFS
    const photoId = req.file ? await uploadFileToGridFS(req.file) : null;

    // Create a new student document with image metadata
    const newStudent = new User({
      registrationNumber,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      photo: photoId, // Store the fileId from GridFS
    });

    await newStudent.save();

    res.status(201).json(newStudent);
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).send('Failed to add student. Please try again.');
  }
});

// Route to fetch all students
app.get('/dashboard/AddStudent', async (req, res) => {
  try {
    const students = await User.find({});
    // Add full URL for the photo field
    const studentsWithPhotos = students.map(student => ({
      ...student.toObject(),
      photo: student.photo ? `http://localhost:5000/dashboard/AddStudent/photo/${student.photo}` : null
    }));
    res.status(200).json(studentsWithPhotos);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).send('Failed to fetch students. Please try again.');
  }
});

// Route to fetch student photos from GridFS
app.get('/dashboard/AddStudent/photo/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send('Invalid photo ID.');
    }

    const fileId = new mongoose.Types.ObjectId(id);
    const downloadStream = gfs.openDownloadStream(fileId);

    downloadStream.on('data', chunk => res.write(chunk));
    downloadStream.on('end', () => res.end());
    downloadStream.on('error', error => {
      console.error('Error downloading file:', error);
      res.status(404).send('File not found.');
    });
  } catch (error) {
    console.error('Error fetching student photo:', error);
    res.status(500).send('Failed to fetch photo. Please try again.');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
