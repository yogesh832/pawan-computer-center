const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const { GridFSBucket } = require('mongodb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config(); // Load environment variables

const connectDB = require('./db/dbConnection');
const User = require('./db/user'); // Ensure this file exports the User model
const LoginModel = require('./db/Login.schema.js');
const Counter = require('./db/counter');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({ origin: '*', credentials: true }));
app.use(cookieParser());

// Connect to the database
connectDB()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

// JWT secret key
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key'; // Use environment variable

// Initialize GridFSBucket
let gfs;
mongoose.connection.once('open', () => {
  gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: 'uploads'
  });
  console.log('GridFSBucket initialized');
});

// Configure Multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Register route
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await LoginModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new LoginModel({ name, email, password: hashedPassword });

    const token = jwt.sign({ email }, JWT_SECRET);
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await LoginModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id, name: user.name }, JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600000,
      sameSite: 'Strict',
    });

    res.status(200).json({ message: 'Login successful', token, name: user.name });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Error logging in user' });
  }
});

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
          resolve(null);
        }
      });
    };

    // Validate required fields
    const requiredFields = ['firstname', 'lastname', 'dob', 'state', 'district', 'course', 'courseOption', 'mothername', 'qualification', 'contactno', 'guardiancontact', 'adhar', 'gender', 'category', 'religion', 'address', 'presentaddress'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    // Upload files to GridFS
    const photoId = req.files.photo ? await uploadFileToGridFS(req.files.photo[0]) : null;
    const signatureId = req.files.signature ? await uploadFileToGridFS(req.files.signature[0]) : null;
    const marksheetId = req.files.marksheet ? await uploadFileToGridFS(req.files.marksheet[0]) : null;

    // Create a new student document with all fields
    const newStudent = new User({
      registrationNumber,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      dob: req.body.dob,
      email: req.body.email,
      state: req.body.state,
      district: req.body.district,
      course: req.body.course,
      courseOption: req.body.courseOption,
      mothername: req.body.mothername,
      qualification: req.body.qualification,
      contactno: req.body.contactno,
      guardiancontact: req.body.guardiancontact,
      adhar: req.body.adhar,
      gender: req.body.gender,
      category: req.body.category,
      religion: req.body.religion,
      maritalstatus: req.body.maritalstatus,
      address: req.body.address,
      presentaddress: req.body.presentaddress,
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
    const studentsWithPhotos = students.map((student) => ({
      ...student.toObject(),
      photo: student.photo ? `/dashboard/AddStudent/photo/${student.photo}` : null,
      signature: student.signature ? `/dashboard/AddStudent/photo/${student.signature}` : null,
      marksheet: student.marksheet ? `/dashboard/AddStudent/photo/${student.marksheet}` : null,
    }));
    res.status(200).json(studentsWithPhotos);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).send('Failed to fetch students. Please try again.');
  }
});

// Route to fetch a specific student by registration number
app.get('/dashboard/AddStudent/:registrationNumber', async (req, res) => {
  try {
    const { registrationNumber } = req.params;
    const student = await User.findOne({ registrationNumber });

    if (!student) {
      return res.status(404).send('Student not found.');
    }

    const studentWithPhotos = {
      ...student.toObject(),
      photo: student.photo ? `/dashboard/AddStudent/photo/${student.photo}` : null,
      signature: student.signature ? `/dashboard/AddStudent/photo/${student.signature}` : null,
      marksheet: student.marksheet ? `/dashboard/AddStudent/photo/${student.marksheet}` : null
    };

    res.status(200).json(studentWithPhotos);
  } catch (error) {
    console.error('Error fetching student:', error);
    res.status(500).send('Failed to fetch student. Please try again.');
  }
});

// Route to update a student's information and files
app.put('/dashboard/AddStudent/:registrationNumber', upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'signature', maxCount: 1 },
  { name: 'marksheet', maxCount: 1 }
]), async (req, res) => {
  try {
    const { registrationNumber } = req.params;
    const updates = req.body;

    if (req.files) {
      const updateFile = async (file, fieldName) => {
        if (file) {
          const uploadStream = gfs.openUploadStream(file.originalname);
          uploadStream.end(file.buffer);

          return new Promise((resolve, reject) => {
            uploadStream.on('finish', () => {
              resolve(uploadStream.id);
            });
            uploadStream.on('error', (error) => {
              console.error(`Upload error for file ${file.originalname}:`, error);
              reject(error);
            });
          });
        } else {
          return null;
        }
      };

      const photoId = req.files.photo ? await updateFile(req.files.photo[0], 'photo') : null;
      const signatureId = req.files.signature ? await updateFile(req.files.signature[0], 'signature') : null;
      const marksheetId = req.files.marksheet ? await updateFile(req.files.marksheet[0], 'marksheet') : null;

      if (photoId) updates.photo = photoId;
      if (signatureId) updates.signature = signatureId;
      if (marksheetId) updates.marksheet = marksheetId;
    }

    const updatedStudent = await User.findOneAndUpdate({ registrationNumber }, updates, { new: true });

    if (!updatedStudent) {
      return res.status(404).send('Student not found.');
    }

    res.status(200).json(updatedStudent);
  } catch (error) {
    console.error('Error updating student:', error);
    res.status(500).send('Failed to update student. Please try again.');
  }
});

// Route to delete a student by registration number
app.delete('/dashboard/AddStudent/:registrationNumber', async (req, res) => {
  try {
    const { registrationNumber } = req.params;
    const student = await User.findOneAndDelete({ registrationNumber });

    if (!student) {
      return res.status(404).send('Student not found.');
    }

    if (student.photo) {
      gfs.delete(new mongoose.Types.ObjectId(student.photo), (err) => {
        if (err) {
          console.error('Error deleting photo:', err);
        }
      });
    }
    if (student.signature) {
      gfs.delete(new mongoose.Types.ObjectId(student.signature), (err) => {
        if (err) {
          console.error('Error deleting signature:', err);
        }
      });
    }
    if (student.marksheet) {
      gfs.delete(new mongoose.Types.ObjectId(student.marksheet), (err) => {
        if (err) {
          console.error('Error deleting marksheet:', err);
        }
      });
    }

    res.status(200).send('Student deleted successfully.');
  } catch (error) {
    console.error('Error deleting student:', error);
    res.status(500).send('Failed to delete student. Please try again.');
  }
});

// Route to view a file by its ID
app.get('/dashboard/AddStudent/photo/:id', (req, res) => {
  const { id } = req.params;

  if (!gfs) {
    return res.status(500).send('GridFS is not initialized.');
  }

  gfs.find({ _id: new mongoose.Types.ObjectId(id) }).toArray((err, files) => {
    if (err) {
      return res.status(500).send('Failed to find file.');
    }

    if (!files || files.length === 0) {
      return res.status(404).send('No file found.');
    }

    gfs.openDownloadStream(new mongoose.Types.ObjectId(id)).pipe(res);
  });
});

// Logout route
app.post('/logout', (req, res) => {
  res.cookie('token', '', { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ message: 'Logout successful' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
