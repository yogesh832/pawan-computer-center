// import React from "react";
// import { Navigate } from "react-router-dom";

// // Example: use your actual auth check method (this is a placeholder)
// const isAuthenticated = () => {
//   // You can check the auth status from localStorage, context, or a global store
//   return localStorage.getItem("authToken"); // Assuming token is stored in localStorage
// };

// const ProtectedRoute = ({ children }) => {
//   if (!isAuthenticated()) {
//     // If not authenticated, redirect to login page
//     return <Navigate to="/login" replace />;
//   }

//   // If authenticated, render the children components
//   return children;
// };

// export default ProtectedRoute;
