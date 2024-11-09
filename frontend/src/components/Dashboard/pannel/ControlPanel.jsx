import React from "react";

const ProfileHeader = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full bg-gray-100 p-6">
      {/* Profile Section */}
      <div className="bg-purple-100 p-6 rounded w-full max-w-screen-lg shadow-lg">
        <div className="flex flex-col items-center">
          <img
            src="https://www.gravatar.com/avatar/?d=mp"
            alt="Pawan Kumar"
            className="rounded-full w-24 h-24 mb-4 border-4 border-purple-200"
          />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">Pawan Kumar</h1>
            <p className="text-sm text-gray-600">Admin</p>
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div className="flex flex-col sm:flex-row mt-6 w-full max-w-screen-lg space-y-4 sm:space-y-0 sm:space-x-4">
        {/* About Section */}
        <div className="bg-white p-6 rounded shadow-md w-full sm:w-1/2">
          <h2 className="text-xl font-bold text-gray-800 mb-4">About</h2>
          <p>
            <strong>Gender:</strong> Male
          </p>
          <p>
            <strong>Born:</strong> June 26, xxxx
          </p>
          <p>
            <strong>Address:</strong> Bageshwar
          </p>
          <p>
            <strong>Email:</strong> pawan123@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +91-1231313414
          </p>
        </div>

        {/* Student Enrolled Section */}
        <div className="bg-white p-6 rounded shadow-md w-full sm:w-1/2">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Student Enrolled
          </h2>
          <ul className="space-y-2">
            <li className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
              <span>Student 1</span>
              <span className="text-sm text-gray-600">
                Enrolled: 1st Jan 2024
              </span>
            </li>
            <li className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
              <span>Student 2</span>
              <span className="text-sm text-gray-600">
                Enrolled: 15th Feb 2024
              </span>
            </li>
            <li className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
              <span>Student 3</span>
              <span className="text-sm text-gray-600">
                Enrolled: 10th Mar 2024
              </span>
            </li>
            <li className="bg-gray-100 p-3 rounded-md flex justify-between items-center">
              <span>Student 4</span>
              <span className="text-sm text-gray-600">
                Enrolled: 22nd Apr 2024
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
