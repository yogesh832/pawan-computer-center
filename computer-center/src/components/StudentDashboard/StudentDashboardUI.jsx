// StudentDashboardUI.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import ProgressBar from './ProgressBar.jsx';

const StudentDashboardUI = () => {
  const totalDays = 30; // Total number of days in the course
  const courseStartDate = new Date('2024-08-01'); // Adjust the start date accordingly

  const calculateCurrentDay = () => {
    const today = new Date();
    const elapsedTime = today - courseStartDate;
    const elapsedDays = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    return Math.min(elapsedDays + 1, totalDays); // Ensure the current day does not exceed totalDays
  };

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentDay, setCurrentDay] = useState(calculateCurrentDay());

  useEffect(() => {
    const registrationNumber = 'PCC000008'; // Ensure this is correct
    axios
      .get(`http://localhost:5000/dashboard/AddStudent/${registrationNumber}`)
      .then((response) => {
        setStudent(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
        setError("Failed to fetch student data");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDay(calculateCurrentDay());
    }, 24 * 60 * 60 * 1000); // Update daily

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!student) {
    return <div>No student data available.</div>;
  }

  return (
    <div className="container p-4">
      <h1 className="text-3xl font-bold mb-4">Student Profile</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-center mb-4">
          <img
            src={student.photo || "https://via.placeholder.com/150"}
            alt={`${student.firstname} ${student.lastname}`}
            className="w-32 h-32 object-cover rounded-full border-4 border-gray-200"
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">
            {student.firstname} {student.lastname}
          </h2>
          <p className="text-gray-600 mb-1">ID: {student.registrationNumber}</p>
          <p className="text-gray-600 mb-1">Course: {student.course}</p>
          <p className="text-gray-600 mb-2">
            Date of Birth: {new Date(student.dob).toLocaleDateString()}
          </p>
          <p className="text-gray-600 mb-2">Father's Name: {student.fatherName}</p>
          <p className="text-gray-600 mb-2">Mother's Name: {student.mothername}</p>
          <p className="text-gray-600 mb-2">Aadhaar Number: {student.adhar}</p>
          <p className="text-gray-600 mb-4">Address: {student.address}</p>
          <p className="text-gray-600 mb-2">Completion Status: {student.completionStatus}</p>
          
          <h1 className="text-2xl font-bold mb-4">Course Progress</h1>
          <ProgressBar currentDay={currentDay} totalDays={totalDays} />

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <button
              onClick={() => alert("Viewing certificates")}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <FaEye className="me-2" /> View Certificates
            </button>
            <button
              onClick={() => alert("Checking course completion")}
              className="bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <FaEye className="me-2" /> Check Completion
            </button>
            <button
              onClick={() => alert("Request to edit completion status sent to admin.")}
              className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <CiEdit className="me-2" /> Request Edit
            </button>
            <button
              onClick={() => alert("Viewing course details")}
              className="bg-purple-500 text-white py-2 px-4 rounded-lg shadow hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <FaEye className="me-2" /> View Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardUI;

















// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function StudentDashboardUI() {
//   const [student, setStudent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5173/dashboard/AddStudent/PCC000005") // Fixed URL for specific registration number
//       .then((response) => {
//         setStudent(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching student data:", error);
//         setError("Failed to fetch student data");
//         setLoading(false);
//       });
//   }, []); // Empty dependency array to run once when component mounts

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!student) {
//     return <div>No student data available.</div>;
//   }


//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <div className="mb-6 text-center">
//         <h2 className="text-4xl font-extrabold text-blue-700 animate__animated animate__fadeIn animate__delay-1s">
//           Welcome, {student.firstname}!
//         </h2>
//         <p className="text-lg text-gray-500">Here's your student profile:</p>
//       </div>

//       <div className="bg-white rounded-lg shadow-lg p-6">
//         {/* Profile Picture */}
//         <div className="flex justify-center mb-4">
//           <img
//             src={student.photo || "https://via.placeholder.com/150"}
//             alt={`${student.firstname} ${student.lastname}`}
//             className="w-32 h-32 object-cover rounded-full border-4 border-gray-200"
//           />
//         </div>

//         {/* Text Information */}
//         <div className="text-center">
//           <h1 className="text-2xl font-semibold mb-2">
//             {student.firstname} {student.lastname}
//           </h1>
//           <p className="text-gray-600 mb-1">ID: {student.registrationNumber}</p>
//           <p className="text-gray-600 mb-1">Course: {student.course}</p>
//           <p className="text-gray-600 mb-2">
//             Date of Birth: {new Date(student.dob).toLocaleDateString()}
//           </p>
//           <p className="text-gray-600 mb-2">Father's Name: {student.fatherName}</p>
//           <p className="text-gray-600 mb-2">Mother's Name: {student.motherName}</p>
//           <p className="text-gray-600 mb-2">
//             Aadhaar Number: {student.aadhaarNumber}
//           </p>
//           <p className="text-gray-600 mb-4">Address: {student.address}</p>
//           <p className="text-gray-600 mb-2">
//             Completion Status: {student.completionStatus}
//           </p>

//           {/* Action Buttons */}
//           <div className="flex flex-wrap justify-center gap-3">
//             <button
//               onClick={() => alert("Viewing certificates")}
//               className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               View Certificates
//             </button>
//             <button
//               onClick={() => alert("Checking course completion")}
//               className="bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//             >
//               Check Completion
//             </button>
//             <button
//               onClick={() => alert("Request to edit completion status sent to admin.")}
//               className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//             >
//               Request Edit
//             </button>
//             <button
//               onClick={() => alert("Viewing course details")}
//               className="bg-purple-500 text-white py-2 px-4 rounded-lg shadow hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
//             >
//               View Course
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StudentDashboardUI;