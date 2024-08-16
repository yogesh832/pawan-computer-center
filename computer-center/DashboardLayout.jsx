// // DashboardLayout.jsx
// import React from 'react';
// import Sidebar from './src/components/Dashboard/Sidebar';
// import { Outlet } from "react-router-dom";

// const DashboardLayout = ({ children }) => {
//   return (
//     <div className="flex">
//       <Sidebar />
//       <Outlet />
//       {/* <main>{children}</main> */}
//     </div>
//   );
// };

// export default DashboardLayout;


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
