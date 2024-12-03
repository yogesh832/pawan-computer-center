const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer"); // multer
const { GridFSBucket } = require("mongodb");
const connectDB = require("./db/dbConnection.js");
const User = require("./db/user"); // Ensure User model is correctly defined
const Counter = require("./db/counter");

const Marks = require("./db/marksUser.js"); //for student marks
const ContactForm = require("./db/contactForm.js")

const nodemailer = require("nodemailer");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const LoginModel = require("./db/Login.schema.js");

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
// app.use(bodyParser.json()); // for nodemailer
// // JWT secret key
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key"; // Use environment variable

const allowedOrigins = [
  "http://localhost:5173",
  "https://pawan-computer-center-h5xa.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    credentials: true,
  })
);

// Preflight request handler for all routes
app.options("*", cors());

app.options("/login", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // or specify your domain
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).end();
});

// Initialize GridFSBucket
let gfs;

connectDB().then(() => {
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

// Register route
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingUser = await LoginModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new LoginModel({ name, email, password: hashedPassword });

    const token = jwt.sign({ email }, JWT_SECRET);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Error registering user" });
  }
});


// GET route for fetching all registered users
app.get("/users", async (req, res) => {
  try {
    const users = await LoginModel.find(); // Fetch all users from the database
    res.status(200).json(users); // Return the list of users
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users" });
}
});

// Sample admin data


// Login User
app.post("/login", async (req, res) => {
  const { email, password, registration } = req.body;

  try {
    const user = await LoginModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id, name: user.name, registration: user.registration },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
      sameSite: "Strict",
    });

    res.status(200).json({
      message: "Login successful",
      token,
      name: user.name,
      registration: user.registration,
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Error logging in user" });
  }
});


const admins = [
  {
    email: "pawan123@gmail.com",
    password: "password123",
    role: "admin",
  },
];

console.log("checking the console");


// Admin login route
app.post("/admin/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Received email:", email);
  console.log("Received password:", password);

  const admin = admins.find(
    (admin) => admin.email === email && admin.password === password
  );

  if (admin) {
    res.status(200).json({ message: "Login successful", admin });
  } else {
    console.log("Invalid login attempt for email:", email);
    res.status(401).json({ message: "Invalid email or password" });
  }
});



// POST: Add a new student
app.post(
"/dashboard/AddStudent",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "signature", maxCount: 1 },
    { name: "marksheet", maxCount: 1 },
  ]),
  async (req, res) => {
    console.log("Request body:", req.body); // Debug log
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
        "dob",
        "email",
        "state",
        "district",
        "course",
        "courseOption",
        "mothername",
        "fathername",
        "qualification",
        "contactno",
        "guardiancontact",
        "adhar",
        "gender",
        "category",
        "religion",
        "address",
        "presentaddress",
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
        fathername: req.body.fathername,
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
      console.error("Error handling request:", error);
      res.status(500).send("Failed to add student. Please try again.");
    }
  }
);

// DELETE: Remove a student by registration number
app.delete("/dashboard/AddStudent/:registrationNumber", async (req, res) => {
  const registrationNumber = req.params.registrationNumber;
  try {
    const result = await User.findOneAndDelete({ registrationNumber });
    if (result) {
      res.status(200).send({ message: "Student deleted successfully" });
    } else {
      res.status(404).send({ message: "Student not found" });
    }
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).send({ message: "Server error" });
  }
});

// GET: Fetch all students
app.get("/dashboard/AddStudent", async (req, res) => {
  try {
    const students = await User.find({});
    const studentsWithPhotos = students.map((student) => ({
      ...student.toObject(),
      photo: student.photo
        ? `http://localhost:5000/dashboard/AddStudent/photo/${student.photo}`
        : null,
      signature: student.signature
        ? `http://localhost:5000/dashboard/AddStudent/photo/${student.signature}`
        : null,
      marksheet: student.marksheet
        ? `http://localhost:5000/dashboard/AddStudent/photo/${student.marksheet}`
        : null,
    }));
    res.status(200).json(studentsWithPhotos);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).send("Failed to fetch students. Please try again.");
  }
});

// GET: Fetch a specific student by registration number
app.get("/dashboard/AddStudent/:registrationNumber", async (req, res) => {
  try {
    const { registrationNumber } = req.params;
    const student = await User.findOne({ registrationNumber });

    if (!student) {
      return res.status(404).send("Student not found.");
    }

    const studentWithPhotos = {
      ...student.toObject(),
      photo: student.photo
        ? `http://localhost:5000/dashboard/AddStudent/photo/${student.photo}`
        : null,
      signature: student.signature
        ? `http://localhost:5000/dashboard/AddStudent/photo/${student.signature}`
        : null,
      marksheet: student.marksheet
        ? `http://localhost:5000/dashboard/AddStudent/photo/${student.marksheet}`
        : null,
    };

    res.status(200).json(studentWithPhotos);
  } catch (error) {
    console.error("Error fetching student:", error);
    res.status(500).send("Failed to fetch student. Please try again.");
  }
});

// Backend Route Example (Node.js/Express)
app.get("/dashboard/student/:registrationNumber", async (req, res) => {
  try {
    const { registrationNumber } = req.params;
    const student = await User.findOne({ registrationNumber });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const studentWithPhotos = {
      ...student.toObject(),
      photo: student.photo
        ? `http://localhost:5000/dashboard/AddStudent/photo/${student.photo}`
        : null,
      signature: student.signature
        ? `http://localhost:5000/dashboard/AddStudent/photo/${student.signature}`
        : null,
      marksheet: student.marksheet
        ? `http://localhost:5000/dashboard/AddStudent/photo/${student.marksheet}`
        : null,
    };

    res.status(200).json(studentWithPhotos);
  } catch (error) {
    console.error("Error fetching student:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET: Fetch student photos from GridFS
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
      console.error("Error streaming file:", error);
      res.status(500).send("Failed to download photo.");
    });
  } catch (error) {
    console.error("Error fetching photo:", error);
    res.status(500).send("Failed to fetch photo.");
  }
});

// PUT: Update a student's information by registration number
app.put(
  "/dashboard/AddStudent/:registrationNumber",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "signature", maxCount: 1 },
    { name: "marksheet", maxCount: 1 },
  ]),
  async (req, res) => {
    const { registrationNumber } = req.params;

    try {
      // Validate required fields
      const requiredFields = [
        "firstname",
        "lastname",
        "dob",
        "email",
        "state",
        "district",
        "course",
        "courseOption",
        "mothername",
        "fathername",
        "qualification",
        "contactno",
        "guardiancontact",
        "adhar",
        "gender",
        "category",
        "religion",
        "address",
        "presentaddress",
      ];
      for (const field of requiredFields) {
        if (!req.body[field]) {
          return res.status(400).json({ error: `${field} is required` });
        }
      }

      // Function to handle file uploads to GridFS
      const uploadFileToGridFS = (file) => {
        return new Promise((resolve, reject) => {
          if (file) {
            const uploadStream = gfs.openUploadStream(file.originalname);
            uploadStream.end(file.buffer);

            uploadStream.on("finish", () => resolve(uploadStream.id));
            uploadStream.on("error", (error) => reject(error));
          } else {
            resolve(null);
          }
        });
      };

      // Upload new files if provided
      const photoId = req.files.photo
        ? await uploadFileToGridFS(req.files.photo[0])
        : undefined;
      const signatureId = req.files.signature
        ? await uploadFileToGridFS(req.files.signature[0])
        : undefined;
      const marksheetId = req.files.marksheet
        ? await uploadFileToGridFS(req.files.marksheet[0])
        : undefined;

      // Prepare the update data with the provided fields and uploaded files
      const updateData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        dob: req.body.dob,
        email: req.body.email,
        state: req.body.state,
        district: req.body.district,
        course: req.body.course,
        courseOption: req.body.courseOption,
        mothername: req.body.mothername,
        fathername: req.body.fathername,
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
        ...(photoId && { photo: photoId }),
        ...(signatureId && { signature: signatureId }),
        ...(marksheetId && { marksheet: marksheetId }),
      };

      // Update the student record
      const updatedStudent = await User.findOneAndUpdate(
        { registrationNumber },
        { $set: updateData },
        { new: true, runValidators: true }
      );

      if (!updatedStudent) {
        return res.status(404).send("Student not found.");
      }

      res.status(200).json(updatedStudent);
    } catch (error) {
      console.error("Error updating student:", error);
      res.status(500).send("Failed to update student. Please try again.");
    }
  }
);

//nodemailer backend logic

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send("All fields are required.");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "virender288@gmail.com",
      pass: "rfrfyxzeddbjshrz", // Use app password
    },
  });

  const mailOptions = {
    from: email,
    to: "virender288@gmail.com",
    subject: `Contact Form Submission from ${name}`,
    text: `You have received a new message from your contact form:
    
    Name: ${name}
    Email: ${email}
    Message: ${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);

    // Save to MongoDB
    const newContactForm = new ContactForm({ name, email, message });
    const savedForm = await newContactForm.save();

    console.log("Saved form:", savedForm); // Debug log
    res.status(200).send("Email sent and form data saved successfully.");
  } catch (error) {
    console.error("Error:", error.message); // Debug log for errors
    res.status(500).send("Error sending email or saving form data.");
  }
});

//get route from the backend for nodemailer
app.get("/contact-forms", async (req, res) => {
  try {
    const forms = await ContactForm.find().sort({ sentAt: -1 }); // Fetch and sort by date
    res.status(200).json(forms);
  } catch (error) {
    console.error("Error fetching contact forms:", error);
    res.status(500).send("Error fetching contact forms.");
  }
});


// POST rou// Add Marks for a Student by Registration Number
app.post('/addMarks/:registrationNumber', async (req, res) => {
  console.log(req.body); // Log received data for debugging

  try {
    const { registrationNumber } = req.params;
    const { marksData } = req.body;

    // Validate if marksData is provided and is an array
    if (!marksData || !Array.isArray(marksData) || marksData.length === 0) {
      return res.status(400).json({ message: "Marks data is required" });
    }

    // Validate each subject in marksData
    for (const [index, subject] of marksData.entries()) {
      if (
        !subject.name ||
        !subject.practical ||
        !subject.written ||
        !subject.total
      ) {
        return res.status(400).json({
          message: `Invalid data in subject ${
            index + 1
          }: Name, Practical, Written, and Total fields are required.`,
        });
      }

      // Check if practical, written, and total are numbers
      if (
        isNaN(subject.practical) ||
        isNaN(subject.written) ||
        isNaN(subject.total)
      ) {
        return res.status(400).json({
          message: `Invalid marks for subject ${
            index + 1
          }: Practical, Written, and Total must be valid numbers.`,
        });
      }
    }

    // Proceed to save the marks data to the database
    const newMarks = new Marks({
      registrationNumber,
      marksData,
    });

    await newMarks.save();

    res.status(201).json({ message: "Marks saved successfully" });
  } catch (error) {
    console.error("Error saving marks:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


// Fetch Student by Registration Number
app.get("/studentsResult/:registrationNumber", async (req, res) => {
  try {
    const { registrationNumber } = req.params;

    // Find the student by registration number
    const student = await Marks.findOne({ registrationNumber });
    
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Return the student data, including results (assuming results are part of the student document)
    res.status(200).json(student);
  } catch (error) {
    console.error("Error fetching student:", error);
    res.status(500).json({ message: "Error fetching student data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:5000`);
});
