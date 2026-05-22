import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";
import TopBanner from "../components/TopBanner";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">

      {/* HERO SECTION */}
      <TopBanner
        title="Contact"
        currentPage="Contact"
        backgroundImage="/images/kmv-banner1.jpeg"
      />

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
                Kanya Mahavidyalaya Arya Samaj,
                Bhoor, Bareilly, Uttar Pradesh
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
                +91 9760502221
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
                kmvbly@gmail.com
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

              {/* NAME ROW */}
              <div className="contact-form-row">

                <div className="contact-form-group">

                  <label className="contact-form-label">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="contact-form-input"
                  />

                </div>

                <div className="contact-form-group">

                  <label className="contact-form-label">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="contact-form-input"
                  />

                </div>

              </div>

              {/* EMAIL + PHONE */}
              <div className="contact-form-row">

                <div className="contact-form-group">

                  <label className="contact-form-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="contact-form-input"
                  />

                </div>

                <div className="contact-form-group">

                  <label className="contact-form-label">
                    Mobile Number
                  </label>

                  <input
                    type="number"
                    placeholder="Enter Mobile Number"
                    className="contact-form-input"
                  />

                </div>

              </div>

              {/* MESSAGE */}
              <div className="contact-form-group">

                <label className="contact-form-label">
                  Message
                </label>

                <textarea
                  placeholder="Write Your Message Here"
                  className="contact-form-textarea"
                ></textarea>

              </div>

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
            src="https://maps.google.com/maps?q=bareilly&t=&z=13&ie=UTF8&iwloc=&output=embed"
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