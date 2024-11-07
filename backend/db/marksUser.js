const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Assuming `User` schema is already defined and imported here
const User = require('./user.js'); // Adjust path if necessary

// Define schema for individual subjects and their marks
const subjectSchema = new Schema({
  subject: {
    type: String,
    required: true
  },
  marksObtained: {
    type: Number,
    required: true,
    min: 0 // Ensure marks are non-negative
  },
  totalMarks: {
    type: Number,
    required: true,
    min: 0
  }
});

// Define schema for marks, referencing the User schema
const marksSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Link to the User model
    required: true
  },
  marks: [subjectSchema],
  totalMarks: {
    type: Number,
    default: 0
  },
  totalObtained: {
    type: Number,
    default: 0
  },
  percentage: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['Passed', 'Failed'],
    default: 'Passed'
  }
}, {
  timestamps: true
});

// Pre-save middleware to calculate total marks, obtained marks, and percentage
marksSchema.pre('save', function (next) {
  this.totalMarks = this.marks.reduce((sum, subject) => sum + subject.totalMarks, 0);
  this.totalObtained = this.marks.reduce((sum, subject) => sum + subject.marksObtained, 0);
  this.percentage = this.totalMarks ? (this.totalObtained / this.totalMarks) * 100 : 0;
  this.status = this.percentage >= 40 ? 'Passed' : 'Failed'; // Assuming 40% is passing

  next();
});

const Marks = mongoose.model('Marks', marksSchema);

module.exports = Marks;
