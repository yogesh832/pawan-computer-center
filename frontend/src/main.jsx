import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/home/Home.jsx";
import Layout from "../Layout.jsx";
import DashboardLayout from "../DashboardLayout.jsx";
import Contact from "./components/contact/Contact.jsx";
import Login from "./components/account/Login.jsx";
import AboutUs from "./components/navbar/About us/AboutUs.jsx";
import "../src/index.css";
import CenterMessage from "./components/Dashboard/CenterMessage/CenterMessage.jsx";
import MarketingTools from "./components/Dashboard/Marketing Tool/MarketingTool.jsx";
import Centerdocument from "./components/Dashboard/centersection/Centerdocument.jsx";
import AddStudent from "./components/Dashboard/Studentsection/AddStudent.jsx";
import CertificateRequisition from "./components/Dashboard/CertificatesFile/CertificateRequisition.jsx";
import TrackCertificate from "./components/Dashboard/CertificatesFile/TrackCertificate.jsx";
import ViewCertificate from "./components/Dashboard/CertificatesFile/ViewCerticate.jsx";
import { Dashboard } from "./components/Dashboard/Dashboard.jsx";
import SeeAllStudent from "./components/Dashboard/Studentsection/SeeAllStudent.jsx";
import Student from "./components/Dashboard/Student.jsx";
import EditStudent from "./components/Dashboard/Studentsection/EditStudent.jsx";
import SignUp from "./components/account/SignUp.jsx";
import Courses from "./components/Dashboard/Courses.jsx";
import StudentDashboardUI from "./components/StudentDashboard/StudentDashboardUI.jsx";

// Import services
import One from "./components/services/onemonth/One.jsx";
import Three from "./components/services/threemonth/Three.jsx";
import Six from "./components/services/sixmonth/Six.jsx";
import Twelve from "./components/services/twelvemonth/Twelve.jsx";
import Eighteen from "./components/services/eighteenmonth/Eighteen.jsx";
import Twentyfour from "./components/services/twentyfourmonth/Twentyfour.jsx";
import Admin from "./components/account/Admin.jsx";
// import NewUser from "./components/NewUserWithoutSub/newUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> }, // Fixed typo here
      { path: "about", element: <AboutUs /> },
      { path: "course", element: <Courses /> },
      { path: "one", element: <One /> },
      { path: "three", element: <Three /> }, // Changed to lowercase for consistency
      { path: "six", element: <Six /> }, // Changed to lowercase for consistency
      { path: "twelve", element: <Twelve /> }, // Changed to lowercase for consistency
      { path: "eighteen", element: <Eighteen /> }, // Changed to lowercase for consistency
      { path: "twentyfour", element: <Twentyfour /> }, // Changed to lowercase for consistency
      // { path: "newuser", element: <NewUser /> },
      { path: "admin", element: <Admin /> },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          { path: "", element: <Dashboard /> },
          { path: "centermessage", element: <CenterMessage /> },
          { path: "centerdocument", element: <Centerdocument /> },
          { path: "marketingtools", element: <MarketingTools /> },
          { path: "addstudent", element: <AddStudent /> },
          {
            path: "certificationrequisition",
            element: <CertificateRequisition />,
          },
          { path: "trackcertificate", element: <TrackCertificate /> },
          { path: "viewcertificate", element: <ViewCertificate /> },
          { path: "seeAllStudents", element: <SeeAllStudent /> },
          { path: "addStudent/:registrationNumber", element: <Student /> },
          { path: "editStudent/:registrationNumber", element: <EditStudent /> },
          {
            path: "student/:registrationNumber",
            element: <StudentDashboardUI />,
          },
        ],
      },
      // Optional: Add a fallback route
      { path: "*", element: <NotFound /> }, // Ensure you create a NotFound component
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
