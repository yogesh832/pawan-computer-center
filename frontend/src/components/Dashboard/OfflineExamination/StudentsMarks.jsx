// StudentsMarks.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StudentsMarks = () => {
  const { registrationNumber } = useParams();
  const [studentData, setStudentData] = useState({
    name: "",
    registrationNo: registrationNumber,
  });
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/addStudent/${registrationNumber}`
        );
        const student = response.data;
        console.log(student);
        setStudentData((prevData) => ({
          ...prevData,
          name: student.name || "Unknown Student",
        }));
      } catch (error) {
        console.error("Error fetching student data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, [registrationNumber]);

  const addSubject = () => {
    setSubjects([
      ...subjects,
      { name: "", practical: "", written: "", total: "" },
    ]);
  };

  const updateSubject = (index, field, value) => {
    const newSubjects = [...subjects];
    newSubjects[index][field] = value;

    if (field === "practical" || field === "written") {
      newSubjects[index].total =
        parseInt(newSubjects[index].practical || "0", 10) +
          parseInt(newSubjects[index].written || "0", 10) || 0;
    }

    setSubjects(newSubjects);
  };

  if (loading) {
    return <div>Loading student data...</div>; // Loading state
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg m-5 p-6">
      <h2 className="text-2xl font-semibold text-center mb-4">Student Marks</h2>

      <div className="text-center mb-6">
        <span className="font-bold">Name:</span> {studentData.name} &nbsp; |
        &nbsp;
        <span className="font-bold">Registration No:</span>{" "}
        {studentData.registrationNo}
      </div>

      <table className="min-w-full border-collapse border border-black">
        <thead>
          <tr className="border border-black">
            <th className="px-4 py-2 border border-black font-bold">Subject</th>
            <th className="px-4 py-2 border border-black font-bold">
              Practical Marks
            </th>
            <th className="px-4 py-2 border border-black font-bold">
              Written Marks
            </th>
            <th className="px-4 py-2 border border-black font-bold">
              Total Marks
            </th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index} className="border border-black">
              <td className="px-4 py-2 border border-black">
                <input
                  type="text"
                  placeholder="Subject Name"
                  className="w-full px-2 py-1 border rounded"
                  value={subject.name}
                  onChange={(e) => updateSubject(index, "name", e.target.value)}
                />
              </td>
              <td className="px-4 py-2 border border-black">
                <input
                  type="number"
                  placeholder="Practical Marks"
                  className="w-full px-2 py-1 border rounded"
                  value={subject.practical}
                  onChange={(e) =>
                    updateSubject(index, "practical", e.target.value)
                  }
                />
              </td>
              <td className="px-4 py-2 border border-black">
                <input
                  type="number"
                  placeholder="Written Marks"
                  className="w-full px-2 py-1 border rounded"
                  value={subject.written}
                  onChange={(e) =>
                    updateSubject(index, "written", e.target.value)
                  }
                />
              </td>
              <td className="px-4 py-2 border border-black">
                <input
                  type="number"
                  placeholder="Total"
                  className="w-full px-2 py-1 border rounded"
                  value={subject.total}
                  readOnly
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={addSubject}
        className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600"
      >
        Add Subject
      </button>
    </div>
  );
};

export default StudentsMarks;
