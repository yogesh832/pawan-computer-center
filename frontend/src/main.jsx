import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./NotFound.jsx";

// Importing Components
import Home from "./components/home/Home.jsx";
import Layout from "../Layout.jsx";
import DashboardLayout from "../DashboardLayout.jsx";
import Contact from "./components/contact/Contact.jsx";
import Login from "./components/account/Login.jsx";
import SignUp from "./components/account/SignUp.jsx";
import AboutUs from "./components/navbar/About us/AboutUs.jsx";
import Courses from "./components/Dashboard/Courses.jsx";
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
import StudentDashboardUI from "./components/StudentDashboard/StudentDashboardUI.jsx";
import Admin from "./components/account/Admin.jsx";
import NewUser from "./components/NewUserWithoutSub/NewUser.jsx";

// Importing Service Components
import One from "./components/services/onemonth/One.jsx";
import Three from "./components/services/threemonth/Three.jsx";
import Six from "./components/services/sixmonth/Six.jsx";
import Twelve from "./components/services/twelvemonth/Twelve.jsx";
import Eighteen from "./components/services/eighteenmonth/Eighteen.jsx";
import Twentyfour from "./components/services/twentyfourmonth/Twentyfour.jsx";

// Importing ProtectedRoute
// import ProtectedRoute from "./ProtectedRoute.jsx";

import "../src/index.css";
import AddMarks from "./components/Dashboard/OfflineExamination/AddMarks.jsx";
import ViewMarks from "./components/Dashboard/OfflineExamination/ViewMarks.jsx";
import AddStudentsMarks from "./components/Dashboard/OfflineExamination/AddStudentsMarks.jsx";
import UnderConstruction from "./UnderConstruction.jsx";
import StudentsResult from "./components/Dashboard/OfflineExamination/StudentsResult.jsx"
import CourseEnquiries from "./components/Dashboard/Studentsection/CourseEnquiries/CourseEnquiries.jsx";
// Browser Router Setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "about", element: <AboutUs /> },
      { path: "course", element: <Courses /> },
      { path: "one", element: <One /> },
      { path: "three", element: <Three /> },
      { path: "six", element: <Six /> },
      { path: "twelve", element: <Twelve /> },
      { path: "eighteen", element: <Eighteen /> },
      { path: "twentyfour", element: <Twentyfour /> },
      { path: "admin", element: <Admin /> },
      { path: "notfound", element: <NotFound /> },
      { path: "newuser", element: <NewUser /> },
      { path: "gallery", element: <UnderConstruction /> },
      {
        path: "dashboard",
        element: (
          // <ProtectedRoute>
          <DashboardLayout />
          //  </ProtectedRoute>
        ),
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
            path: "addMarks/:registrationNumber",
            element: <AddStudentsMarks />,
          },
        
          { path: "addMarks", element: <AddMarks /> },
          { path: "viewMarks", element: <ViewMarks /> },
          {
            path: "AddStudentsMarks/:registrationNumber",
            element: <AddStudentsMarks />,
          },
          {
            path: "studentsResult/:registrationNumber",
            element: <StudentsResult />,
          },

          // added some site that are under construction
          { path: "CourseEnquiry", element: <CourseEnquiries /> },
          { path: "AddAccount", element: <UnderConstruction /> },
          { path: "AddStudentFee", element: <UnderConstruction /> },
          { path: "ViewStudentFee", element: <UnderConstruction /> },

          // Updated with correct component name

          {
            path: "student/:registrationNumber",
            element: <StudentDashboardUI />,
          },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

// Root Element Rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);

// Display a toast on load within a component
toast.success("Toast is working!");
