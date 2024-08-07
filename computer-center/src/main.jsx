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

// Correctly handle web vitals by passing a function
reportWebVitals(console.log); // Log metrics to console
