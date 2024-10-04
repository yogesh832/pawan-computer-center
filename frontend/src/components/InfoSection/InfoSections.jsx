import React from 'react';
import { FaAmericanSignLanguageInterpreting, FaBook, FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';

const InfoSections = () => {
  return (
    <div className="flex flex-wrap justify-between p-5 rounded-lg w-11/12 mx-auto">
      <div className="bg-gray-300 text-black p-5 rounded-lg text-left w-[20%] flex flex-col justify-between m-2 relative transform transition-transform duration-300 hover:scale-105">
        <div className="flex justify-center mb-5">
          <FaAmericanSignLanguageInterpreting className="text-6xl text-orange-600 transition-transform duration-300 hover:scale-110" />
        </div>
        <h2 className="text-xl font-bold text-center">Courses</h2>
        <p className="text-sm mt-3 text-center">M.S. OFFICE, TALLY, PROGRAMMING Courses, JAVA</p>
      </div>

      <div className="bg-gray-300 text-black p-5 rounded-lg text-left w-[20%] flex flex-col justify-between m-2 relative transform transition-transform duration-300 hover:scale-105">
        <div className="flex justify-center mb-5">
          <FaBook className="text-6xl text-orange-600 transition-transform duration-300 hover:scale-110" />
        </div>
        <h2 className="text-xl font-bold text-center">Books and Library</h2>
        <p className="text-sm mt-3 text-center">A collection of books and other materials accessible for use.</p>
      </div>

      <div className="bg-gray-300 text-black p-5 rounded-lg text-left w-[20%] flex flex-col justify-between m-2 relative transform transition-transform duration-300 hover:scale-105">
        <div className="flex justify-center mb-5">
          <FaChalkboardTeacher className="text-6xl text-orange-600 transition-transform duration-300 hover:scale-110" />
        </div>
        <h2 className="text-xl font-bold text-center">Teachers</h2>
        <p className="text-sm mt-3 text-center">Professional knowledge and skill gained through formal preparation and experience.</p>
      </div>

      <div className="bg-gray-300 text-black p-5 rounded-lg text-left w-[20%] flex flex-col justify-between m-2 relative transform transition-transform duration-300 hover:scale-105">
        <div className="flex justify-center mb-5">
          <FaUserGraduate className="text-6xl text-orange-600 transition-transform duration-300 hover:scale-110" />
        </div>
        <h2 className="text-xl font-bold text-center">Certification</h2>
        <p className="text-sm mt-3 text-center">Awarded by accredited institutions.</p>
      </div>
    </div>
  );
};

export default InfoSections;
