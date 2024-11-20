import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./src/components/Dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex flex-row ">
      <Sidebar />
      <main className="w-full ">
        <Outlet /> {/* Render nested dashboard routes */}
      </main>
    </div>
  );
};

export default DashboardLayout;
