import React from "react";
import LandingContact from "./src/components/LandingContact/LandingContact";  // Adjusted path
import Nav from "./src/components/navbar/Nav";  // Adjusted path
import Footer from "./src/components/footer/Footer";  // Adjusted path
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <LandingContact />
            <Nav />
            <Outlet />
            {/* <Footer /> */}
        </>
    );
};

export default Layout;
