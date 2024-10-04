import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegram, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import logo from "../../assets/Images/logo.png"; // Update with your logo path

export function Footer() {
    return (
        <footer className="bg-[#111D5E] text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Section - Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="logo"  className="w-12" /> {/* Adjust height as needed */}
                    <span className="ml-2 text-xl font-semibold">Pawan Computer Center</span>
                </div>

                {/* Middle Section - Navigation Links */}
                <div>
                    <p className="text-white text-lg">Address : 123 asdasaf 12344 India XYA</p>
                </div>

                {/* Right Section - Social Links */}
                <section className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                        <FaFacebookF />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                        <FaInstagram />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                        <FaTelegram />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                        <FaTwitter />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                        <IoLogoYoutube />
                    </a>
                </section>
            </div>

            <div className="text-center py-3">
                © pagedone 2023, All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
