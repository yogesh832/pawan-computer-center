import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./src/components/Dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div >
      {/* <Sidebar /> */}
    
        <Outlet /> {/* Render nested dashboard routes */}
      
    </div>
  );
};

export default DashboardLayout;
