import React from "react";

const StudentTable = ({ students }) => {
  if (!students || students.length === 0) {
    return <p className="text-center text-gray-500">No data to display</p>;
  }

  const keys = students[0] ? Object.keys(students[0]) : [];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6 overflow-x-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Submitted Student Data</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field</th>
              {students.map((_, index) => (
                <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student {index + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {keys.map((field) => (
              <tr key={field}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{field.charAt(0).toUpperCase() + field.slice(1)}</td>
                {students.map((student, index) => (
                  <td key={index} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {student[field] && typeof student[field] === "object" && student[field].name
                      ? student[field].name
                      : student[field] || "N/A"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
    