import React, { useState, useEffect } from "react";
import axios from "axios";

const SeeAllStudent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/dashboard/AddStudent")
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
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-400">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
                  Registration Number
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
                  First Name
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
                  Last Name
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
                  Course
                </th>
                <th className="px-4 py-2 text-left w-[1rem] text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
                  Course Option
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
                  Aadhaar No
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
                  Marksheet
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student._id}>
                  <td className="px-4 py-2 whitespace-nowrap border-b border-gray-300">
                    {student.registrationNumber}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap border-b border-gray-300">
                    {student.firstname}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap border-b border-gray-300">
                    {student.lastname}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap border-b border-gray-300">
                    {student.course}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap border-b border-gray-300">
                    {student.courseOption}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap border-b border-gray-300">
                    {student.adhar}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap border-b border-gray-300">
                    <a
                      href={student.marksheet}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      View Marksheet
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No students data available.</p>
      )}
    </div>
  );
};

export default SeeAllStudent;
