import React, { useState, useEffect } from "react";
import axios from "axios";

import bgImg from '../../../assets/bg-img.png';
import bgBorder from '../../../assets/Images/bgBorder.png';

const Certificate = () => {

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const registrationNumber = 'PCC000001'; // Ensure this is correct
    axios
      .get(`http://localhost:5000/dashboard/AddStudent/${registrationNumber}`)
      .then((response) => {
        setStudent(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
        setError("Failed to fetch student data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }


  return (
    <div className="relative w-[900px] h-[594px] m-20 border-2 border-gray-400">
      {/* Background Image */}
      <img
        src={bgImg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1 }} // Ensure this is below the border image
      />
      
      {/* Border Image */}
      <img
        src={bgBorder}
        alt="Certificate Border"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 2 }} // Ensure this is above the background image
      />

      {/* Content */}
      <div className="relative z-10 p-8 mx-[100px] my-[180px]">
        {/* Body Content */}
        <div className="mb-8 leading-relaxed">
          <p className=" leading-8 text-xl text-gray-700">
            This is to certify that Mr./Miss. <span className="text-base  font-extrabold">{student.firstname} {student.lastname}</span>, 
            S/O, D/O, W/O <span className="text-base font-extrabold">{student.mothername}</span>, with the 
            registration number <span className="text-base  font-extrabold">{student.registrationNumber}</span>, has successfully 
            completed the <span className="text-base  font-extrabold">{student.courseOption} </span> 
            course during the period of <span className="text-base  font-extrabold">01/10/2023 TO 31/12/2023</span>. 
            The grade obtained is <span className="text-base  font-extrabold">A</span>, with a score of 
            <span className="text-base  font-extrabold"> 82%</span>. The course was conducted at 
            <span className="text-base  font-extrabold"> PAWAN COMPUTER CENTER</span>.
          </p>
        </div>

        {/* Footer Section */}
        <div className="flex justify-between mb-4 text-sm">
          <p className="text-gray-800">
            Issue Date: <span className="font-semibold">12/02/2024</span>
          </p>
        </div>

        {/* Footer Section with Signatures */}
        <div className="flex justify-between items-center text-sm mb-4">
          <img src="logo1_url_here" alt="ProfilePic" className="h-12" />
          <div>
            <p>Director Signature</p>
          </div>
          <div>
            <p>Branch Head Signature</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;

