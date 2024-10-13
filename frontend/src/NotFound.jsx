// src/components/NotFound.jsx

import React from "react";
import { FaHome } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <MdErrorOutline className="text-6xl text-red-500 mb-4" />
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        <FaHome className="mr-2" />
        Go to Home
      </a>
    </div>
  );
};

export default NotFound;
