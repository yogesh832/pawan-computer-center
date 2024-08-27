import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home/Home.jsx';
import Layout from '../Layout.jsx';
import DashboardLayout from '../DashboardLayout.jsx';
import { One } from './components/services/onemonth/One.jsx';
import Contact from './components/contact/Contact.jsx';
import Login from './components/account/Login.jsx';
import AboutUs from './components/navbar/About us/AboutUs.jsx';
import "../src/index.css";
import CenterMessage from './components/Dashboard/CenterMessage/CenterMessage.jsx';
import MarketingTools from './components/Dashboard/Marketing Tool/MarketingTool.jsx';
import Centerdocument from './components/Dashboard/centersection/Centerdocument.jsx';
import AddStudent from './components/Dashboard/Studentsection/AddStudent.jsx';
import CertificateRequisition from './components/Dashboard/CertificatesFile/CertificateRequisition.jsx';
import TrackCertificate from './components/Dashboard/CertificatesFile/TrackCertificate.jsx';
import ViewCertificate from './components/Dashboard/CertificatesFile/ViewCerticate.jsx';
import { Dashboard } from './components/Dashboard/Dashboard.jsx';
import SeeAllStudent from './components/Dashboard/Studentsection/SeeAllStudent.jsx';
import Student from './components/Dashboard/Student.jsx';
import EditStudent from './components/Dashboard/Studentsection/EditStudent.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'course', element: <One /> },
      { path: 'contact', element: <Contact /> },
      { path: 'login', element: <Login /> },
      { path: 'about', element: <AboutUs /> },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          { path: '', element: <Dashboard /> },
          { path: 'centermessage', element: <CenterMessage /> },
          { path: 'centerdocument', element: <Centerdocument /> },
          { path: 'marketingtools', element: <MarketingTools /> },
          { path: 'addstudent', element: <AddStudent /> },
          { path: 'certificationrequisition', element: <CertificateRequisition /> },
          { path: 'trackcertificate', element: <TrackCertificate /> },
          { path: 'viewcertificate', element: <ViewCertificate /> },
          { path: 'seeAllStudents', element: <SeeAllStudent /> },
          { path: 'AddStudent/:registrationNumber', element: <Student /> },
          { path: 'EditStudent/:registrationNumber', element: <EditStudent /> }
        ]
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals(console.log);
