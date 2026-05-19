import React from "react";
import "./HomeAbout.css";

const HomeAbout = () => {
  return (
    <section className="homeabout">

      {/* OVERLAY */}
      <div className="homeabout-overlay"></div>

      {/* BACKGROUND IMAGE */}
      <div
        className="homeabout-bg"
        style={{
          backgroundImage: `url(${require("../assets/kmv-banner1.jpeg")})`,
        }}
      ></div>

      <div className="container">

        {/* CONTENT */}
        <div className="homeabout-content">

          <h2 className="homeabout-heading">
            About KMV College
          </h2>

          <p className="homeabout-description">
            KMV College is committed to providing quality education,
            academic excellence, and holistic development for students.
            Our institution focuses on innovation, discipline, leadership,
            and career-oriented learning to prepare students for a bright
            future. With experienced faculty members and modern
            infrastructure, we ensure an inspiring educational environment
            for every learner.
          </p>

          <p className="homeabout-description">
            Our college believes in empowering students through
            knowledge, values, and practical learning experiences.
            We encourage participation in academics, sports,
            cultural activities, and research programs to build
            confidence and leadership qualities among students.
          </p>

          <p className="homeabout-description">
            KMV College continuously strives to create an atmosphere
            where students can achieve their educational goals and
            contribute positively to society with integrity and
            excellence.
          </p>

        </div>

      </div>

      {/* BOTTOM BOXES */}
      <div className="homeabout-box-wrapper">

        <div className="homeabout-box">
          <h3>Admission Open</h3>
          <p>Apply now for the upcoming academic session.</p>
        </div>

        <div className="homeabout-box">
          <h3>Download Prospectus</h3>
          <p>Get complete information about courses & facilities.</p>
        </div>

        <div className="homeabout-box">
          <h3>Explore Courses</h3>
          <p>Discover career-oriented undergraduate programs.</p>
        </div>

      </div>

    </section>
  );
};

export default HomeAbout;