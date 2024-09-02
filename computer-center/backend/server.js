const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const { GridFSBucket } = require('mongodb');
const connectDB = require('./db/dbConnection.js');
const User = require('./db/user'); // Ensure this file exports the User model
const Counter = require('./db/counter');

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors({ origin: '*' }));

// Initialize GridFSBucket
let gfs;
connectDB().then(() => {
  const db = mongoose.connection.db;
  gfs = new GridFSBucket(db, { bucketName: 'uploads' });
  console.log('Database connected and GridFSBucket initialized');
}).catch(error => {
  console.error('Failed to connect to database:', error);
});

// Configure Multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to handle form submissions with multiple file uploads
app.post('/dashboard/AddStudent', upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'signature', maxCount: 1 },
  { name: 'marksheet', maxCount: 1 }
]), async (req, res) => {
  console.log('Request received:', req.body);
  console.log('Files received:', req.files);

  if (req.fileValidationError) {
    return res.status(400).send(req.fileValidationError);
  }

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
            resolve(uploadStream.id);
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
    const requiredFields = ['firstname', 'lastname', 'state', 'maritalstatus'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    // Upload files to GridFS
    const photoId = req.files.photo ? await uploadFileToGridFS(req.files.photo[0]) : null;
    const signatureId = req.files.signature ? await uploadFileToGridFS(req.files.signature[0]) : null;
    const marksheetId = req.files.marksheet ? await uploadFileToGridFS(req.files.marksheet[0]) : null;

    // Create a new student document with image metadata
    const newStudent = new User({
      registrationNumber,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      state: req.body.state,
      maritalstatus: req.body.maritalstatus,
      photo: photoId,
      signature: signatureId,
      marksheet: marksheetId,
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
    const studentsWithPhotos = students.map(student => ({
      ...student.toObject(),
      photo: student.photo ? `http://localhost:5000/dashboard/AddStudent/photo/${student.photo}` : null,
      signature: student.signature ? `http://localhost:5000/dashboard/AddStudent/photo/${student.signature}` : null,
      marksheet: student.marksheet ? `http://localhost:5000/dashboard/AddStudent/photo/${student.marksheet}` : null
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
