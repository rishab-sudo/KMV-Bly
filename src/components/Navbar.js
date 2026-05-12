import React from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-section">
      <div className="container">
        <div className="navbar-wrapper">

          <ul className="navbar-links">

            {/* HOME */}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>

            {/* ABOUT DROPDOWN */}
            <li className="dropdown">

              <div className="dropdown-title nav-link">
                About <FaChevronDown className="dropdown-icon" />
              </div>

              <ul className="dropdown-menu">

                <li>
                  <NavLink to="/about" className="dropdown-link">
                    About College
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/principal-message"
                    className="dropdown-link"
                  >
                    Principal Message
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/management"
                    className="dropdown-link"
                  >
                    Management
                  </NavLink>
                </li>

              </ul>

            </li>

            {/* COURSES */}
            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Courses
              </NavLink>
            </li>

            {/* INFO DROPDOWN */}
            <li className="dropdown">

              <div className="dropdown-title nav-link">
                Info <FaChevronDown className="dropdown-icon" />
              </div>

              <ul className="dropdown-menu">

                <li>
                  <NavLink
                    to="/admission"
                    className="dropdown-link"
                  >
                    Admission
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/fees"
                    className="dropdown-link"
                  >
                    Fees Structure
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/rules"
                    className="dropdown-link"
                  >
                    Rules & Regulations
                  </NavLink>
                </li>

              </ul>

            </li>

            {/* GALLERY */}
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Gallery
              </NavLink>
            </li>

            {/* CONTACT */}
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;