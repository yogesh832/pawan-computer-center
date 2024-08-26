const express = require('express');
const app = express();
const port = 5000;
const connectDB = require('./db/dbConnection');
const User = require('./db/user');
const Counter = require('../backend/db/counter');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');


app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// console.log(path.join(__dirname, '../uploads/default'))

// Middleware
app.use(express.json());
app.use(express.static("dist"));
app.use(cors());

// Connect to the database
connectDB();

// Middleware for ensuring the uploads directory exists
app.use((req, res, next) => {
  const uploadDir = path.join(__dirname, 'uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }
  next();
});

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const userId = req.user?.id || 'default';
    const uploadPath = path.join(__dirname, 'uploads', userId);
    console.log('Upload path:', uploadPath);
    fs.mkdirSync(uploadPath, { recursive: true }); // Ensure directory exists
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + '-' + file.originalname;
    console.log('Filename:', filename); // Log the filename
    cb(null, filename);
  }
});

const upload = multer({ storage: storage });

// Define a route to handle form submissions with file uploads
app.post('/dashboard/AddStudent', cors(), upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'signature', maxCount: 1 },
  { name: 'marksheet', maxCount: 1 }
]), async (req, res) => {
  try {
    console.log('Files:', req.files); // Add this to debug
    console.log('Body:', req.body); // Add this to debug

    // Extract form data and file paths


let counter = await Counter.findById('registrationNumber');
    if (!counter) {
      counter = await Counter.create({ _id: 'registrationNumber', sequence_value: 0 });
    }
    counter.sequence_value += 1;
    await counter.save();

    const registrationNumber = `PCC${String(counter.sequence_value).padStart(6, '0')}`;

    // Extract form data and file paths
    const studentData = {
      ...req.body,
      // photo: req.files['photo'] ? req.files['photo'][0].path : null,
      photo: req.files['photo'] ? `/uploads/${userId}/${req.files['photo'][0].filename}` : null,
      signature: req.files['signature'] ? `/uploads/default/${req.files['signature'][0].filename}` : null,
      marksheet: req.files['marksheet'] ? `/uploads/default/${req.files['marksheet'][0].filename}` : null,
      registrationNumber: registrationNumber // Add registration number
      
    };

    // Save the student data to MongoDB
    const newUser = new User(studentData);
    await newUser.save();

    res.status(201).send('Student data saved successfully');
  } catch (error) {
    res.status(500).send('Error saving student data: ' + error.message);
  }
});

app.get('/dashboard/AddStudent', async (req, res) => {
  try {
    const students = await User.find(); // Fetch all students from MongoDB
    res.status(200).json(students);
  } catch (error) {
    res.status(500).send('Error fetching student data: ' + error.message);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});


