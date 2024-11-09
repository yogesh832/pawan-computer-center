import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewMarks = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/dashboard/AddStudent"
      );
      if (Array.isArray(response.data)) {
        setStudents(response.data);
      } else {
        setError("Unexpected data format");
      }
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg m-5">
      <div className="bg-blue-600 rounded-t-lg p-4">
        <h2 className="text-3xl font-semibold text-center text-white">
          Offline Examination Marks
        </h2>
      </div>
      <div className="p-4">
        <div className="overflow-x-auto md:overflow-x-visible">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-blue-500 text-white font-bold">
                  Sl.No.
                </th>
                <th className="py-2 px-4 bg-blue-500 text-white font-bold">
                  Student Registration Number
                </th>
                <th className="py-2 px-4 bg-blue-500 text-white font-bold">
                  Student Name
                </th>
                <th className="py-2 px-4 bg-blue-500 text-white font-bold">
                  Course
                </th>

                <th className="py-2 px-4 bg-blue-500 text-white font-bold">
                  Total Marks
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={student.id}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">
                    {student.registrationNumber}
                  </td>
                  <td className="border px-4 py-2">
                    {student.firstname + " " + student.lastname}
                  </td>
                  <td className="border px-4 py-2">{student.course}</td>

                  <td className="border px-4 py-2">{student.totalMarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewMarks;
