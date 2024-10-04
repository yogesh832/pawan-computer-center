import React from "react";

const Passbook = () =>{
    return(
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg m-5">
        <div className="bg-blue-600 rounded-t-lg p-4">
          <h2 className="text-3xl font-semibold text-center text-white">
          Account Transactions (View)
          </h2>
        </div>
        <div className="p-4">
          <div className="overflow-x-auto">
          <table className="border-collapse border border-gray-300 w-full">
  <thead>
    <tr>
      <th className="p-2 text-left font-bold text-gray-500 border border-gray-300">Date</th>
      <th className="p-2 text-left font-bold text-gray-500 border border-gray-300">Transaction From</th>
      <th className="p-2 text-left font-bold text-gray-500 border border-gray-300">Transaction To</th>
      <th className="p-2 text-left font-bold text-gray-500 border border-gray-300">Transaction Mode</th>
      <th className="p-2 text-left font-bold text-gray-500 border border-gray-300">Purpose</th>
      <th className="p-2 text-right font-bold text-gray-500 border border-gray-300">Credit Amount</th>
      <th className="p-2 text-right font-bold text-gray-500 border border-gray-300">Debit Amount</th>
      <th className="p-2 text-right font-bold text-gray-500 border border-gray-300">Balance Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="p-2 text-left border border-gray-300">03-08-2024</td>
      <td className="p-2 text-left border border-gray-300">Centre </td>
      <td className="p-2 text-left border border-gray-300"> Centre</td>
      <td className="p-2 text-left border border-gray-300"></td>
      <td className="p-2 text-left border border-gray-300">Student activation charge, for Student Id: RVSP2408105464 Activation Date: 2024-08-03</td>
      <td className="p-2 text-right border border-gray-300">0</td>
      <td className="p-2 text-right border border-gray-300">500</td>
      <td className="p-2 text-right border border-gray-300">0</td>
    </tr>
    <tr>
      <td className="p-2 text-left border border-gray-300">06-07-2024</td>
      <td className="p-2 text-left border border-gray-300">Centre </td>
      <td className="p-2 text-left border border-gray-300"> Centre</td>
      <td className="p-2 text-left border border-gray-300"></td>
      <td className="p-2 text-left border border-gray-300">Student activation charge, for Student Id: RVSP2407105428 Activation Date: 2024-07-06</td>
      <td className="p-2 text-right border border-gray-300">0</td>
      <td className="p-2 text-right border border-gray-300">500</td>
      <td className="p-2 text-right border border-gray-300">500</td>
    </tr>
    <tr>
      <td className="p-2 text-left border border-gray-300">06-07-2024</td>
      <td className="p-2 text-left border border-gray-300">Head Office </td>
      <td className="p-2 text-left border border-gray-300"> Centre</td>
      <td className="p-2 text-left border border-gray-300">Online</td>
      <td className="p-2 text-left border border-gray-300">Fund add by Head Office</td>
      <td className="p-2 text-right border border-gray-300">1000</td>
      <td className="p-2 text-right border border-gray-300">0</td>
      <td className="p-2 text-right border border-gray-300">1000</td>
    </tr>
    <tr>
      <td className="p-2 text-left border border-gray-300">30-06-2024</td>
      <td className="p-2 text-left border border-gray-300">Centre </td>
      <td className="p-2 text-left border border-gray-300"> Centre</td>
      <td className="p-2 text-left border border-gray-300"></td>
      <td className="p-2 text-left border border-gray-300">Student activation charge, for Student Id: RVSP2406105424 Activation Date: 2024-06-30</td>
      <td className="p-2 text-right border border-gray-300">0</td>
      <td className="p-2 text-right border border-gray-300">500</td>
      <td className="p-2 text-right border border-gray-300">0</td>
    </tr>
    <tr>
      <td className="p-2 text-left border border-gray-300">30-06-2024</td>
      <td className="p-2 text-left border border-gray-300">Head Office </td>
      <td className="p-2 text-left border border-gray-300"> Centre</td>
      <td className="p-2 text-left border border-gray-300">Online</td>
      <td className="p-2 text-left border border-gray-300">Fund add by Head Office</td>
      <td className="p-2 text-right border border-gray-300">500</td>
      <td className="p-2 text-right border border-gray-300">0</td>
      <td className="p-2 text-right border border-gray-300">500</td>
    </tr>
    <tr>
      <td className="p-2 text-left border border-gray-300">15-02-2024</td>
      <td className="p-2 text-left border border-gray-300">Head Office </td>
      <td className="p-2 text-left border border-gray-300"> Centre</td>
      <td className="p-2 text-left border border-gray-300">Activation</td>
      <td className="p-2 text-left border border-gray-300">Center Successfully added by Head Office</td>
      <td className="p-2 text-right border border-gray-300">0</td>
      <td className="p-2 text-right border border-gray-300">0</td>
      <td className="p-2 text-right border border-gray-300">0</td>
    </tr>
  </tbody>
</table>
          </div>
        </div>
      </div>
    )
}

export default Passbook