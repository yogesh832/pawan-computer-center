// DashboardLayout.jsx
import React from 'react';
import Sidebar from './src/components/Dashboard/Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
