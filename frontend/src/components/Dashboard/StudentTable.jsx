// StudentTable.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa6";

const StudentTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://pawan-computer-center-backend.vercel.app/dashboard/AddStudent"
      )
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
    <>
      {students.length > 0 ? (
        <div className="max-h-96 overflow-y-auto">
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-400 px-4 py-2">
                    Registration Number
                  </th>
                  <th className="border border-gray-400 px-4 py-2">Name</th>
                  <th className="border border-gray-400 px-4 py-2">Course</th>
                  <th className="border border-gray-400 px-4 py-2">
                    Course Option
                  </th>
                  <th className="border border-gray-400 px-4 py-2">
                    Aadhaar No
                  </th>
                  <th className="border border-gray-400 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student._id}>
                    <td className="border border-gray-400 px-4 py-2">
                      {student.registrationNumber}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {student.firstname} {student.lastname}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {student.course}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {student.courseOption}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {student.adhar}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      <div className="flex flex-col gap-3 text-center justify-center items-center">
                        <button className="bg-green-500 gap-2 flex hover:bg-green-700 text-white font-bold py-2 px-2 rounded">
                          <FaEye className="w-5 h-5 font-bold" /> View Details
                        </button>
                        <div className="flex gap-2 flex-row">
                          <button className="bg-blue-500 flex gap-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <CiEdit className="w-5 h-5 font-bold" /> Edit
                          </button>
                          <button className="bg-red-500 gap-2 flex hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            <MdDelete className="w-5 h-5 font-bold" /> Delete
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p>No students data available.</p>
      )}
    </>
  );
};

export default StudentTable;
