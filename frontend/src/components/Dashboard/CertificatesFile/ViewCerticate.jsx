import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import bgImg from "../../../assets/bg-img.png";
import bgBorder from "../../../assets/Images/bgBorder.png";
import BackBtn from "../BackBtnForAll/BackBtn";

const CertificatePage = () => {
  const { registrationNumber: urlRegistrationNumber } = useParams();
  const [registrationNo, setRegistrationNo] = useState("");
  const [student, setStudent] = useState(null);
  const [marks, setMarks] = useState(null);  // State to hold marks data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegistrationNoChange = (event) => {
    setRegistrationNo(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const regNoToUse = registrationNo || urlRegistrationNumber;
    if (!regNoToUse) {
      setError("Please provide a registration number.");
      setLoading(false);
      return;
    }

    try {
      const studentResponse = await axios.get(`http://localhost:5000/studentsResult/${regNoToUse}`);
      setStudent(studentResponse.data.student);
      setMarks(studentResponse.data.marks);  // Set marks data
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data. Please check the registration number and try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchStudentResult = async () => {
      const regNoToUse = registrationNo || urlRegistrationNumber;
      if (!regNoToUse) return;

      try {
        setLoading(true);
        const studentResponse = await axios.get(`http://localhost:5000/studentsResult/${regNoToUse}`);
        console.log(studentResponse.data); // Log the API response for debugging
        setStudent(studentResponse.data.student);
        setMarks(studentResponse.data.marks);  // Fetch marks data
      } catch (error) {
        setError("Error fetching student result data");
      } finally {
        setLoading(false);
      }
    };

    fetchStudentResult();
  }, [registrationNo, urlRegistrationNumber]);

  const downloadPDF = () => {
    const certificateDiv = document.getElementById("certificateDiv");
    html2canvas(certificateDiv, { scale: 3 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape", "px", [canvas.width, canvas.height]);
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("certificate.pdf");
    });
  };

  const studentInfo = student || {};
  const { firstname = "", lastname = "", registrationNumber = "", courseOption = "", mothername = "", createdAt = "" } = studentInfo;

  // Destructure marks object correctly, handle cases where marks may not be present
  const { totalMarks = 0, totalPractical = 0, totalWritten = 0, percentage = 0, grade = "N/A" } = marks || {};

  // Calculate percentage if not available
  const maxMarks = totalPractical + totalWritten;
  const calculatedPercentage = maxMarks ? Math.round((totalMarks / maxMarks) * 100) : 0;

  // Calculate grade based on percentage
  // const calculateGrade = (percentage) => {
  //   if (percentage >= 90) return "A+";
  //   if (percentage >= 80) return "A";
  //   if (percentage >= 70) return "B+";
  //   if (percentage >= 60) return "B";
  //   if (percentage >= 50) return "C+";
  //   if (percentage >= 40) return "C";
  //   return "Fail";
  // };

  const finalGrade = grade === "N/A" ? calculateGrade(calculatedPercentage) : grade;
  const finalPercentage = percentage === 0 ? calculatedPercentage : percentage;

  return (
    <div className="container mx-auto p-4">
      <Link to="/dashboard">
        <BackBtn />
      </Link>

      <h1 className="text-3xl font-bold text-center mb-8">Certificate Tracking</h1>

      {student && marks && (
        <button
          onClick={downloadPDF}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
        >
          Download Certificate as PDF
        </button>
      )}

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

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        student && marks && (
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
                  <span className="text-base font-extrabold">{firstname} {lastname}</span>, S/O, D/O, W/O{" "}
                  <span className="text-base font-extrabold">{mothername}</span>, with the registration number{" "}
                  <span className="text-base font-extrabold">{registrationNumber}</span>, has successfully completed the{" "}
                  <span className="text-base font-extrabold">{courseOption}</span> course during the period of{" "}
                  <span className="text-base font-extrabold">
                    {new Date(createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })} - LAST_DATE_HERE
                  </span>. The grade obtained is{" "}
                  <span className="text-base font-extrabold">{finalGrade}</span>, with a score of
                  <span className="text-base font-extrabold">{finalPercentage}%</span>. The course was conducted at{" "}
                  <span className="text-base font-extrabold">PAWAN COMPUTER CENTER</span>.
                </p>
              </div>
              <div className="flex justify-between mb-4 text-sm">
                <p className="text-gray-800">
                  Issue Date:{" "}
                  {new Date().toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CertificatePage;
