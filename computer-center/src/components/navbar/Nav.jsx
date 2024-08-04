import { useState } from 'react';
import style from './Nav.module.css';
import logo from '../../assets/Images/logo.png';


const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`${style.navigation} navbar navbar-expand-lg bg-body-tertiary`}>
        <div className={`${style.mainContainer} container-fluid`}>
          <img className={style.logo} src={logo} alt="Logo" />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav active">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <span className={style.icon}></span>Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className={`nav-link dropdown-toggle ${style.about}`} href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About Us
                </a>
                <ul className={`dropdown-menu ${style.aboutDrop}`}aria-labelledby="aboutDropdown">
                  <li><a className="dropdown-item" href="#">Our Story</a></li>
                  <li><a className="dropdown-item" href="#">Mission & Vision</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="coursesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </a>
                <ul className="dropdown-menu" aria-labelledby="coursesDropdown">
                  <li><a className="dropdown-item" href="#">1 Month</a></li>
                  <li><a className="dropdown-item" href="#">2 Month</a></li>
                  <li><a className="dropdown-item" href="#">6 Month</a></li>
                  <li><a className="dropdown-item" href="#">12 Month</a></li>
                  <li><a className="dropdown-item" href="#">18 Month</a></li>
                  <li><a className="dropdown-item" href="#">24 Month</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Our Service
                </a>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li><a className="dropdown-item" href="#">Service 1</a></li>
                  <li><a className="dropdown-item" href="#">Service 2</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="certificationDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Certification
                </a>
                <ul className="dropdown-menu" aria-labelledby="certificationDropdown">
                  <li><a className="dropdown-item" href="#">Certification 1</a></li>
                  <li><a className="dropdown-item" href="#">Certification 2</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="contactDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Contact Us
                </a>
                <ul className="dropdown-menu" aria-labelledby="contactDropdown">
                  <li><a className="dropdown-item" href="#">Email</a></li>
                  <li><a className="dropdown-item" href="#">Phone</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="coursesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Gallery
                </a>
                <ul className="dropdown-menu" aria-labelledby="coursesDropdown">
                  <li><a className="dropdown-item" href="#">Photos</a></li>
                  <li><a className="dropdown-item" href="#">Videos</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.buttons}>
          <button type="button" className={`${style.button1}`}>
            Register Now
          </button>
          <button type="button" className={`${style.button2}`}>
            Student SignUp
          </button>
        </div>
        <div className={style.resButtons}>
          <button type="button" className={`${style.resButton1}`}>
            SignIn
          </button>
          <button type="button" className={`${style.resButton2}`}>
            SignUp
          </button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
 <ul className="navbar-nav active">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <span className={style.icon}></span>Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className={`nav-link dropdown-toggle ${style.about}`} href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  About Us
                </a>
                <ul className={`dropdown-menu ${style.aboutDrop}`}aria-labelledby="aboutDropdown">
                  <li><a className="dropdown-item" href="#">Our Story</a></li>
                  <li><a className="dropdown-item" href="#">Mission & Vision</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="coursesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </a>
                <ul className="dropdown-menu" aria-labelledby="coursesDropdown">
                  <li><a className="dropdown-item" href="#">1 Month</a></li>
                  <li><a className="dropdown-item" href="#">2 Month</a></li>
                  <li><a className="dropdown-item" href="#">6 Month</a></li>
                  <li><a className="dropdown-item" href="#">12 Month</a></li>
                  <li><a className="dropdown-item" href="#">18 Month</a></li>
                  <li><a className="dropdown-item" href="#">24 Month</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Our Service
                </a>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li><a className="dropdown-item" href="#">Service 1</a></li>
                  <li><a className="dropdown-item" href="#">Service 2</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="certificationDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Certification
                </a>
                <ul className="dropdown-menu" aria-labelledby="certificationDropdown">
                  <li><a className="dropdown-item" href="#">Certification 1</a></li>
                  <li><a className="dropdown-item" href="#">Certification 2</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="contactDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Contact Us
                </a>
                <ul className="dropdown-menu" aria-labelledby="contactDropdown">
                  <li><a className="dropdown-item" href="#">Email</a></li>
                  <li><a className="dropdown-item" href="#">Phone</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="coursesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Gallery
                </a>
                <ul className="dropdown-menu" aria-labelledby="coursesDropdown">
                  <li><a className="dropdown-item" href="#">Photos</a></li>
                  <li><a className="dropdown-item" href="#">Videos</a></li>
                </ul>
              </li>
            </ul>