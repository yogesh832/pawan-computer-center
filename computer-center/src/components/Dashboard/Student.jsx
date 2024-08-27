import React from 'react';

const Student = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">View Student</h1>
      <div className="border rounded-lg shadow-lg p-6 overflow-x-auto">
        <table className="table-auto w-full">
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2 font-semibold whitespace-nowrap">Activation Date:</td>
              <td className="px-4 py-2">03-08-2024</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-semibold whitespace-nowrap">Application Number:</td>
              <td className="px-4 py-2">000649</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-semibold whitespace-nowrap">Applicant Name:</td>
              <td className="px-4 py-2">BHAWANA BARTI</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-semibold whitespace-nowrap">Centre Name:</td>
              <td className="px-4 py-2">Digital computer institute of technology</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-semibold whitespace-nowrap">State:</td>
              <td className="px-4 py-2">Uttarakhand</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-semibold whitespace-nowrap">District:</td>
              <td className="px-4 py-2">Bageshwar</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-semibold whitespace-nowrap">City:</td>
              <td className="px-4 py-2">Bageshwar</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2 font-semibold whitespace-nowrap">Permanent Address:</td>
              <td className="px-4 py-2">
                <div>House No: 00</div>
                <div>Vill: BARET</div>
                <div>Post Office: NACHATI</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Student;
