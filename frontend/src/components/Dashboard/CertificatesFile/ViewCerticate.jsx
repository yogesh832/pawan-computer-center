import React, { useState } from "react";
import axios from "axios";
import bgImg from "../../../assets/bg-img.png";
import bgBorder from "../../../assets/Images/bgBorder.png";

const CertificatePage = () => {
  const [registrationNo, setRegistrationNo] = useState(""); // Changed from studentID to registrationNo
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegistrationNoChange = (event) => {
    setRegistrationNo(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `http://localhost:5000/dashboard/AddStudent/${registrationNo}` // Use registrationNo for the API request
      );
      setStudent(response.data); // Set fetched data
    } catch (err) {
      console.error("Error fetching student data:", err);
      setError("Failed to fetch student data. Please check the registration number and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Certificate Tracking</h1>

      {/* Registration Number Input Form */}
      {!student && (
        <div className="bg-white p-4 rounded-md mb-4">
          <h2 className="text-xl font-bold text-black mb-4">Track Certificate</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="registrationNo" className="block text-black text-sm font-bold mb-2">
                Registration Number *
              </label>
              <input
                type="text"
                id="registrationNo"
                value={registrationNo}
                onChange={handleRegistrationNoChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required // Optional: To ensure the field is not empty
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit Request
            </button>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      )}

      {/* Certificate Display */}
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        student && (
          <div className="relative w-[900px] h-[594px] m-20 border-2 border-gray-400">
            <img
              src={bgImg}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ zIndex: 1 }}
            />
            <img
              src={bgBorder}
              alt="Certificate Border"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ zIndex: 2 }}
            />
            <div className="relative z-10 p-8 mx-[100px] my-[180px]">
              <div className="mb-8 leading-relaxed">
                <p className=" leading-8 text-xl text-gray-700">
                  This is to certify that Mr./Miss.{" "}
                  <span className="text-base font-extrabold">
                    {student.firstname} {student.lastname}
                  </span>
                  , S/O, D/O, W/O{" "}
                  <span className="text-base font-extrabold">{student.mothername}</span>, with the
                  registration number{" "}
                  <span className="text-base font-extrabold">{student.registrationNumber}</span>,
                  has successfully completed the{" "}
                  <span className="text-base font-extrabold">{student.courseOption}</span> course
                  during the period of{" "}
                  <span className="text-base font-extrabold">01/10/2023 TO 31/12/2023</span>. The
                  grade obtained is{" "}
                  <span className="text-base font-extrabold">A</span>, with a score of{" "}
                  <span className="text-base font-extrabold">82%</span>. The course was conducted at{" "}
                  <span className="text-base font-extrabold">PAWAN COMPUTER CENTER</span>.
                </p>
              </div>
              <div className="flex justify-between mb-4 text-sm">
                <p className="text-gray-800">
                  Issue Date: <span className="font-semibold">12/02/2024</span>
                </p>
              </div>
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
        )
      )}
    </div>
  );
};

export default CertificatePage;
