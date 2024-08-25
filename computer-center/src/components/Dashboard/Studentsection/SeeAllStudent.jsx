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
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">Registration Number</th>
              <th className="border border-gray-400 px-4 py-2">First Name</th>
              <th className="border border-gray-400 px-4 py-2">Last Name</th>
              <th className="border border-gray-400 px-4 py-2">Date of Birth</th>
              <th className="border border-gray-400 px-4 py-2">State</th>
              <th className="border border-gray-400 px-4 py-2">District</th>
              <th className="border border-gray-400 px-4 py-2">Course</th>
              <th className="border border-gray-400 px-4 py-2">Course Option</th>
              <th className="border border-gray-400 px-4 py-2">Mother's Name</th>
              <th className="border border-gray-400 px-4 py-2">Qualification</th>
              <th className="border border-gray-400 px-4 py-2">Contact No</th>
              <th className="border border-gray-400 px-4 py-2">Guardian's Contact</th>
              <th className="border border-gray-400 px-4 py-2">Aadhaar No</th>
              <th className="border border-gray-400 px-4 py-2">Gender</th>
              <th className="border border-gray-400 px-4 py-2">Category</th>
              <th className="border border-gray-400 px-4 py-2">Religion</th>
              <th className="border border-gray-400 px-4 py-2">Marital Status</th>
              <th className="border border-gray-400 px-4 py-2">Permanent Address</th>
              <th className="border border-gray-400 px-4 py-2">Present Address</th>
              <th className="border border-gray-400 px-4 py-2">Photo</th>
              <th className="border border-gray-400 px-4 py-2">Signature</th>
              <th className="border border-gray-400 px-4 py-2">Marksheet</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td className="border border-gray-400 px-4 py-2">
                  {student.registrationNumber}
            {}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {student.firstname}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {student.lastname}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {student.dob}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {student.state}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {student.district}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {student.course}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {student.courseOption}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {student.mothername}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {student.qualification}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {student.contactno}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {student.guardiancontact}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {student.adhar}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {student.gender}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {student.category}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {student.religion}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {student.maritalstatus}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {student.address}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {student.presentaddress}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <img src={student.photo} alt="Student Photo" />
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <img src={student.signature} alt="Student Signature" />
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <a href={student.marksheet} target="_blank" rel="noopener noreferrer">View Marksheet</a>
                </td>
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
