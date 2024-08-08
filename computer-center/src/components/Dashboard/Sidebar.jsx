import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegCircle } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { AiFillProduct } from "react-icons/ai";
import { FaBuildingColumns } from "react-icons/fa6";

const Sidebar = () => {
  const [studentLink, setStudentLink] = useState("home");
  const [showStudentLinks, setShowStudentLinks] = useState(false);

  const [courseLink, setCourseLink] = useState("home");
  const [showCourseLinks, setShowCourseLinks] = useState(false);

  const [certificateLink, setCertificateLink] = useState("home");
  const [showCertificateLinks, setShowCertificateLinks] = useState(false);

  const [onlineLink, setOnlineLink] = useState("home");
  const [showOnlineLinks, setShowOnlineLinks] = useState(false);

  const [offlineLink, setOfflineLink] = useState("home");
  const [showOfflineLinks, setShowOfflineLinks] = useState(false);

  const [accountLink, setAccountLink] = useState("home");
  const [showAccountLinks, setShowAccountLinks] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);

  const linkStyle = "transition-colors duration-300 ease-in-out hover:bg-gray-700 p-2 rounded-md";
  const linkActiveStyle = "bg-gray-800 text-white";
  const linkTextStyle = "flex items-center gap-2 text-lg";

  return (
    <div className="flex min-w-60 flex-col p-4 bg-gray-900 text-white h-100vh">
      <a href="/" className="flex items-center mb-6 text-white text-xl font-semibold">
        <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
        <span>Dashboard</span>
      </a>
      <hr className="mb-4 border-red-700" />
      <ul className="space-y-2">
        
        <li>
          <a
            href="#"
            className={`block ${linkStyle} ${studentLink === "dashboard" ? linkActiveStyle : ""} flex gap-2`}
            onClick={() => {
              setStudentLink("dashboard");
              setShowStudentLinks(!showStudentLinks);
            }}
          >
            <PiStudentFill className="text-2xl" />
            <span className={`linkTextStyle text-[15px]`}>Student Section</span>
          </a>
          {showStudentLinks && (
            <div className="pl-6 mt-2 space-y-1">
              <Link to="dashboard/AddStudent" className={`${linkStyle} flex items-center gap-2`}>
                <FaRegCircle />
                Add Student
              </Link>
              <Link to="dashboard/" className={`${linkStyle} flex items-center gap-2`}>
                <FaRegCircle />
                Manage Application
              </Link>
              <Link to="#" className={`${linkStyle} flex items-center gap-2`}>
                <FaRegCircle />
                See All Students
              </Link>
              <Link to="#" className={`${linkStyle} flex items-center gap-2`}>
                <FaRegCircle />
                Course Enquiry
              </Link>
            </div>
          )}
        </li>

        <li>
          <a
            href="#"
            className={`block ${linkStyle} ${courseLink === "dashboard" ? linkActiveStyle : ""} flex gap-2`}
            onClick={() => {
              setCourseLink("dashboard");
              setShowCourseLinks(!showCourseLinks);
            }}
          >
            <FaBuildingColumns className="text-2xl" />
            <span className={`linkTextStyle text-[15px]`}>Center Section</span>
          </a>
          {showCourseLinks && (
            <div className="pl-6 mt-2 space-y-1">
              <Link to="dashboard/CenterDocument" className={`${linkStyle} flex items-center gap-2`}>
                <FaRegCircle />
             center Document
              </Link>
              <Link to="dashboard/MarketingTools" className={`${linkStyle} flex items-center gap-2`}>
                <FaRegCircle />
                Marking Tools
              </Link>
              <Link to="dashboard/CenterMessage" className={`${linkStyle} flex items-center gap-2`}>
                <FaRegCircle />
                Center Message
              </Link>
              
            </div>
          )}
        </li>

        <li>
          <a
            href="#"
            className={`block ${linkStyle} ${certificateLink === "dashboard" ? linkActiveStyle : ""} flex gap-2`}
            onClick={() => {
              setCertificateLink("dashboard");
              setShowCertificateLinks(!showCertificateLinks);
            }}
          >
            <AiFillProduct className="text-2xl" />
            <span className={`linkTextStyle text-[15px]`}>Certificate Section</span>
          </a>
          {showCertificateLinks && (
            <div className="pl-6 mt-2 space-y-1">
              <Link to="dashboard/CertificationRequisition" className={`${linkStyle} flex items-center gap-2`}>
                <FaRegCircle />
                Certificate Requisition
              </Link>
              <Link to="dashboard/TrackCertificate" className={`${linkStyle} flex items-center gap-2`}>
                <FaRegCircle />
                Track Certificate
              </Link>
              <Link to="dashboard/ViewCertificate" className={`${linkStyle} flex items-center gap-2`}>
                <FaRegCircle />
              View Certificates
              </Link>
              
            </div>
          )}
        </li>

        <li>
          <a
            href="#"
            className={`block ${linkStyle} ${onlineLink === "dashboard" ? linkActiveStyle : ""} flex gap-2`}
            onClick={() => {
              setOnlineLink("dashboard");
              setShowOnlineLinks(!showOnlineLinks);
            }}
          >
            <PiStudentFill className="text-2xl" />
            <span className={`linkTextStyle text-[15px]`}>Online Examination</span>
          </a>
          {showOnlineLinks && (
            <div className="pl-6 mt-2 space-y-1">
              <Link to="dashboard/AddOnline" className={`${linkStyle} flex items-center gap-2`}>
                <FaRegCircle />
                Exam Link
              </Link>
              <Link to="dashboard/" className={`${linkStyle} flex items-center gap-2`}>
                <FaRegCircle />
                Appeared Students
              </Link>
              
            </div>
          )}
        </li>

        <li>
          <a
            href="#"
            className={`block ${linkStyle} ${offlineLink === "dashboard" ? linkActiveStyle : ""} flex gap-2`}
            onClick={() => {
              setOfflineLink("dashboard");
              setShowOfflineLinks(!showOfflineLinks);
            }}
          >
            <PiStudentFill className="text-2xl" />
            <span className={`linkTextStyle text-[15px]`}>Offline Examination</span>
          </a>
          {showOfflineLinks && (
            <div className="pl-6 mt-2 space-y-1">
              <Link to="dashboard/AddOffline" className={`${linkStyle} flex items-center gap-2`}>
                <FaRegCircle />
                Add Marks
              </Link>
              <Link to="dashboard/" className={`${linkStyle} flex items-center gap-2`}>
                <FaRegCircle />
               View Marks
              </Link>
             
            </div>
          )}
        </li>

        <li>
          <a
            href="#"
            className={`block ${linkStyle} ${accountLink === "dashboard" ? linkActiveStyle : ""} flex gap-2`}
            onClick={() => {
              setAccountLink("dashboard");
              setShowAccountLinks(!showAccountLinks);
            }}
          >
            <PiStudentFill className="text-2xl" />
            <span className={linkTextStyle}>Account Section</span>
          </a>
          {showAccountLinks && (
            <div className="pl-6 mt-2 space-y-1">
              <Link to="dashboard/AddAccount" className={`${linkStyle} flex items-center gap-2`}>
                <FaRegCircle />
                Add Fund
              </Link>
              <Link to="dashboard/" className={`${linkStyle} flex items-center gap-2`}>
                <FaRegCircle />
                Add Student Fee
              </Link>
              <Link to="#" className={`${linkStyle} flex items-center gap-2`}>
                <FaRegCircle />
                View Student Fee
              </Link>
              
            </div>
          )}
        </li>
        
      </ul>
      <hr className="my-4 border-gray-700" />
      <div className="flex items-center mt-auto space-x-2">
        <img
          src="https://github.com/mdo.png"
          alt=""
          width="32"
          height="32"
          className="rounded-full"
        />
        <div className="text-white">
          <strong>mdo</strong>
        </div>
        <div className="relative">
         
          <div
            className={`absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg ${showDropdown ? 'block' : 'hidden'}`}
          >
            <a href="#" className={`${linkStyle} block`}>New project...</a>
            <a href="#" className={`${linkStyle} block`}>Settings</a>
            <a href="#" className={`${linkStyle} block`}>Profile</a>
            <hr className="my-1 border-gray-700" />
            <a href="#" className={`${linkStyle} block`}>Sign out</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;





