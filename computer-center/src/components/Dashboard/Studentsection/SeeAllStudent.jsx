import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SeeAllStudent = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/dashboard/AddStudent")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setStudents(response.data);
        } else {
          console.error("Unexpected data format:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleViewDetails = (registrationNumber) => {
    navigate(`/dashboard/AddStudent/${registrationNumber}`);
  };

  const handleEdit = (registrationNumber) => {
    navigate(`/dashboard/EditStudent/${registrationNumber}`);
  };

  const handleDelete = (registrationNumber) => {
    axios
      .delete(`http://localhost:5000/dashboard/AddStudent/${registrationNumber}`)
      .then(() => {
        setStudents((prevStudents) =>
          prevStudents.filter((student) => student.registrationNumber !== registrationNumber)
        );
      })
      .catch((error) => console.error("Error deleting student:", error));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Students</h1>
      {students.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">Registration Number</th>
                <th className="border border-gray-400 px-4 py-2">Name</th>
                <th className="border border-gray-400 px-4 py-2">Course</th>
                <th className="border border-gray-400 px-4 py-2">Course Option</th>
                <th className="border border-gray-400 px-4 py-2">Aadhaar No</th>
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
                  <td className="border border-gray-400 px-4 py-2">{student.course}</td>
                  <td className="border border-gray-400 px-4 py-2">
                    {student.courseOption}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">{student.adhar}</td>
                  <td className="border border-gray-400 px-4 py-2">
                    <div className="flex flex-col gap-3 text-center justify-center items-center">
                      <button
                        className="bg-green-500 gap-2 flex hover:bg-green-700 text-white font-bold py-2 px-2 rounded"
                        onClick={() => handleViewDetails(student.registrationNumber)}
                      >
                        <FaEye className="w-5 h-5" /> View Details
                      </button>
                      <div className="flex gap-2 flex-row">
                        <button
                          className="bg-blue-500 flex gap-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleEdit(student.registrationNumber)}
                        >
                          <CiEdit className="w-5 h-5" /> Edit
                        </button>
                        <button
                          className="bg-red-500 gap-2 flex hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleDelete(student.registrationNumber)}
                        >
                          <MdDelete className="w-5 h-5" /> Delete
                        </button>
                      </div>
                    </div>
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
