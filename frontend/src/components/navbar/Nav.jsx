import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";
import logo from '../../assets/Images/logo.png';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/course", label: "Courses" },
    { to: "/contact", label: "Contact Us" },
    { to: "/gallery", label: "Gallery" },
  ];

  const handleNavLinkClick = () => {
    // Close the menu after clicking a link
    setIsMenuOpen(false);
  };

  const renderNavLink = (to, label) => (
    <li key={to} onClick={handleNavLinkClick}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `text-sm text-gray-700 hover:text-gray-900 transition-colors duration-300 ${isActive ? 'font-bold' : ''}`
        }
      >
        {label}
      </NavLink>
    </li>
  );

  const handleButtonClick = () => {
    // Close the menu after clicking Register or Sign In button
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          {/* Wrap logo in NavLink to make it clickable and navigate to home */}
          <NavLink to="/">
            <img className="w-[10vw] sm:w-[8vw] lg:w-[5vw]" src={logo} alt="Logo" />
          </NavLink>
        </div>

        {/* Mobile Menu Button - Only visible on smaller screens */}
        <button
          className="text-gray-500 focus:outline-none lg:hidden ml-auto"
          type="button"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <RxCross2 className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navbar - Hidden on smaller screens */}
        <div className="hidden lg:flex lg:items-center lg:space-x-10">
          <ul className="flex space-x-10">
            {navLinks.map(({ to, label }) => renderNavLink(to, label))}
          </ul>

          {/* Register and Sign In Buttons */}
          <div className="space-x-4 items-center">
            <NavLink
              to="/signup"
              className="w-32 px-4 py-2 bg-gray-100 text-center rounded-3xl hover:bg-gray-200 text-sm"
              onClick={handleButtonClick}
            >
              Register Now
            </NavLink>
            <NavLink
              to="/login"
              className="w-32 px-4 py-2 bg-gray-100 text-gray-700 text-center rounded-3xl hover:bg-gray-200 text-sm"
              onClick={handleButtonClick}
            >
              Sign In
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Navbar - Only visible when menu is open */}
      <div
        className={`lg:hidden px-4 pb-1 transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}
      >
        <ul className="space-y-4">
          {navLinks.map(({ to, label }) => renderNavLink(to, label))}
        </ul>

        <div className="mt-4 flex space-x-4">
          <NavLink
            to="/signup"
            className="w-full px-4 py-2 bg-gray-100 text-center rounded-3xl hover:bg-gray-200 text-sm"
            onClick={handleButtonClick}
          >
            Register Now
          </NavLink>
          <NavLink
            to="/login"
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 text-center rounded-3xl hover:bg-gray-200 text-sm"
            onClick={handleButtonClick}
          >
            Sign In
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
