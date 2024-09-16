
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './src/components/Dashboard/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <main className="flex-1 p-4">
        <Outlet /> {/* Render nested dashboard routes */}
      </main>
    </div>
  );
};

export default DashboardLayout;
