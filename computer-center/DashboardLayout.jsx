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
import Sidebar from './src/components/Dashboard/Sidebar'; // Adjust path if needed
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main>
        <Outlet /> {/* Render nested dashboard routes */}
      </main>
    </div>
  );
};

export default DashboardLayout;
