// server.js or app.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connectDB = require("./db/dbConnection");
const LoginModel = require("./db/Login.schema.js"); // Import schema here
const Counter = require("./db/counter");
const { GridFSBucket } = require("mongodb");
const multer = require("multer");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

// Connect to the database
connectDB()
  .then(() => {
    const db = mongoose.connection.db;
    gfs = new GridFSBucket(db, { bucketName: "uploads" });
    console.log("Connected to MongoDB and GridFSBucket initialized");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

// JWT secret key
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

// Register route
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the user already exists
    const existingUser = await LoginModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new LoginModel({ name, email, password: hashedPassword });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Error registering user" });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await LoginModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id, name: user.name }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token, name: user.name });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Error logging in user" });
  }
});

// Initialize GridFSBucket
let gfs;
connectDB()
  .then(() => {
    const db = mongoose.connection.db;
    gfs = new GridFSBucket(db, { bucketName: "uploads" });
    console.log("Database connected and GridFSBucket initialized");
  })
  .catch((error) => {
    console.error("Failed to connect to database:", error);
  });

// Configure Multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to handle form submissions with multiple file uploads
app.post(
  "/dashboard/AddStudent",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "signature", maxCount: 1 },
    { name: "marksheet", maxCount: 1 },
  ]),
  async (req, res) => {
    console.log("Request received:", req.body);
    console.log("Files received:", req.files);

    if (req.fileValidationError) {
      return res.status(400).send(req.fileValidationError);
    }

    try {
      if (!gfs) {
        return res.status(500).send("GridFS is not initialized.");
      }

      let counter = await Counter.findById("registrationNumber");
      if (!counter) {
        counter = await Counter.create({
          _id: "registrationNumber",
          sequence_value: 0,
        });
      }
      counter.sequence_value += 1;
      await counter.save();

      const registrationNumber = `PCC${String(counter.sequence_value).padStart(
        6,
        "0"
      )}`;

      const uploadFileToGridFS = (file) => {
        return new Promise((resolve, reject) => {
          if (file) {
            const uploadStream = gfs.openUploadStream(file.originalname);
            uploadStream.end(file.buffer);

            uploadStream.on("finish", () => {
              console.log(`File uploaded successfully: ${file.originalname}`);
              resolve(uploadStream.id);
            });

            uploadStream.on("error", (error) => {
              console.error(
                `Upload error for file ${file.originalname}:`,
                error
              );
              reject(error);
            });
          } else {
            console.log("No file to upload");
            resolve(null);
          }
        });
      };

      // Validate required fields
      const requiredFields = [
        "firstname",
        "lastname",
        "state",
        "maritalstatus",
      ];
      for (const field of requiredFields) {
        if (!req.body[field]) {
          return res.status(400).json({ error: `${field} is required` });
        }
      }

      // Upload files to GridFS
      const photoId = req.files.photo
        ? await uploadFileToGridFS(req.files.photo[0])
        : null;
      const signatureId = req.files.signature
        ? await uploadFileToGridFS(req.files.signature[0])
        : null;
      const marksheetId = req.files.marksheet
        ? await uploadFileToGridFS(req.files.marksheet[0])
        : null;

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
      console.error("Error handling request:", error);
      res.status(500).send("Failed to add student. Please try again.");
    }
  }
);

// Route to fetch all students
app.get("/dashboard/AddStudent", async (req, res) => {
  try {
    const students = await User.find({});
    const studentsWithPhotos = students.map((student) => ({
      ...student.toObject(),
      photo: student.photo
        ? `http://localhost:${port}/dashboard/AddStudent/photo/${student.photo}`
        : null,
      signature: student.signature
        ? `http://localhost:${port}/dashboard/AddStudent/photo/${student.signature}`
        : null,
      marksheet: student.marksheet
        ? `http://localhost:${port}/dashboard/AddStudent/photo/${student.marksheet}`
        : null,
    }));
    res.status(200).json(studentsWithPhotos);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).send("Failed to fetch students. Please try again.");
  }
});

// Route to fetch student photos from GridFS
app.get("/dashboard/AddStudent/photo/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("Invalid photo ID.");
    }

    const fileId = new mongoose.Types.ObjectId(id);
    const downloadStream = gfs.openDownloadStream(fileId);

    downloadStream.on("data", (chunk) => res.write(chunk));
    downloadStream.on("end", () => res.end());
    downloadStream.on("error", (error) => {
      console.error("Error downloading file:", error);
      res.status(404).send("File not found.");
    });
  } catch (error) {
    console.error("Error fetching student photo:", error);
    res.status(500).send("Failed to fetch photo. Please try again.");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
