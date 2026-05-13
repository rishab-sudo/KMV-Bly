import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">

      {/* HERO SECTION */}
      <div className="contact-hero">

        <div className="contact-hero-overlay"></div>

        <div className="container">

          <div className="contact-hero-content">

            <h1 className="contact-hero-heading">
              Contact Us
            </h1>

            <p className="contact-hero-text">
              Home / Contact Us
            </p>

          </div>

        </div>

      </div>

      <div className="container">

        {/* TOP INFO BOX */}
        <div className="contact-box">

          {/* COL 1 */}
          <div className="contact-box-col contact-border">

            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3>Our Address</h3>

              <p>
                KMV College, Civil Lines,
                Meerut, Uttar Pradesh, India
              </p>
            </div>

          </div>

          {/* COL 2 */}
          <div className="contact-box-col contact-border">

            <div className="contact-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <h3>Phone Number</h3>

              <p>
                +91 9876543210
              </p>
            </div>

          </div>

          {/* COL 3 */}
          <div className="contact-box-col">

            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div>
              <h3>Email Address</h3>

              <p>
                info@kmvcollege.edu
              </p>
            </div>

          </div>

        </div>

        {/* CONTACT FORM */}
        <div className="contact-form-container">

          {/* LEFT IMAGE */}
          <div className="contact-form-left">

            <img
              src={require("../assets/kmv-banner3.jpeg")}
              alt="contact"
              className="contact-form-image"
            />

          </div>

          {/* RIGHT FORM */}
          <div className="contact-form-right">

            <h2 className="contact-form-heading">
              Send Us A Message
            </h2>

            <form className="contact-form">

              {/* NAME */}
              <label className="contact-form-label">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="contact-form-input"
              />

              {/* EMAIL */}
              <label className="contact-form-label">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="contact-form-input"
              />

              {/* PHONE */}
              <label className="contact-form-label">
                Phone Number
              </label>

              <input
                type="number"
                placeholder="Enter Your Phone Number"
                className="contact-form-input"
              />

              {/* MESSAGE */}
              <label className="contact-form-label">
                Message
              </label>

              <textarea
                placeholder="Write Your Message Here"
                className="contact-form-textarea"
              ></textarea>

              <button
                type="submit"
                className="contact-form-btn"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* MAP */}
        <div className="contact-map">

          <iframe
            title="Google Map"
            className="contact-map-frame"
            src="https://maps.google.com/maps?q=Meerut&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>

      </div>

    </section>
  );
};

export default Contact;