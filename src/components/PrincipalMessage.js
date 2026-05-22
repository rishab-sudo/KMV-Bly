import React from "react";
import {
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";

import "./PrincipalMessage.css";

const PrincipalMessage = () => {
  return (
    <section className="principalmessage">

      <div className="container">

        {/* HEADING ABOVE */}

        <div className="principalmessage-top">

          <h2 className="principalmessage-heading">
            Principal Message
          </h2>

        </div>

        {/* IMAGE + MESSAGE ROW */}

        <div className="principalmessage-wrapper">

          {/* LEFT SIDE IMAGE */}

          <div className="principalmessage-left">

            <img
              src={require("../assets/kmv-banner1.jpeg")}
              alt="principal"
              className="principalmessage-image"
            />

            <div className="principalmessage-namebox">

              <p>
                Principal, KMV College
              </p>

            </div>

          </div>

          {/* RIGHT SIDE MESSAGE */}

          <div className="principalmessage-right">

            <div className="principalmessage-content">

              <FaQuoteLeft className="quote-left" />

              <p className="principalmessage-text">
                Welcome to KMV College, an institution
                dedicated to academic excellence,
                innovation, and holistic development.
                Our mission is to nurture young minds
                with knowledge, discipline, and
                leadership qualities that prepare them
                for future success.
              </p>

              <p className="principalmessage-text">
                We continuously strive to create a
                learning environment where students can
                grow intellectually, socially, and
                professionally through quality
                education, research, leadership and
                practical exposure.
              </p>

              <FaQuoteRight className="quote-right" />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default PrincipalMessage;