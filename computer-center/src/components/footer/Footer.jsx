import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegram, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import dummyimg from "../../assets/Images/dummy.jpg";
import logo from "../../assets/Images/logo.png";

export function Footer() {
    return (
        <footer className="text-white bg-[#111D5E]">
            <div className="container mx-auto py-8">
                <div className="flex flex-wrap mt-5">
                    {/* Left Section */}
                    <div className="w-full md:w-1/2 flex flex-col items-center mb-8 md:mb-0">
                        <img src={logo} alt="logo" className="w-full max-w-[120px] mx-2 p-2" />
                        <h5 className="text-center mt-4">Recent Blogs</h5>
                        <div className="flex justify-center mt-4">
                            <a href="https://example.com/blog1" target="_blank" rel="noopener noreferrer" className="mx-2">
                                <img src={dummyimg} alt="Blog 1" className="w-full max-w-[120px] rounded" />
                            </a>
                            <a href="https://example.com/blog2" target="_blank" rel="noopener noreferrer" className="mx-2">
                                <img src={dummyimg} alt="Blog 2" className="w-full max-w-[120px] rounded" />
                            </a>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-1/2 flex flex-col items-center">
                        <h5 className="text-center mt-4 md:mt-0">Quick Links</h5>
                        <div className="flex flex-wrap justify-center mt-4">
                            {[
                                "Home",
                                "Downloads",
                                "Payment Methods",
                                "Disclaimer",
                                "Our Affiliations",
                                "Our Register Center's",
                                "Terms & Conditions",
                                "Privacy Policies",
                                "Refund Policies",
                                "Our Blogs",
                                "Our Team",
                                "Franchise Details"
                            ].map((link, index) => (
                                <div className="w-full sm:w-1/2 md:w-1/3 mb-2" key={index}>
                                    <h6 className="font-bold flex items-center">
                                        <MdOutlineKeyboardArrowRight />
                                        <a href="#!" className="text-white ml-1 text-sm">{link}</a>
                                    </h6>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <hr className="my-5 border-gray-500" />

                <section className="text-center mb-5">
                    <a href="" className="text-white mx-2 text-xl"><FaFacebookF /></a>
                    <a href="" className="text-white mx-2 text-xl"><FaInstagram /></a>
                    <a href="" className="text-white mx-2 text-xl"><FaLinkedinIn /></a>
                    <a href="" className="text-white mx-2 text-xl"><FaTelegram /></a>
                    <a href="" className="text-white mx-2 text-xl"><FaTwitter /></a>
                    <a href="" className="text-white mx-2 text-xl"><IoLogoYoutube /></a>
                </section>
            </div>

            <div className="text-center py-3 bg-[#DC1F16]">
                © 2024 All Rights Reserved By
            </div>
        </footer>
    );
}

export default Footer;
