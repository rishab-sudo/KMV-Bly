import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      {/* TOP HEADER */}
      <header className="navbar-header">
        <Container className="navbar-container">
          <div className="navbar-wrapper">

            {/* LEFT SIDE */}
            <div className="navbar-left">
              <img
                src={require("../assets/kmv-logo.png")}
                alt="College Logo"
                className="navbar-logo"
              />

              <div className="navbar-info">
                <h2 className="navbar-college-name">
                  KMV College
                </h2>

                <p className="navbar-tagline">
                  Excellence in Education
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="navbar-right">

              <div className="navbar-contact">
                <span className="navbar-label">
                  Email :
                </span>

                <span>info@kmvcollege.edu</span>
              </div>

              <div className="navbar-contact">
                <span className="navbar-label">
                  Phone :
                </span>

                <span>+91 9876543210</span>
              </div>

              {/* HAMBURGER */}
              <div
                className="navbar-hamburger"
                onClick={() =>
                  setSidebarOpen(true)
                }
              >
                <FaBars />
              </div>
            </div>

          </div>
        </Container>
      </header>

      {/* DESKTOP NAVBAR */}
      <div className="navbar-menu-wrapper">
        <Container>
          <ul className="navbar-menu">

            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/about">About</a>
            </li>

            {/* DROPDOWN */}
            <li
              className="navbar-dropdown"
              onMouseEnter={() =>
                setDropdownOpen(true)
              }
              onMouseLeave={() =>
                setDropdownOpen(false)
              }
            >
              <a href="/">
                Info <FaChevronDown />
              </a>

              {dropdownOpen && (
                <div className="navbar-dropdown-menu">
                  <a href="/admission">
                    Admission
                  </a>

                  <a href="/faculty">
                    Faculty
                  </a>

                  <a href="/events">
                    Events
                  </a>
                </div>
              )}
            </li>

            <li>
              <a href="/courses">Courses</a>
            </li>

            <li>
              <a href="/gallery">Gallery</a>
            </li>

            <li>
              <a href="/contact">Contact</a>
            </li>

          </ul>
        </Container>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className={`navbar-sidebar ${
          sidebarOpen ? "active" : ""
        }`}
      >

        <div className="navbar-sidebar-top">
          <FaTimes
            className="navbar-close"
            onClick={() =>
              setSidebarOpen(false)
            }
          />
        </div>

        <ul className="navbar-sidebar-links">

          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/about">About</a>
          </li>

          <li className="mobile-dropdown">
            <details>
              <summary>Info</summary>

              <div className="mobile-submenu">
                <a href="/admission">
                  Admission
                </a>

                <a href="/faculty">
                  Faculty
                </a>

                <a href="/events">
                  Events
                </a>
              </div>
            </details>
          </li>

          <li>
            <a href="/courses">Courses</a>
          </li>

          <li>
            <a href="/gallery">Gallery</a>
          </li>

          <li>
            <a href="/contact">Contact</a>
          </li>

        </ul>
      </div>

      {/* OVERLAY */}
      {sidebarOpen && (
        <div
          className="navbar-overlay"
          onClick={() =>
            setSidebarOpen(false)
          }
        ></div>
      )}
    </>
  );
};

export default Navbar;