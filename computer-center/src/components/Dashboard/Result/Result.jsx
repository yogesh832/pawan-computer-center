import React from "react";

function Result() {
  const resultData = {
    registerationNumber: "123456",
    studentName: "John Doe",
    motherName: "Jane Doe",
    dob: "01/01/2005",
    duration: "12 Months",
    courseName: "ABCD Course",
    centerName: "PAWAN COMPUTER CENTER",
    courseCode: "pcc1",
    session: "Mar-2022 To Feb-2023",  
    
    subjects: [
      { code: "184", name: "C++", theory: "062", practical: "020", total: "082", grade: "B1" },
      { code: "085", name: "JAVA", theory: "054", practical: "020", total: "074", grade: "C2" },
      { code: "241", name: "JavaScript", theory: "056", practical: "020", total: "076", grade: "B1" },
      { code: "086", name: "Excel", theory: "050", practical: "020", total: "070", grade: "B1" },
      { code: "087", name: "Power Point", theory: "064", practical: "020", total: "084", grade: "B1" },
      { code: "004", name: "Premiere Pro", theory: "061", practical: "020", total: "081", grade: "B2" },
    ],
    result: "PASS",
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 m-10">
      {/* Centering the entire result container */}
      <div className="bg-white shadow-lg p-8 rounded-xl w-full max-w-4xl mx-4">
        {/* Header with Curved Text */}
        <div className="text-center mb-8">
          <svg width="500" height="90" className="mx-auto">
            <defs>
              {/* Curve for text path */}
              <path id="curve" d="M 50 150 A 200 100 0 0 1 450 150" fill="transparent" />
            </defs>
            <text width="500" className="font-bold text-2xl">
              <textPath href="#curve" startOffset="50%" textAnchor="middle" fill="black">
                PAWAN COMPUTER CENTER
              </textPath>
            </text>
          </svg>
        </div>

        {/* Title and Additional Info */}
        <div className="text-center mb-6">
          <p className="text-sm text-gray-600">An Institution of National Importance under Ministry of Education, Govt. of India</p>
          <p className="text-xs text-gray-500">NSDC Affiliated | ISO 9001 Certified</p>
          <h1 className="text-2xl font-semibold text-gray-800">Marks Sheet</h1>
        </div>

        {/* Candidate Details */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <p><strong>Registration Number:</strong> {resultData.registerationNumber}</p>
            <p><strong>Student Name:</strong> {resultData.studentName}</p>
            <p><strong>S/O, D/O, W/O:</strong> {resultData.motherName}</p>
            <p><strong>Date of Birth:</strong> {resultData.dob}</p>
            <p><strong>Duration:</strong> {resultData.duration}</p>
            <p><strong>Course Name:</strong> {resultData.courseName}</p>
            <p><strong>Center Name:</strong> {resultData.centerName}</p>
            <p><strong>Course Code:</strong> {resultData.courseCode}</p>
            <p><strong>Session:</strong> {resultData.session}</p>
            <p></p>
          </div>
        </div>

        {/* Subject Table */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-2 text-left">SUB CODE</th>
                <th className="p-2 text-left">SUB NAME</th>
                <th className="p-2 text-left">THEORY</th>
                <th className="p-2 text-left">I.A / PRACTICAL</th>
                <th className="p-2 text-left">TOTAL</th>
                <th className="p-2 text-left">POSITIONAL GRADE</th>
              </tr>
            </thead>
            <tbody>
              {resultData.subjects.map((subject, index) => (
                <tr key={index} className="border-t border-gray-300 text-gray-700">
                  <td className="p-2">{subject.code}</td>
                  <td className="p-2">{subject.name}</td>
                  <td className="p-2">{subject.theory}</td>
                  <td className="p-2">{subject.practical}</td>
                  <td className="p-2">{subject.total}</td>
                  <td className="p-2">{subject.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Result */}
        <div className="text-center mt-8">
          <div className="inline-block bg-green-100 text-green-700 px-6 py-3 rounded-full font-semibold shadow-md">
            <p className="text-lg"><strong>Result:</strong> {resultData.result}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
