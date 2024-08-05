// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import reportWebVitals from './reportWebVitals';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from "./components/home/Home.jsx"
// import Layout from '../Layout.jsx';
// import { One } from './components/services/onemonth/One.jsx';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "course",
//         element: <One/>
//       }
//     ]
//   }
// ])

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router= {router} />
//   </React.StrictMode>
// );

// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Ensure this path is correct
import reportWebVitals from './reportWebVitals'; // Ensure this path is correct
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home/Home.jsx'; // Ensure this path is correct
import Layout from '../Layout.jsx'; // Ensure this path is correct
import { One } from './components/services/onemonth/One.jsx'; // Ensure this path is correct

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
