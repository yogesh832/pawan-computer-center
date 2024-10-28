import React from "react";

const RequestCertificate = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-10">
        Request Certificate
      </h1>
      <form className="mx-auto mt-10 w-1/2">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name *
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-4"
            type="text"
            id="name"
            name="name"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RequestCertificate;
