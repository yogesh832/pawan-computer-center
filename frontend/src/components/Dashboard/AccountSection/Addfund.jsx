import React from "react";

const AddFund = () => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8 m-5">
      <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">
        Send Transaction Receipt
      </h2>
      <form>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="amount"
          >
            Amount<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="amount"
            className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="comment"
          >
            Comment <span className="text-gray-500 text-sm">(optional)</span>
          </label>
          <textarea
            id="comment"
            className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
            placeholder="Enter any comments"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="receipt"
          >
            Transaction Receipt<span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            id="receipt"
            className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          >
            Submit Receipt
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFund;
