import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { HiMiniPencil } from "react-icons/hi2";
import { FaNewspaper } from "react-icons/fa6";
import vedio from "../../../../../frontend/src/assets/vedio.mp4";
import { Link } from "react-router-dom";

const AdminUI = () => {
  // State to store user count
  const [userCount, setUserCount] = useState(0);
const [studentCount, setStudentCount] = useState(0);
  // Fetch user count on component mount
  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users"); // Fetch all users
        setUserCount(response.data.length); // Set the user count based on the response
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    };


    const fetchStudentCount = async () => {
      try {
        const response = await axios.get("http://localhost:5000/dashboard/AddStudent");
        // Assuming the API returns the count of students in response.data.count
        if (response.data && response.data.length !== undefined) {
          setStudentCount(response.data.length);
        } else {
          console.error("Student count not found in the response.");
        }
      } catch (error) {
        console.error("Error fetching student count:", error);
      }
    };

    fetchStudentCount();
    fetchUserCount();
  }, []); // Empty dependency array to run once when component mounts

  return (
    
    <div className="mb-20 bg-white">
      <div className="bg-cover bg-center h-40 flex mt-10 w-full p-2">
        <img
          className="rounded-full h-32 w-32"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ19TMJHkL25P8HAp6O7qPPUE4wplZZl_g7Dw&s"
          alt=""
        />
        <div className="text-2xl mt-5 ml-20">
          Pawan Kumar <br />
          <span className="text-[12px] text-gray-500">
            (Admin: Pawan Computer Center)
          </span>
        </div>
        <div className="">
          <div>
            <video className="h-40 mb-2 ml-40" width="600" autoPlay loop muted>
              <source src={vedio} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {/* First Section - Display Total Users */}
          <div className="p-6 rounded-lg shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-center">
              <div className="text-xl font-semibold">{userCount + studentCount } Total Users</div>
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
              <div className="text-xl font-semibold">{studentCount} Enrolled Students</div>
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
              <div className="text-xl font-semibold text-white">
                0 Students Certificate
              </div>
              <div className="text-3xl text-white">
                <HiMiniPencil />
              </div>
            </div>
           <Link to={"/dashboard/SeeAllStudent"}> <button className="mt-4 bg-blue-800 text-white py-2 px-4 rounded-full hover:bg-blue-900 transition-colors duration-300">
              More Info
            </button>
            </Link>
          </div>

          {/* Fourth Section */}
          <div className="bg-yellow-500 p-6 rounded-lg shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-between items-center">
              <div className="text-xl font-semibold">{userCount} Applications</div>
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
    </div>
  );
};

export default AdminUI;
