import React from "react";
import "./PrincipalMessage.css";

const PrincipalMessage = () => {
  return (
    <section className="principalmessage">
      <div className="container">

        <div className="principalmessage-wrapper">

          {/* LEFT SIDE */}
          <div className="principalmessage-left">

            <img
              src={require("../assets/kmv-banner1.jpeg")}
              alt="principal"
              className="principalmessage-image"
            />

            <div className="principalmessage-namebox">
              <h4>Dr. Rajesh Sharma</h4>
              <p>Principal, KMV College</p>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="principalmessage-right">

            <h2 className="principalmessage-heading">
              Principal Message
            </h2>

            <p className="principalmessage-text">
              Welcome to KMV College, an institution dedicated to
              academic excellence, innovation, and holistic
              development. Our mission is to nurture young minds
              with knowledge, discipline, and leadership qualities
              that prepare them for future success.
            </p>

            <p className="principalmessage-text">
              We continuously strive to create a learning
              environment where students can grow intellectually,
              socially, and professionally through quality
              education, research, leadership and practical
              exposure.
            </p>

          </div>

        </div>

        {/* BOX POINTS */}
        <div className="box-points">

          <h3 className="box-points-heading">
            Our Core Objectives
          </h3>

       <ul className="box-points-list">

  <li>
    Provide quality education with academic excellence by
    maintaining high academic standards, modern teaching
    methodologies, experienced faculty members and a
    student-focused learning environment that encourages
    intellectual and personal growth.
  </li>

  <li>
    Encourage innovation, leadership and creativity among
    students through seminars, workshops, cultural activities,
    research programs, teamwork projects and skill-based
    learning opportunities that help students build confidence
    and leadership qualities.
  </li>

  <li>
    Build strong moral values, discipline and professional
    ethics among students so they can become responsible
    citizens and contribute positively towards society,
    organizations and the nation with honesty and integrity.
  </li>

  <li>
    Promote research, skill development and practical
    learning by providing modern laboratories, digital
    resources, industrial exposure and real-world learning
    experiences that enhance professional and technical
    capabilities.
  </li>

  <li>
    Prepare students for successful careers and future
    challenges through career guidance, personality
    development programs, communication skills training,
    placement support and opportunities for holistic
    development in various fields.
  </li>

</ul>

        </div>

      </div>
    </section>
  );
};

export default PrincipalMessage;