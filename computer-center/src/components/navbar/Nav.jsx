import { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
          <img className="w-[5vw]" src={logo} alt="Logo" />
        </div>
        
        {/* Centered Menu Links */}
        <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} flex-col lg:flex-row lg:items-center w-full justify-center lg:space-x-10`}>
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10">
            <li>
              <NavLink
                exact="true"
                to="/"
                className={({ isActive }) =>
                  `text-xl text-gray-700 hover:text-gray-900 ${isActive ? 'font-bold' : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-xl text-gray-700 hover:text-gray-900 ${isActive ? 'font-bold' : ''}`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/course"
                className={({ isActive }) =>
                  `text-xl text-gray-700 hover:text-gray-900 ${isActive ? 'font-bold' : ''}`
                }
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-xl text-gray-700 hover:text-gray-900 ${isActive ? 'font-bold' : ''}`
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `text-xl text-gray-700 hover:text-gray-900 ${isActive ? 'font-bold' : ''}`
                }
              >
                Gallery
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Aligned Register and Sign In */}
        <div className="hidden lg:flex space-x-4 items-center">
<<<<<<< HEAD
<<<<<<< HEAD
        <Link to="/singup" className="w-48 px-10 py-2 bg-black text-white rounded-3xl hover:bg-gray-700 text-lg text-center">Register Now</Link>
  
        <Link to="/login" className="w-48 px-10 py-2 bg-gray-100 text-gray-700 rounded-3xl hover:bg-gray-200 text-lg text-center">Sign In</Link>
=======
<<<<<<< HEAD
=======
>>>>>>> 47545c9f91c9f63a0876a79ba6c390eda5d3cdac
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `px-10 py-2 bg-black text-white rounded-lg hover:bg-gray-700 text-lg ${isActive ? 'font-bold' : ''}`
            }
          >
            Register Now
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `px-10 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-lg ${isActive ? 'font-bold' : ''}`
            }
          >
            Sign In
          </NavLink>
<<<<<<< HEAD
=======
        <Link to="/signup" className="w-48 px-10 py-2 bg-black text-white rounded-lg hover:bg-gray-700 text-lg text-center">Register Now</Link>
  
        <Link to="/login" className="w-48 px-10 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-lg text-center">Sign In</Link>
>>>>>>> d3d5146f3be8fb19c3da895a677a2a02c9356fc9
>>>>>>> 14ccb79ff4d2dea7a96779d669c22a19bc0eb185
=======
>>>>>>> 47545c9f91c9f63a0876a79ba6c390eda5d3cdac
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
