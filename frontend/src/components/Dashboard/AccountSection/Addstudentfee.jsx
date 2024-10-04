import React from "react";

const AddStudentFee = () => {
  return (
    <>
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg m-5">
        <div className="bg-blue-600 rounded-t-lg p-4">
          <h2 className="text-3xl font-semibold text-center text-white">
            Student Fee (Insert)
          </h2>
        </div>
        <div className="p-6">
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="studentId"
              >
                Student Id<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="studentId"
                className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Verify Id
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddStudentFee;
