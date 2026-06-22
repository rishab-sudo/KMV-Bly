import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";
import Swal from "sweetalert2";
import TopBanner from "../components/TopBanner";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", mobile: "", message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const e = {};
    if (!form.firstName.trim() || form.firstName.trim().length < 2)
      e.firstName = "Enter a valid first name";
    if (!form.lastName.trim() || form.lastName.trim().length < 2)
      e.lastName = "Enter a valid last name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";
    if (!/^[6-9]\d{9}$/.test(form.mobile))
      e.mobile = "Enter a valid 10-digit mobile number";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Message must be at least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      Swal.fire({
        icon: "warning",
        title: "Oops!",
        text: "Please fill all fields correctly.",
        confirmButtonColor: "#1a73e8",
      });
      return;
    }

    Swal.fire({
      title: "Sending...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const res = await fetch("/send-application.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "contact", ...form }),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          html: `Thank you <b>${form.firstName}</b>!<br/>We've received your message and will get back to you at <b>${form.email}</b> soon.`,
          confirmButtonColor: "#1a73e8",
        }).then(() => {
          setForm({ firstName: "", lastName: "", email: "", mobile: "", message: "" });
          setErrors({});
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: "Something went wrong. Please try again.",
          confirmButtonColor: "#e53e3e",
        });
      }
    } catch {
      Swal.fire({
        icon: "error",
        title: "Network Error!",
        text: "Could not connect. Please try again later.",
        confirmButtonColor: "#e53e3e",
      });
    }
  };

  const inputClass = (field) =>
    `contact-form-input${errors[field] ? " input-error" : ""}`;

  return (
    <section className="contact">

      {/* HERO SECTION */}
      <TopBanner
        title="Contact"
        currentPage="Contact"
        backgroundImage="/images/kmv-bly9.png"
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
              <p>Kanya Mahavidyalaya Arya Samaj, Bhoor, Bareilly, Uttar Pradesh</p>
            </div>
          </div>

          {/* COL 2 */}
          <div className="contact-box-col contact-border">
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>
            <div>
              <h3>Phone Number</h3>
              <p>+91 9760502221</p>
            </div>
          </div>

          {/* COL 3 */}
          <div className="contact-box-col">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div>
              <h3>Email Address</h3>
              <p>kmvbly@gmail.com</p>
            </div>
          </div>

        </div>

        {/* CONTACT FORM */}
        <div className="contact-form-container">

          {/* LEFT IMAGE */}
          <div className="contact-form-left">
            <img
              src={require("../assets/aboutt-img.png")}
              alt="contact"
              className="contact-form-image"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form-right">

            <h2 className="contact-form-heading">Send Us A Message</h2>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>

              {/* NAME ROW */}
              <div className="contact-form-row">

                <div className="contact-form-group">
                  <label className="contact-form-label">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Enter First Name"
                    className={inputClass("firstName")}
                  />
                  {errors.firstName && (
                    <span className="contact-error-msg">{errors.firstName}</span>
                  )}
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Enter Last Name"
                    className={inputClass("lastName")}
                  />
                  {errors.lastName && (
                    <span className="contact-error-msg">{errors.lastName}</span>
                  )}
                </div>

              </div>

              {/* EMAIL + PHONE */}
              <div className="contact-form-row">

                <div className="contact-form-group">
                  <label className="contact-form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter Email Address"
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <span className="contact-error-msg">{errors.email}</span>
                  )}
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="Enter Mobile Number"
                    maxLength={10}
                    className={inputClass("mobile")}
                  />
                  {errors.mobile && (
                    <span className="contact-error-msg">{errors.mobile}</span>
                  )}
                </div>

              </div>

              {/* MESSAGE */}
              <div className="contact-form-group">
                <label className="contact-form-label">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write Your Message Here"
                  className={`contact-form-textarea${errors.message ? " input-error" : ""}`}
                />
                {errors.message && (
                  <span className="contact-error-msg">{errors.message}</span>
                )}
              </div>

              <button type="submit" className="contact-form-btn">
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