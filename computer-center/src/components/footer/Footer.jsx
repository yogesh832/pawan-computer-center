import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegram, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import logo from "../../assets/Images/logo.png";

export function Footer() {
    return (
        <footer className="text-white bg-[#111D5E]">
            <div className="container mx-auto py-8">
                <div className="flex justify-between items-center">
                    {/* Left Section - Logo */}
                    <div className="flex items-center">
                        <img src={logo} alt="logo" className="w-20 max-w-[120px] mx-2 p-2" />
                    </div>

                    {/* Middle Section - Address */}
                    <div className="text-center">
                        <p className="text-sm text-white">
                            123 Street Name, <br />
                            City, State, 12345 <br />
                            Email: contact@yourdomain.com <br />
                            Phone: +1 234 567 890
                        </p>
                    </div>

                    {/* Right Section - Social Links */}
                    <section className="flex justify-end">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2 text-xl hover:text-gray-400">
                            <FaFacebookF />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2 text-xl hover:text-gray-400">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2 text-xl hover:text-gray-400">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-white mx-2 text-xl hover:text-gray-400">
                            <FaTelegram />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2 text-xl hover:text-gray-400">
                            <FaTwitter />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2 text-xl hover:text-gray-400">
                            <IoLogoYoutube />
                        </a>
                    </section>
                </div>
            </div>

            <div className="text-center py-3 bg-[#DC1F16]">
                © 2024 All Rights Reserved By
            </div>
        </footer>
    );
}

export default Footer;
