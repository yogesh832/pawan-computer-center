import React from "react";

const Viewstudentfee = () =>{
    return(
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg m-5">
      <div className="bg-blue-600 rounded-t-lg p-4">
        <h2 className="text-3xl font-semibold text-center text-white">
          Student Fee Payment
        </h2>
      </div>
      <div className="p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-blue-500 text-white font-bold">Sl.No.</th>
                <th className="py-2 px-4 bg-blue-500 text-white font-bold">Fee Date</th>
                <th className="py-2 px-4 bg-blue-500 text-white font-bold">Student Name</th>
                <th className="py-2 px-4 bg-blue-500 text-white font-bold">Course Category</th>
                <th className="py-2 px-4 bg-blue-500 text-white font-bold">Course Name</th>
                <th className="py-2 px-4 bg-blue-500 text-white font-bold">Amount</th>
              </tr>
            </thead>
            <tbody>
              {/* Example Rows */}
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">2024-08-08</td>
                <td className="border px-4 py-2">John Doe</td>
                <td className="border px-4 py-2">Science</td>
                <td className="border px-4 py-2">Physics</td>
                <td className="border px-4 py-2">$100</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">2024-08-08</td>
                <td className="border px-4 py-2">Jane Smith</td>
                <td className="border px-4 py-2">Arts</td>
                <td className="border px-4 py-2">History</td>
                <td className="border px-4 py-2">$120</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    )
}

export default Viewstudentfee