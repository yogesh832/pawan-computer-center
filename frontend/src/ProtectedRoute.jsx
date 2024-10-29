// ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Correct import

const isAuthenticated = () => {// added the following
  const token = localStorage.getItem("token"); // Get the token
  if (!token) return false; // No token means not authenticated

  try {
    const { exp } = jwtDecode(token); // Decode the token
    if (Date.now() >= exp * 1000) {
      // If token is expired
      localStorage.removeItem("token"); // Remove the expired token
      return false; // Not authenticated
    }
    return true; // Token is valid
  } catch (error) {
    console.error("Token decoding failed", error);
    return false; // If there's an error, return not authenticated
  }
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // If not authenticated, redirect to login
    return <Navigate to="/login" replace />;
  }

  return children; // Render the children if authenticated
};

export default ProtectedRoute;
