import { useState } from 'react';
import style from './Nav.module.css';
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/Images/logo.png';

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
              <a className={style.navLink} href="#">
                <span className={style.icon}></span>Home
              </a>
            </li>
            <li className={style.navItem}>
              <a className={`${style.navLink} ${style.dropdownToggle}`} href="#" role="button">
                About Us
              </a>
              <div className={style.dropdownMenu}>
                <a className={style.dropdownItem} href="#">Our Story</a>
                <a className={style.dropdownItem} href="#">Mission & Vision</a>
              </div>
            </li>
            <li className={style.navItem}>
              <a className={`${style.navLink} ${style.dropdownToggle}`} href="#" role="button">
                Courses
              </a>
              <div className={style.dropdownMenu}>
                <a className={style.dropdownItem} href="#">1 Month</a>
                <a className={style.dropdownItem} href="#">2 Month</a>
                <a className={style.dropdownItem} href="#">6 Month</a>
                <a className={style.dropdownItem} href="#">12 Month</a>
                <a className={style.dropdownItem} href="#">18 Month</a>
                <a className={style.dropdownItem} href="#">24 Month</a>
              </div>
            </li>
            <li className={style.navItem}>
              <a className={`${style.navLink} ${style.dropdownToggle}`} href="#" role="button">
                Our Service
              </a>
              <div className={style.dropdownMenu}>
                <a className={style.dropdownItem} href="#">Service 1</a>
                <a className={style.dropdownItem} href="#">Service 2</a>
              </div>
            </li>
            <li className={style.navItem}>
              <a className={`${style.navLink} ${style.dropdownToggle}`} href="#" role="button">
                Certification
              </a>
              <div className={style.dropdownMenu}>
                <a className={style.dropdownItem} href="#">Certification 1</a>
                <a className={style.dropdownItem} href="#">Certification 2</a>
              </div>
            </li>
            <li className={style.navItem}>
              <a className={`${style.navLink} ${style.dropdownToggle}`} href="#" role="button">
                Contact Us
              </a>
              <div className={style.dropdownMenu}>
                <a className={style.dropdownItem} href="#">Email</a>
                <a className={style.dropdownItem} href="#">Phone</a>
              </div>
            </li>
            <li className={style.navItem}>
              <a className={`${style.navLink} ${style.dropdownToggle}`} href="#" role="button">
                Gallery
              </a>
              <div className={style.dropdownMenu}>
                <a className={style.dropdownItem} href="#">Photos</a>
                <a className={style.dropdownItem} href="#">Videos</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.buttons}>
        <button type="button" className={style.button1}>
          Register Now
        </button>
        <button type="button" className={style.button2}>
           Sign Up
        </button>
      </div>
      <div className={style.resButtons}>
        <button type="button" className={style.resButton1}>
          SignIn
        </button>
        <button type="button" className={style.resButton2}>
          SignUp
        </button>
      </div>
    </nav>
  );
};

export default Nav;
