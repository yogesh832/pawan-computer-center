import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTelegram, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import dummyimg from "../../assets/Images/dummy.jpg";
import logo from "../../assets/Images/logo.png"
export function Footer() {
    return (
        
            <footer className="text-white" style={{ backgroundColor: '#111D5E' }}>
                <div className="container">
                    <div className="row mt-5">
                        {/* Left Section */}
                        <div className="col-md-6">
                            <div>
                                <img src={logo} alt="logo" style={{ width: '100%', maxWidth: '120px', margin: '0 10px'}} className="mx-2 p-2" />
                            </div>
                            <h5 className="text-center">Recent Blogs</h5>
                            <div className="d-flex justify-content-center">
                                <a href="https://www.nicecomputerbageshwar.com/page.php" target="_blank" rel="noopener noreferrer">
                                <img src={dummyimg} alt="dummy" style={{ width: '100%', maxWidth: '120px', margin: '0 10px' }} />
                                </a>
                                
                                <a href="https://www.nicecomputerbageshwar.com/page.php" target="_blank" rel="noopener noreferrer">
                                <img src={dummyimg} alt="dummy" style={{ width: '100%', maxWidth: '120px', margin: '0 10px' }} />
                                </a>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="col-md-6">
                            <h5 className="text-center">Quick Links</h5>
                            <div className="d-flex flex-wrap justify-content-center">
                                {[
                                    "Home",
                                    "Downloads",
                                    "Payment Methods",
                                    "Disclaimer",
                                    "Our Affiliations",
                                    "Our Register Center's",
                                    "Term's & Conditions",
                                    "Privacy Policies",
                                    "Refund Policies",
                                    "Our Blogs",
                                    "Our Team",
                                    "Franchise Details"
                                ].map((link, index) => (
                                    <div className="col-md-4 mb-2" key={index}>
                                        <h6 className="font-weight-bold">
                                            <MdOutlineKeyboardArrowRight />
                                            <a href="#!" className="text-white ms-1 fs-6">{link}</a>
                                        </h6>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <hr className="my-5" />

                    <section className="text-center mb-5">
                        <a href="" className="text-white me-4"><FaFacebookF /></a>
                        <a href="" className="text-white me-4"><FaInstagram /></a>
                        <a href="" className="text-white me-4"><FaLinkedinIn /></a>
                        <a href="" className="text-white me-4"><FaTelegram /></a>
                        <a href="" className="text-white me-4"><FaTwitter /></a>
                        <a href="" className="text-white me-4"><IoLogoYoutube /></a>
                    </section>
                </div>

                <div className="text-center p-3" style={{ backgroundColor: 'rgba(220, 31, 22, 1)' }}>
                    © 2024 All Rights Reserved By
                </div>
            </footer>
       
    );
}








<a href="https://example.com/blog1" target="_blank" rel="noopener noreferrer">
                                    <img src={dummyimg} alt="Blog 1" style={{ width: '100%', maxWidth: '120px', margin: '0 10px' }} />
                                </a>

export default Footer;