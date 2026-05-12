import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

import "./Footer.css";

// import footerlogo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-wrapper">

          {/* COLUMN 1 */}
          <div className="footer-col">

            <img
              src={""}
              alt="logo"
              className="footer-logo"
            />

            <p className="footer-description">
              KMV College is dedicated to providing quality education,
              innovation, leadership, and holistic development for
              students to build a successful future.
            </p>

          </div>

          {/* COLUMN 2 */}
          <div className="footer-col">

            <h3 className="footer-heading">
              Quick Links
            </h3>

            <ul className="footer-links">

              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/about">About</a>
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

          {/* COLUMN 3 */}
          <div className="footer-col">

            <h3 className="footer-heading">
              Contact Us
            </h3>

            <div className="footer-contact">

              <p>
                <FaPhoneAlt className="footer-icon" />
                +91 9876543210
              </p>

              <p>
                <FaEnvelope className="footer-icon" />
                info@kmvcollege.edu
              </p>

            </div>

            {/* SOCIAL ICONS */}
            <div className="footer-social">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* COLUMN 4 */}
          <div className="footer-col">

            <h3 className="footer-heading">
              Address
            </h3>

            <p className="footer-address">
              <FaMapMarkerAlt className="footer-icon" />
              KMV College, Civil Lines,
              Meerut, Uttar Pradesh, India
            </p>

            {/* GOOGLE MAP */}
            <div className="footer-map">

              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8979692656!2d77.70641383052262!3d28.98721805182092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c64f457b0edb5%3A0x42b7f8f5b7f2d1b0!2sMeerut%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="140"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>

            </div>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © 2026 KMV College. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;