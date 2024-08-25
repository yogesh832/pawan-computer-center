const express = require('express');
const app = express();
const port = 5000;
const connectDB = require('./db/dbConnection');
const User = require('./db/user');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');




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
    fs.mkdirSync(uploadPath, { recursive: true }); // Ensure directory exists
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // generate a unique filename
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
    const studentData = {
      ...req.body,
      photo: req.files['photo'] ? req.files['photo'][0].path : null,
      signature: req.files['signature'] ? req.files['signature'][0].path : null,
      marksheet: req.files['marksheet'] ? req.files['marksheet'][0].path : null
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




