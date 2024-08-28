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
    <div className="container p-4">
      <style>
        {`
          /* Container for horizontal scrolling */
          .table-container {
            overflow-x: auto; /* Enables horizontal scrolling */
            -webkit-overflow-scrolling: touch; /* Smooth scrolling on touch devices */
          }
          /* Table styles */
          .table {
            font-size: 0.875rem; /* Smaller font size for the table */
            min-width: 1000px; /* Ensures that table has enough width to show scroll */
          }
          .table th, .table td {
            padding: 0.5rem; /* Smaller padding for compact table */
          }
          .btn-sm {
            font-size: 0.75rem; /* Smaller font size for buttons */
            padding: 0.25rem 0.5rem; /* Smaller padding for buttons */
          }

          /* Responsive styles */
          @media (max-width: 768px) {
            .table {
              font-size: 0.75rem; /* Even smaller font size on small screens */
            }
            .btn-sm {
              font-size: 0.625rem; /* Even smaller font size for buttons on small screens */
            }
          }
        `}
      </style>
      <h1 className="text-2xl font-bold mb-4">All Students</h1>
      {students.length > 0 ? (
        <div className="table-container">
          <table className="table table-sm table-striped table-bordered">
            <thead className="thead-light">
              <tr>
                <th>Registration Number</th>
                <th>Name</th>
                <th>Course</th>
                <th>Course Option</th>
                <th>Aadhaar No</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student._id}>
                  <td>{student.registrationNumber}</td>
                  <td>{student.firstname} {student.lastname}</td>
                  <td>{student.course}</td>
                  <td>{student.courseOption}</td>
                  <td>{student.adhar}</td>
                  <td>
                    <div className="d-flex flex-column align-items-center">
                      <button
                        className="btn btn-success mb-2 btn-sm"
                        onClick={() => handleViewDetails(student.registrationNumber)}
                      >
                        <FaEye className="me-2" /> View Details
                      </button>
                      <div className="d-flex">
                        <button
                          className="btn btn-primary me-2 btn-sm"
                          onClick={() => handleEdit(student.registrationNumber)}
                        >
                          <CiEdit className="me-2" /> Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(student.registrationNumber)}
                        >
                          <MdDelete className="me-2" /> Delete
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
