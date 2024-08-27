import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Student = () => {
  const { registrationNumber } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/dashboard/AddStudent/${registrationNumber}`)
      .then((response) => {
        if (response.data) {
          setStudent(response.data);
        } else {
          console.error("No data received");
        }
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, [registrationNumber]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">View Student</h1>
      <div className="border rounded-lg shadow-lg p-6 bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr className=" text-white">
              <th className="border bg-blue-500 px-4 py-2">Field</th>
              <th className="border bg-blue-500 px-4 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 font-semibold">Registration Number</td>
              <td className="border px-4 py-2">{student.registrationNumber}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">First Name</td>
              <td className="border px-4 py-2">{student.firstname}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Last Name</td>
              <td className="border px-4 py-2">{student.lastname}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Date of Birth</td>
              <td className="border px-4 py-2">{student.dob}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">State</td>
              <td className="border px-4 py-2">{student.state}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">District</td>
              <td className="border px-4 py-2">{student.district}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Course</td>
              <td className="border px-4 py-2">{student.course}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Course Option</td>
              <td className="border px-4 py-2">{student.courseOption}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Mother's Name</td>
              <td className="border px-4 py-2">{student.mothername}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Qualification</td>
              <td className="border px-4 py-2">{student.qualification}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Contact No</td>
              <td className="border px-4 py-2">{student.contactno}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Guardian's Contact</td>
              <td className="border px-4 py-2">{student.guardiancontact}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Aadhaar No</td>
              <td className="border px-4 py-2">{student.adhar}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Gender</td>
              <td className="border px-4 py-2">{student.gender}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Category</td>
              <td className="border px-4 py-2">{student.category}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Religion</td>
              <td className="border px-4 py-2">{student.religion}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Marital Status</td>
              <td className="border px-4 py-2">{student.maritalstatus}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Permanent Address</td>
              <td className="border px-4 py-2">{student.address}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Present Address</td>
              <td className="border px-4 py-2">{student.presentaddress}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Photo</td>
              <td className="border px-4 py-2">
                <img src={student.photo} alt="Student Photo" className="w-32 h-32 object-cover rounded-lg border" />
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-semibold">Signature</td>
              <td className="border px-4 py-2">
                <img src={student.signature} alt="Student Signature" className="w-32 h-32 object-cover rounded-lg border" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Student;
