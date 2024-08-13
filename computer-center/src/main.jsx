import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Ensure this path is correct
import reportWebVitals from './reportWebVitals'; // Ensure this path is correct
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home/Home.jsx'; // Ensure this path is correct
import Layout from '../Layout.jsx'; // Ensure this path is correct
import { One } from './components/services/onemonth/One.jsx'; // Ensure this path is correct
import Contact from './components/contact/Contact.jsx';
import Login from './components/account/Login.jsx';
import AboutUs from './components/navbar/About us/AboutUs.jsx';
import "../src/index.css"
import { Dashboard } from './components/Dashboard/Dashboard.jsx';
import CenterMessage from './components/Dashboard/CenterMessage/CenterMessage.jsx';
import MarketingTools from './components/Dashboard/Marketing Tool/MarketingTool.jsx';
import Centerdocument from './components/Dashboard/centersection/Centerdocument.jsx';
import AddStudent from './components/Dashboard/Student section/AddSrudent.jsx';
import CertificateRequisition from './components/Dashboard/CertificatesFile/CertificateRequisition.jsx';
import TrackCertificate from './components/Dashboard/CertificatesFile/TrackCertificate.jsx';
import ViewCertificate from './components/Dashboard/CertificatesFile/ViewCerticate.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "course",
        element: <One />
      },
      {
       path: "contact",
       element: <Contact/> 
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "about",
        element: <AboutUs />
      },
      {
        path: "dashboard/centermessage",
        element: <CenterMessage />
      },
      {
        path: "dashboard/centerdocument",
        element: <Centerdocument />
      }
      ,
      {
        path: "dashboard/marketingtool",
        element: <MarketingTools />
      },
      {
        path: "dashboard/addStudent",
        element: <AddStudent />
      },
      {
        path: "dashboard/MarketingTools",
        element: <MarketingTools />
      },
      {
        path: "dashboard/CenterMessage",
        element: <CenterMessage />
      },
      {
        path: "dashboard/CertificationRequisition",
        element: <CertificateRequisition />
      },
      {
        path: "dashboard/MarketingTools",
        element: <MarketingTools />
      },
      {
        path: "dashboard/TrackCertificate",
        element: <TrackCertificate />
      },
      {
        path: "dashboard/ViewCertificate",
        element: <ViewCertificate />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Correctly handle web vitals by passing a function
reportWebVitals(console.log); // Log metrics to console
