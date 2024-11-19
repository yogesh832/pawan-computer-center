import React from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { HiMiniPencil } from "react-icons/hi2";
import { FaNewspaper } from "react-icons/fa6";

const AdminUI = () => {
  return (
    <div className="bg-slate-100 flex justify-center items-center w-full min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        
        {/* First Section */}
        <div className="bg-slate-200 p-6 rounded-lg shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold">10 Total Users</div>
            <div className="text-3xl text-slate-600">
              <IoPaperPlaneOutline />
            </div>
          </div>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-300">
            More Info
          </button>
        </div>

        {/* Second Section */}
        <div className="bg-green-500 p-6 rounded-lg shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold">15 Enrolled Students</div>
            <div className="text-3xl text-white">
              <FaUsers />
            </div>
          </div>
          <button className="mt-4 bg-green-700 text-white py-2 px-4 rounded-full hover:bg-green-800 transition-colors duration-300">
          More Info
          </button>
        </div>

        {/* Third Section */}
        <div className="bg-blue-600 p-6 rounded-lg shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-white">0 Students Certificate</div>
            <div className="text-3xl text-white">
              <HiMiniPencil />
            </div>
          </div>
          <button className="mt-4 bg-blue-800 text-white py-2 px-4 rounded-full hover:bg-blue-900 transition-colors duration-300">
          More Info
          </button>
        </div>

        {/* Fourth Section */}
        <div className="bg-yellow-500 p-6 rounded-lg shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold">10 Applications</div>
            <div className="text-3xl text-white">
              <FaNewspaper />
            </div>
          </div>
          <button className="mt-4 bg-yellow-700 text-white py-2 px-4 rounded-full hover:bg-yellow-800 transition-colors duration-300">
          More Info
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default AdminUI;
