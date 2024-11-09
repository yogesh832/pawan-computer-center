import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import logo from "../../assets/Images/logo.png"; // Update with your logo path

export function Footer() {
  return (
    <footer className="bg-[#111D5E] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        {/* Left Section - Logo */}
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-start">
          <img src={logo} alt="logo" className="w-12" />
          <span className="mt-2 md:mt-0 md:ml-2 text-xl font-semibold text-center md:text-left">
            Pawan Computer Center
          </span>
        </div>

        {/* Middle Section - Address */}
        <div className="text-center md:text-left">
          <p className="text-white text-sm md:text-lg">
            Address: 123 asdasaf 12344 India XYA
          </p>
        </div>

        {/* Right Section - Social Links */}
        <section className="flex justify-center md:justify-end space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaTelegram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FaTwitter />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <IoLogoYoutube />
          </a>
        </section>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-center py-3 mt-4 border-t border-gray-600">
        © Pawan Computer Center 2023, All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
