import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
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

  const renderNavLink = (to, label) => (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `text-xl text-gray-700 hover:text-gray-900 ${isActive ? 'font-bold' : ''}`
        }
      >
        {label}
      </NavLink>
    </li>
  );

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img className="w-[5vw]" src={logo} alt="Logo" />
        </div>
        
        {/* Centered Menu Links */}
        <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} flex-col lg:flex-row lg:items-center w-full justify-center lg:space-x-10`}>
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10">
            {navLinks.map(({ to, label }) => renderNavLink(to, label))}
          </ul>
        </div>

        {/* Right Aligned Register and Sign In */}
        <div className="hidden lg:flex space-x-4 items-center">
          <NavLink
            to="/singup"
            className={({ isActive }) =>
              `w-48 px-10 py-2 bg-black text-white rounded-3xl hover:bg-gray-700 text-lg`
            }
          >
            Register Now
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `w-48 px-10 py-2 bg-gray-100 text-gray-700 text-center rounded-3xl hover:bg-gray-200 text-lg`
            }
          >
            Sign In
          </NavLink>
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
