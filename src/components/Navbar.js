import React, { useState } from "react";
import { Container } from "react-bootstrap";
<<<<<<< HEAD
import ApplyNowModal from "../components/ApplyNowModal";
=======
>>>>>>> f3c1bd648b704dcdcddead3150310aec0e1fd731
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
const [sidebarOpen, setSidebarOpen] = useState(false);

const [aboutDropdownOpen, setAboutDropdownOpen] =
  useState(false);

const [admissionDropdownOpen, setAdmissionDropdownOpen] =
  useState(false);

<<<<<<< HEAD
    const [isModalOpen, setIsModalOpen] = useState(false);
=======
>>>>>>> f3c1bd648b704dcdcddead3150310aec0e1fd731
  return (
    <>
      {/* =========================
          TOP HEADER
      ========================= */}

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
                  कन्या महाविद्यालय
                </h2>

                <p className="navbar-tagline">
                  ज्ञान • संस्कार • सफलता
                </p>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="navbar-right">

              {/* EMAIL */}
              <div className="navbar-contact-box">

                <div className="navbar-contact-icon">
                  <FaEnvelope />
                </div>

                <div className="navbar-contact-content">

                  <span className="navbar-contact-title">
                    Email Us
                  </span>

                  <span className="navbar-contact-text">
                   kmvbly@gmail.com
                  </span>

                </div>

              </div>

              {/* PHONE */}
              <div className="navbar-contact-box">

                <div className="navbar-contact-icon">
                  <FaPhoneAlt />
                </div>

                <div className="navbar-contact-content">

                  <span className="navbar-contact-title">
                    Call Us
                  </span>

                  <span className="navbar-contact-text">
                    +91 9760502221
                  </span>

                </div>

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

      {/* =========================
          DESKTOP NAVBAR
      ========================= */}

      <div className="navbar-menu-wrapper">

        <Container>

          <div className="navbar-menu-flex">

            <ul className="navbar-menu">

              <li>
                <a href="/">
                  Home
                </a>
              </li>
{/* ABOUT DROPDOWN */}
<li
  className="navbar-dropdown"
  onMouseEnter={() => setAboutDropdownOpen(true)}
  onMouseLeave={() => setAboutDropdownOpen(false)}
>
  <a href="/">
    About <FaChevronDown />
  </a>

  {aboutDropdownOpen && (
    <div className="navbar-dropdown-menu">
      <a href="/about">About Us</a>
      <a href="/facilities">Facilities</a>
        <a href="/certificate">
        Certificates
      </a>
    </div>
  )}
</li>

{/* ADMISSION DROPDOWN */}
<li
  className="navbar-dropdown"
  onMouseEnter={() =>
    setAdmissionDropdownOpen(true)
  }
  onMouseLeave={() =>
    setAdmissionDropdownOpen(false)
  }
>
  <a href="/">
    Admission <FaChevronDown />
  </a>

  {admissionDropdownOpen && (
    <div className="navbar-dropdown-menu">
      <a href="/admission">
        Admission Process
      </a>
    </div>
  )}
</li>

              <li>
                <a href="/courses">
                  Courses
                </a>
              </li>

 <li>
                <a href="/faculty">
                  Faculty
                </a>
              </li>

              <li>
                <a href="/gallery">
                  Gallery
                </a>
              </li>

              {/* <li>
                <a href="/campus">
                  Campus
                </a>
              </li> */}

              <li>
                <a href="/contact">
                  Contact
                </a>
              </li>

            </ul>

            {/* APPLY BUTTON */}
<<<<<<< HEAD
     {/* Your existing navbar JSX */}
      <div className="navbar-apply-btn-wrapper">
        <button
          className="navbar-apply-btn"
          onClick={() => setIsModalOpen(true)}
        >
          Apply Now
        </button>
      </div>

      {/* Modal — renders only when open */}
      <ApplyNowModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
=======
            <div className="navbar-apply-btn-wrapper">

              <a
                href="/apply-now"
                className="navbar-apply-btn"
              >
                Apply Now
              </a>

            </div>
>>>>>>> f3c1bd648b704dcdcddead3150310aec0e1fd731

          </div>

        </Container>

      </div>

      {/* =========================
          MOBILE SIDEBAR
      ========================= */}

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
            <a href="/">
              Home
            </a>
          </li>

       <li className="mobile-dropdown">

  <details>

    <summary>
      About
    </summary>

    <div className="mobile-submenu">

      <a href="/about">
        About Us
      </a>

      <a href="/facilities">
        Facilities
      </a>

       <a href="/certificate">
        Certificates
      </a>

    </div>

  </details>

</li>

          <li className="mobile-dropdown">

            <details>

              <summary>
                Admission
              </summary>

              <div className="mobile-submenu">

                <a href="/admission">
                Admission Process
                </a>

                </div>

            </details>

          </li>

          <li>
            <a href="/courses">
              Courses
            </a>
          </li>

<li>
            <a href="/faculty">
              Faculty
            </a>
          </li>

          <li>
            <a href="/gallery">
              Gallery
            </a>
          </li>

          {/* <li>
            <a href="/campus">
              Campus
            </a>
          </li> */}

          <li>
            <a href="/contact">
              Contact
            </a>
          </li>

          <li>
<<<<<<< HEAD
               <div className="navbar-apply-btn-wrapper">
        <button
          className="navbar-apply-btn"
          onClick={() => setIsModalOpen(true)}
        >
          Apply Now
        </button>
      </div>

      {/* Modal — renders only when open */}
      <ApplyNowModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

       
=======
            <a
              href="/apply-now"
              className="mobile-apply-btn"
            >
              Apply Now
            </a>
>>>>>>> f3c1bd648b704dcdcddead3150310aec0e1fd731
          </li>

        </ul>

      </div>

      {/* =========================
          OVERLAY
      ========================= */}

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