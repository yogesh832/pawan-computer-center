import React from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "./src/components/Dashboard/Sidebar";
import MarketingTool from "./src/components/Dashboard/Marketing Tool/MarketingTool";

const DashboardLayout = () => {
    return (
        <>
           <Sidebar/>
            <Outlet />
            <MarketingTool/>
        </>
    );
};

export default DashboardLayout;
