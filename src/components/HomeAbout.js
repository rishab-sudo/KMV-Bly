import React from "react";
import "./HomeAbout.css";

import aboutImage from "../assets/kmv-banner1.jpeg";

const HomeAbout = () => {
  return (
    <section className="homeabout g-0">

      <div className="container-fluid g-0">

        <div className="homeabout-wrapper">

          {/* LEFT IMAGE */}
          <div className="homeabout-image-section">
            <img
              src={aboutImage}
              alt="KMV College"
              className="homeabout-image"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="homeabout-content">

            <span className="homeabout-subtitle">
              About KMV College
            </span>

            <h2 className="homeabout-heading">
              Empowering Students Through
              Quality Education & Innovation
            </h2>

            <p className="homeabout-description">
              KMV College is committed to providing quality education,
              academic excellence, and holistic development for students.
              Our institution focuses on innovation, discipline,
              leadership, and career-oriented learning to prepare
              students for a bright future.
            </p>

            <p className="homeabout-description">
              With experienced faculty members, modern infrastructure,
              and student-centered teaching methods, we ensure an
              inspiring educational environment that encourages growth,
              confidence, and success.
            </p>

            <p className="homeabout-description">
              We believe in empowering students through knowledge,
              values, and practical learning experiences while promoting
              academics, sports, cultural activities, and leadership
              opportunities.
            </p>

            {/* BUTTON */}
            <div className="homeabout-btn-wrapper">
              <a href="/about" className="homeabout-btn">
                Know More
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HomeAbout;