import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/Images/logo.png';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img className="w-[5vw] w-auto" src={logo} alt="Logo" />
        </div>
        
        {/* Centered Menu Links */}
        <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} flex-col lg:flex-row lg:items-center w-full justify-center lg:space-x-10`}>
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10">
            <li>
              <Link to="/" className="text-xl text-gray-700  hover:text-gray-900 hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-xl text-gray-700 hover:text-gray-900 hover:underline">About Us</Link>
            </li>
            <li>
              <Link to="/course" className="text-xl text-gray-700 hover:text-gray-900 hover:underline">Courses</Link>
            </li>
            <li>
              <Link to="/contact" className="text-xl text-gray-700 hover:text-gray-900 hover:underline">Contact Us</Link>
            </li>
            <li>
              <Link to="/gallery" className="text-xl text-gray-700 hover:text-gray-900 hover:underline">Gallery</Link>
            </li>
          </ul>
        </div>

        {/* Right Aligned Register and Sign In */}
        <div className="hidden lg:flex space-x-4 items-center">
          <Link to="/singup" className="px-10 py-2 bg-black text-white rounded-lg hover:bg-gray-700 text-lg">Register Now</Link>
          <Link to="/login" className="px-10 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-lg">Sign In</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="text-gray-500 focus:outline-none lg:hidden"
          type="button"
          onClick={toggleMenu}
        >
          <FaBars className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
