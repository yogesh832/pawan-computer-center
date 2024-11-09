import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const LandingContact = () => {
  return (
    <div className="z-9 relative flex justify-center items-center w-full bg-[#111D5E] py-4 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full px-4 md:px-12">
        {/* Welcome Message */}
        <p className="text-center text-sm md:text-lg font-bold text-[#f5dbdb]">
          Welcome To Pawan Computer Center 🖥️
        </p>

        {/* Email and Contact Info - Visible only on medium screens and up */}
        <div className="hidden md:flex gap-12">
          <div className="flex items-center gap-2">
            <MdOutlineEmail className="text-xl text-[#ebd1d1]" />
            <p className="text-xs font-semibold text-[#e6c5c5]">
              lskdfjlsdkj@gmail.com
            </p>
          </div>

          <div className="flex items-center gap-2">
            <IoCallOutline className="text-xl text-[#ebd1d1]" />
            <p className="text-xs font-semibold text-[#e6c5c5]">+91 99999999</p>
          </div>
        </div>

        {/* Social Media Icons - Visible only on large screens */}
        <div className="hidden lg:flex gap-4">
          <a href="#" className="text-white text-xl hover:text-blue-500">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white text-xl hover:text-blue-500">
            <FaInstagram />
          </a>
          <a href="#" className="text-white text-xl hover:text-blue-500">
            <FaLinkedinIn />
          </a>
          <a href="#" className="text-white text-xl hover:text-blue-500">
            <FaTelegram />
          </a>
          <a href="#" className="text-white text-xl hover:text-blue-500">
            <FaTwitter />
          </a>
          <a href="#" className="text-white text-xl hover:text-blue-500">
            <IoLogoYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingContact;
