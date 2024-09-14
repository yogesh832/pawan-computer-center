import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/Images/logo.png';
import style from './Nav.module.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={style.navigation}>
      <div className={style.mainContainer}>
        <img className={style.logo} src={logo} alt="Logo" />
        <button
          className={style.menuToggle}
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <FaBars className={style.menuIcon} />
        </button>
        <div className={`${style.navbarNav} ${isMenuOpen ? style.showMenu : ''}`} id="navbarNav">
          <ul className={style.navList}>
            <li className={style.navItem}>
              <Link className={style.navLink} to="/">
                <span className={style.icon}></span>Home
              </Link>
            </li>
            <li className={style.navItem}>
              <Link className={`${style.navLink} ${style.dropdownToggle}`} to="/about" role="button">
                About Us
              </Link>
              <div className={style.dropdownMenu}>
                <Link className={style.dropdownItem} to="/about">Our Story</Link>
                <Link className={style.dropdownItem} to="/about">Mission & Vision</Link>
              </div>
            </li>
            <li className={style.navItem}>
              <Link className={`${style.navLink} ${style.dropdownToggle}`} to="/course" role="button">
                Courses
              </Link>
              <div className={style.dropdownMenu}>
                <Link className={style.dropdownItem} to="/course">1 Month</Link>
                <Link className={style.dropdownItem} to="/course">2 Month</Link>
                <Link className={style.dropdownItem} to="/course">6 Month</Link>
                <Link className={style.dropdownItem} to="/course">12 Month</Link>
                <Link className={style.dropdownItem} to="/course">18 Month</Link>
                <Link className={style.dropdownItem} to="/course">24 Month</Link>
              </div>
            </li>
            <li className={style.navItem}>
              <Link className={`${style.navLink} ${style.dropdownToggle}`} to="/" role="button">
                Our Service
              </Link>
              <div className={style.dropdownMenu}>
                <Link className={style.dropdownItem} to="/">Service 1</Link>
                <Link className={style.dropdownItem} to="/">Service 2</Link>
              </div>
            </li>
            <li className={style.navItem}>
              <Link className={`${style.navLink} ${style.dropdownToggle}`} to="/" role="button">
                Certification
              </Link>
              <div className={style.dropdownMenu}>
                <Link className={style.dropdownItem} to="/">Certification 1</Link>
                <Link className={style.dropdownItem} to="/">Certification 2</Link>
              </div>
            </li>
            <li className={style.navItem}>
              <Link className={`${style.navLink} ${style.dropdownToggle}`} to="/contact" role="button">
                Contact Us
              </Link>
              <div className={style.dropdownMenu}>
                <Link className={style.dropdownItem} to="/contact">Email</Link>
                <Link className={style.dropdownItem} to="/contact">Phone</Link>
              </div>
            </li>
            <li className={style.navItem}>
              <Link className={`${style.navLink} ${style.dropdownToggle}`} to="/" role="button">
                Gallery
              </Link>
              <div className={style.dropdownMenu}>
                <Link className={style.dropdownItem} to="/">Photos</Link>
                <Link className={style.dropdownItem} to="/">Videos</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.buttons}>
        <Link to="/singup" className={style.button1}>
          Register Now
        </Link>
        <Link to="/login" className={style.button2}>
          Sign Up
        </Link>
      </div>
      <div className={style.resButtons}>
        <Link to="/login" className={style.resButton1}>
          SignIn
        </Link>
        <Link to="/login" className={style.resButton2}>
          SignUp
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
