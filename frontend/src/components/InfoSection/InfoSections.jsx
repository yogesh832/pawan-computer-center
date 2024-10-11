import React from 'react';
import { FaAmericanSignLanguageInterpreting, FaBook, FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';

const InfoSections = () => {
  const infoItems = [
    {
      icon: <FaAmericanSignLanguageInterpreting className="text-6xl text-orange-600 transition-transform duration-300 hover:scale-110" />,
      title: 'Courses',
      description: 'M.S. OFFICE, TALLY, PROGRAMMING Courses, JAVA',
    },
    {
      icon: <FaBook className="text-6xl text-orange-600 transition-transform duration-300 hover:scale-110" />,
      title: 'Books and Library',
      description: 'A collection of books and other materials accessible for use.',
    },
    {
      icon: <FaChalkboardTeacher className="text-6xl text-orange-600 transition-transform duration-300 hover:scale-110" />,
      title: 'Teachers',
      description: 'Professional knowledge and skill gained through formal preparation and experience.',
    },
    {
      icon: <FaUserGraduate className="text-6xl text-orange-600 transition-transform duration-300 hover:scale-110" />,
      title: 'Certification',
      description: 'Awarded by accredited institutions.',
    },
  ];

  return (
    <div className="flex flex-wrap justify-between p-5 rounded-lg w-11/12 mx-auto">
      {infoItems.map(({ icon, title, description }, index) => (
        <div key={index} className="bg-gray-300 text-black p-5 rounded-lg w-full sm:w-[48%] lg:w-[23%] flex flex-col justify-between m-2 relative transform transition-transform duration-300 hover:scale-105">
          <div className="flex justify-center mb-5">
            {icon}
          </div>
          <h2 className="text-xl font-bold text-center">{title}</h2>
          <p className="text-sm mt-3 text-center">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoSections;
