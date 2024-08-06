import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegCircle, FaShoppingCart, FaVideo } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { PiStudentFill } from "react-icons/pi";
import { AiFillProduct } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";



const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [showStudentLinks, setShowStudentLinks] = useState(false);

  const linkStyle = {
    transition: "background-color 0.3s ease",
  };

  const linkHoverStyle = {
    backgroundColor: "#343a40",
  };

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white" style={{ width: '280px' }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
        <span className="fs-4">Dashboard</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a
            href="#"
            className={`nav-link text-white ${activeLink === "home" ? "active" : ""}`}
            aria-current="page"
            style={linkStyle}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = ""}
            onClick={() => setActiveLink("home")}
          >
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
            <IoMdHome />
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link text-white ${activeLink === "dashboard" ? "active" : ""}`}
            style={linkStyle}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = ""}
            onClick={() => {
              setActiveLink("dashboard");
              setShowStudentLinks(!showStudentLinks);
            }}
          >
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
            <PiStudentFill />
            Student
          </a>
          {showStudentLinks && (
            <div style={{ paddingLeft: '20px', marginTop: '10px' }}>
              <a href="#" className="nav-link text-white" style={linkStyle} onMouseEnter={e => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor} onMouseLeave={e => e.currentTarget.style.backgroundColor = ""}>
              <FaRegCircle />
              Add Student
                </a>
              <a href="#" className="nav-link text-white" style={linkStyle} onMouseEnter={e => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor} onMouseLeave={e => e.currentTarget.style.backgroundColor = ""}>
              <FaRegCircle />
              Manage Application
                </a>
                <a href="#" className="nav-link text-white" style={linkStyle} onMouseEnter={e => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor} onMouseLeave={e => e.currentTarget.style.backgroundColor = ""}>
              <FaRegCircle />
              See All student
                </a>
                <a href="#" className="nav-link text-white" style={linkStyle} onMouseEnter={e => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor} onMouseLeave={e => e.currentTarget.style.backgroundColor = ""}>
              <FaRegCircle />
              Course Enquiry
                </a>
            </div>
          )}
        </li>
        <li>
          <a
            href="#"
            className={`nav-link text-white ${activeLink === "orders" ? "active" : ""}`}
            style={linkStyle}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = ""}
            onClick={() => setActiveLink("orders")}
          >
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
            <FaShoppingCart />
            Orders
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link text-white ${activeLink === "products" ? "active" : ""}`}
            style={linkStyle}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = ""}
            onClick={() => setActiveLink("products")}
          >
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
            <AiFillProduct />
            Products
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`nav-link text-white ${activeLink === "customers" ? "active" : ""}`}
            style={linkStyle}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = ""}
            onClick={() => setActiveLink("customers")}
          >
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg>
            <FaVideo />
           Lectures
          </a>
        </li>
      </ul>
      <hr />
      <Dropdown>
        <Dropdown.Toggle className="d-flex align-items-center text-white text-decoration-none">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
          <strong>mdo</strong>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-dark text-small shadow">
          <Dropdown.Item href="#">New project...</Dropdown.Item>
          <Dropdown.Item href="#">Settings</Dropdown.Item>
          <Dropdown.Item href="#">Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Sign out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Sidebar;