import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";

const BackBtn = () => {
  return (
    <div className="relative w-12 h-15 p-2 bg-gray-300 text-blue-700 text-center font-extrabold text-3xl  rounded-lg overflow-hidden cursor-pointer flex items-center justify-center gap-2 hover:bg-gray-400 hover:text-blue-500 transition duration-500 ease-out">
      <RiArrowGoBackFill />
    </div>
  );
};

export default BackBtn;
