import React, { useState } from "react";

function StudentDashboardUI() {
  // Hardcoded student data
  const student = {
    firstname: "John",
    lastname: "Doe",
    registrationNumber: "123456",
    course: "Computer Science",
    dob: "2000-01-01", // Date of Birth
    fatherName: "Richard Doe",
    motherName: "Jane Doe",
    aadhaarNumber: "1234 5678 9012",
    address: "123 Main St, Springfield, IL, 62701",
    photo: "https://via.placeholder.com/150", // Placeholder image URL
    certificates: [
      { id: 1, name: "JavaScript Basics" },
      { id: 2, name: "React Fundamentals" }
    ],
    completionStatus: "Completed 75%" // Example completion status
  };

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
    alert('Request to edit completion status has been sent to admin.');
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-6 text-center">
        <h2 className="text-4xl font-extrabold text-blue-700 animate__animated animate__fadeIn animate__delay-1s">
          Welcome, {student.firstname}!
        </h2>
        <p className="text-lg text-gray-500">Here's your student profile:</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        {/* Profile Picture */}
        <div className="flex justify-center mb-4">
          <img
            src={student.photo}
            alt={`${student.firstname} ${student.lastname}`}
            className="w-32 h-32 object-cover rounded-full border-4 border-gray-200"
          />
        </div>

        {/* Text Information */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-2">{student.firstname} {student.lastname}</h1>
          <p className="text-gray-600 mb-1">ID: {student.registrationNumber}</p>
          <p className="text-gray-600 mb-1">Course: {student.course}</p>
          <p className="text-gray-600 mb-2">Date of Birth: {new Date(student.dob).toLocaleDateString()}</p>
          <p className="text-gray-600 mb-2">Father's Name: {student.fatherName}</p>
          <p className="text-gray-600 mb-2">Mother's Name: {student.motherName}</p>
          <p className="text-gray-600 mb-2">Aadhaar Number: {student.aadhaarNumber}</p>
          <p className="text-gray-600 mb-4">Address: {student.address}</p>
          <p className="text-gray-600 mb-2">Completion Status: {student.completionStatus}</p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => alert('Viewing certificates')}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              View Certificates
            </button>
            <button
              onClick={() => alert('Checking course completion')}
              className="bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Check Completion
            </button>
            <button
              onClick={handleEditClick}
              className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              Request Edit
            </button>
            <button
              onClick={() => alert('Viewing course details')}
              className="bg-purple-500 text-white py-2 px-4 rounded-lg shadow hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              View Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboardUI;
