import React from 'react';
import bgImg  from '../../../assets/bg-img.png';
const Certificate = () => {
  return (
    <div className="border-2  bg-[#618597] border-red-600" style={{ width: '794px', height: '594px', margin: 'auto' }}>
    <div className=" border-2 border-red" style={{ width: '730px', height: '530px', margin: 'auto' }}>
    <div  style={{ backgroundImage: `url(${bgImg})` }}className="  bg-white border-2 border-yellow-600 p-8 w-[800px] mx-auto shadow-lg font-serif">
      {/* Header Section */}
      <div className="text-center  mb-4">
        <h1 className="text-3xl font-extrabold text-red-600">
          DIGITAL COMPUTER INSTITUTE OF TECHNOLOGY
        </h1>
        <p className="text-sm font-medium text-gray-800 mt-2">
          An Institute of Advance Technology <br />
          Registered company: 74999UP2018PTC102562 <br />
          Registered Under Ministry of Corporate Affairs Govt. of India <br />
          An ISO 9001:2015 Certified Institute
        </p>
      </div>

      {/* Title Section */}
      <div className="text-center mb-4 ">
        <h2 className="text-xl font-bold text-white bg-red-600 inline-block px-4 py-2">
          CERTIFICATE OF COMPUTER
        </h2>
      </div>

      {/* Body Content */}
      <div className="mb-8 text-sm leading-loose">
        <p className="text-black text-2xl">
          This is to certify that Mr./Miss. <span className="font-semibold">MOHAN RAM</span> <br />
          S/O, D/O, W/O................. <span className="font-semibold">MR. DHANI RAM</span>
          with his/her Regd No. <span className="font-semibold">UK1220221045</span> <br />
          Successfully completed the course <span className="font-semibold">CERTIFICATE IN COMPUTER APPLICATION (CCA)</span> <br />
          Course Duration.................. <span className="font-semibold">01/10/2023 TO 31/12/2023</span> <br />
          Grade.................. <span className="font-semibold">A</span> And secured <span className="font-semibold">82%</span> <br />
          Centre.................. <span className="font-semibold">DIGITAL COMPUTER INSTITUTE OF TECHNOLOGY</span>
        </p>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between mb-4 text-sm">
        <p className="text-gray-800">
          Issue Date: <span className="font-semibold">12/02/2024</span>
        </p>
        <p className="text-gray-800">
          Description of the course: <span className="font-semibold">CERTIFICATE</span>
        </p>
      </div>

      {/* Performance Marks Table */}
      {/* <div className="border-2 border-black p-2 text-xs text-gray-800 mb-4">
        <p className="font-semibold">Performance Marks Range</p>
        <div className="flex justify-between mt-2">
          <div className="flex flex-col items-center">
            <p className="font-bold">Excellent</p>
            <p>(85% - 100%)</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">Very Good</p>
            <p>(75% - 84%)</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">Good</p>
            <p>(60% - 74%)</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">Average</p>
            <p>(40% - 59%)</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold text-red-600">Failure</p>
            <p>(Below 40%)</p>
          </div>
        </div>
      </div> */}

      {/* Footer Section with Signatures */}
      <div className="flex justify-between items-center text-sm">
        <div className="text-center">
          <p>Director</p>
        </div>
        <div className="text-center">
          <p>Exam Controller</p>
        </div>
      </div>

      {/* Footer Logos */}
      <div className="flex justify-between mt-4">
        <img src="logo1_url_here" alt="Logo 1" className="h-12" />
        <img src="logo2_url_here" alt="Logo 2" className="h-12" />
        <img src="logo3_url_here" alt="Logo 3" className="h-12" />
        <img src="logo4_url_here" alt="Logo 4" className="h-12" />
      </div>
    </div>
    </div>
    </div>
  );
};

export default Certificate;