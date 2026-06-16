import React from "react";
import {
  FaFacebookF,
  FaInstagram,

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
              src={require("../assets/kmv-logo.png")}
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
                +91 9760502221
              </p>

              <p>
                <FaEnvelope className="footer-icon" />
         kmvbly@gmail.com
              </p>

            </div>

            {/* SOCIAL ICONS */}
            <div className="footer-social">

              <a
                href= "https://www.facebook.com/profile.php?id=61552258648539"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/kanyamahavidyalaybhoorbareilly/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

              {/* <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a> */}

              <a
                href="https://wa.me/919760502221"
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
         Arya Samaj,
              Bhoor, Bareilly, <br/> Uttar Pradesh, India
            </p>

            {/* GOOGLE MAP */}
            <div className="footer-map">

              <iframe
                title="map"
                src="https://maps.google.com/maps?q=bareilly&t=&z=13&ie=UTF8&iwloc=&output=embed"
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