import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StudentsResult = () => {
  const { registrationNumber } = useParams(); // Get registration number from the URL
  const [studentData, setStudentData] = useState(null); // State to store student data
  const [allMarksData, setAllMarksData] = useState(null); // State to store marks data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state

  useEffect(() => {
    const fetchStudentResult = async () => {
      try {
        setLoading(true);
        // Fetch student result from the backend API
        const response = await axios.get(
          `http://localhost:5000/studentsResult/${registrationNumber}`
        );

        setStudentData(response.data.student); // Set the student data
        setAllMarksData(response.data.marks);

        // console.log(response.data.student, "student"); // Log the student data
        // console.log(response.data.marks); // Log the marks data
      } catch (error) {
        setError("Error fetching student data");
      } finally {
        setLoading(false);
      }
    };

    fetchStudentResult();
  }, [registrationNumber]); // Fetch data when registrationNumber changes

  if (loading) return <p>Loading...</p>; // Show loading state while fetching data
  if (error) return <p>{error}</p>; // Show error if fetching fails
  if (!studentData) return <p>No student data found</p>; // If no data found

  // Calculate totals
 
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg m-5 p-6">
      <h2 className="text-2xl font-semibold text-center mb-4">Student Results</h2>
      <div className="text-center mb-6">
        <p className="font-bold">Name: <span className="font-normal">{studentData.firstname} {studentData.lastname}</span></p>
        
        <p className="font-bold">Registration No:<span className="font-normal">{registrationNumber}</span></p> 
      </div>


      {/* Display individual subject marks */}
      <table className="min-w-full border-collapse border border-black">
        <thead>
          <tr className="border border-black">
            <th className="px-4 py-2 border border-black font-bold">Subject</th>
            <th className="px-4 py-2 border border-black font-bold">Practical Marks (out of 20)</th>
            <th className="px-4 py-2 border border-black font-bold">Written Marks (out of 80)</th>
            <th className="px-4 py-2 border border-black font-bold">Total Marks (out of 100)</th>
          </tr>
        </thead>
        <tbody>
          {allMarksData.marksData && allMarksData.marksData.length > 0 ? (
            allMarksData.marksData.map((subject, index) => (
              <tr key={index} className="border border-black">
                <td className="px-4 py-2 border border-black">{subject.name}</td>
                <td className="px-4 py-2 border border-black">{subject.practical}</td>
                <td className="px-4 py-2 border border-black">{subject.written}</td>
                <td className="px-4 py-2 border border-black">{subject.total}</td>
              </tr>
            ))
          ) : (
            <tr className="border border-black">
              <td
                colSpan="4"
                className="px-4 py-2 border border-black text-center"
              >
                No result data available
              </td>
            </tr>
          )}

          {/* Additional row displaying total marks */}
          <tr className="border border-black">
            <td className="px-4 py-2 border border-black font-bold">Total</td>
            <td className="px-4 py-2 border border-black">{allMarksData.totalPractical}</td>
            <td className="px-4 py-2 border border-black">{allMarksData.totalWritten}</td>
            <td className="px-4 py-2 border border-black">{allMarksData.totalMarks}</td>
          </tr>
        </tbody>
      </table>

            {/* Display student marks */}
            {allMarksData && (
        <div className="m-6">
          <h3 className="font-bold text-xl mb-2">Marks Overview</h3>
       
          <p>
            <strong>Percentage:</strong> {allMarksData.percentage}%
          </p>
          <p>
            <strong>Status:</strong> {allMarksData.status}
          </p>
        </div>
      )}

    </div>
  );
};

export default StudentsResult;
