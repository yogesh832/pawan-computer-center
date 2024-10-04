import React from "react";

const ViewMarks = () => {
    return(
    <>
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
                <th className="py-2 px-4 bg-blue-500 text-white font-bold">Sl.No.</th>
                <th className="py-2 px-4 bg-blue-500 text-white font-bold">Student Uid</th>
                <th className="py-2 px-4 bg-blue-500 text-white font-bold">Student Name</th>
                <th className="py-2 px-4 bg-blue-500 text-white font-bold">Course</th>
                <th className="py-2 px-4 bg-blue-500 text-white font-bold">Subject</th>
                <th className="py-2 px-4 bg-blue-500 text-white font-bold">Semester</th>
                <th className="py-2 px-4 bg-blue-500 text-white font-bold">Theory Marks</th>
                <th className="py-2 px-4 bg-blue-500 text-white font-bold">Practical Marks</th>
                <th className="py-2 px-4 bg-blue-500 text-white font-bold">Submission Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">RVSP2407105428</td>
                <td className="border px-4 py-2">SANTOSH SINGH</td>
                <td className="border px-4 py-2">Code: RV12023 Name: ADVANCE DIPLOMA IN COMPUTER APPLICATION -II Duration: 12 Months</td>
                <td className="border px-4 py-2">HTML and CSS</td>
                <td className="border px-4 py-2">
                    <button className="bg-blue-600 p-2 rounded-md text-white">2</button>
                </td>
                <td className="border px-4 py-2">56</td>
                <td className="border px-4 py-2">25</td>
                <td className="border px-4 py-2">10-08-2024</td>
              </tr>
              </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
    )
}

export default ViewMarks;
