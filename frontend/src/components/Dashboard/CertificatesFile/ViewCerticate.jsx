import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import bgImg from "../../../assets/bg-img.png";
import bgBorder from "../../../assets/Images/bgBorder.png";
import BackBtn from "../BackBtnForAll/BackBtn";

const CertificatePage = () => {
  const [registrationNo, setRegistrationNo] = useState("");
  const { registrationNumber } = useParams(); // This will get the registration number from the URL params
  const [student, setStudent] = useState(null); // Single state for student info
  const [marks, setMarks] = useState(null); // Single state for student info
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle Registration Number Input
  const handleRegistrationNoChange = (event) => {
    setRegistrationNo(event.target.value);
  };

  // Fetch Student Information
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    const regNoToUse = registrationNo || registrationNumber; // Use registration number from URL or input field

    if (!regNoToUse) {
      setError("Please provide a registration number.");
      setLoading(false);
      return;
    }

    try {
      // Make sure the URL is correct and matches your backend route
      const response = await axios.get(
        `http://localhost:5000/dashboard/AddStudent/${regNoToUse}`
      );
      setStudent(response.data);
    } catch (err) {
      console.error("Error fetching student data:", err);
      setError("Failed to fetch student data. Please check the registration number and try again.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch Marks Data (Using Registration Number)
  useEffect(() => {
    const fetchStudentResult = async () => {
      const regNoToUse = registrationNumber || student?.registrationNumber;

      if (!regNoToUse) return;

      try {
        setLoading(true);
        // Fetch student result from the backend API
        const response = await axios.get(
          `http://localhost:5000/studentsResult/${regNoToUse}`
        );
        setMarks( response.data);
        console.log(response.data );
      } catch (error) {
        setError("Error fetching student result data");
        console.log("error fetching student result data at student result");
      } finally {
        setLoading(false);
      }
    };

    fetchStudentResult();
  }, [registrationNumber, student?.registrationNumber]); // Dependencies for re-fetching

  // PDF Download Logic
  const downloadPDF = () => {
    const certificateDiv = document.getElementById("certificateDiv");

    html2canvas(certificateDiv, { scale: 3 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape", "px", [canvas.width, canvas.height]);
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("certificate.pdf");
    });
  };

  // Fallback Values for Student Data
  const studentInfo = student?.studentData || {};
  const { percentage = 0, status = "N/A" } = studentInfo;

  return (
    <div className="container mx-auto p-4">
      <Link to="/dashboard">
        <BackBtn />
      </Link>

      <h1 className="text-3xl font-bold text-center mb-8">Certificate Tracking</h1>

      {/* Download Button */}
      {student && (
        <button
          onClick={downloadPDF}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
        >
          Download Certificate as PDF
        </button>
      )}

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
                required
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
          <div id="certificateDiv" className="relative w-[900px] h-[594px] m-20 border-2 border-gray-400">
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
                <p className="leading-8 text-xl text-gray-700">
                  This is to certify that Mr./Miss.{" "}
                  <span className="text-base font-extrabold">
                    {student.firstname} {student.lastname}
                  </span>
                  , S/O, D/O, W/O{" "}
                  <span className="text-base font-extrabold">{student.mothername}</span>, with the registration number{" "}
                  <span className="text-base font-extrabold">{student.registrationNumber}</span>, has successfully completed the{" "}
                  <span className="text-base font-extrabold">{student.courseOption}</span> course during the period of{" "}
                  <span className="text-base font-extrabold">
                    {new Date(student.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })} - LAST_DATE_HERE
                  </span>. The grade obtained is 
                  <span className="text-base font-extrabold">{status}</span>, with a score of{" "}
                  <span className="text-base font-extrabold">{percentage}%</span>. The course was conducted at{" "}
                  <span className="text-base font-extrabold">PAWAN COMPUTER CENTER</span>.
                </p>
              </div>
              <div className="flex justify-between mb-4 text-sm">
                <p className="text-gray-800">
                  Issue Date: <span className="font-semibold">12/02/2024</span>
                </p>
              </div>
              <div className="flex justify-between items-center text-sm mb-4">
                <img src="logo1_url_here" alt="Logo" className="h-12" />
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
