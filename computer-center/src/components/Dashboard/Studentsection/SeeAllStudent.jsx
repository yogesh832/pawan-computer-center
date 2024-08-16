import React, { useState, useEffect } from "react";
import axios from "axios";

const SeeAllStudent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/dashboard/AddStudent")
      .then((response) => {
        console.log("Fetched Data:", response.data);

        if (Array.isArray(response.data)) {
          setStudents(response.data);
        } else {
          console.error("Unexpected data format:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Students</h1>
      {students.length > 0 ? (
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">ID</th>
              <th className="border border-gray-400 px-4 py-2">First Name</th>
              <th className="border border-gray-400 px-4 py-2">Last Name</th>
              <th className="border border-gray-400 px-4 py-2">Age</th>
              <th className="border border-gray-400 px-4 py-2">Contact</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td className="border border-gray-400 px-4 py-2">{student._id}</td>
                <td className="border border-gray-400 px-4 py-2">{student.firstname}</td>
                <td className="border border-gray-400 px-4 py-2">{student.lastname}</td>
                <td className="border border-gray-400 px-4 py-2">{student.dob}</td>
                <td className="border border-gray-400 px-4 py-2">{student.contactno}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No students data available.</p>
      )}
    </div>
  );
};

export default SeeAllStudent;
