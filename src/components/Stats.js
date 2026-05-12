import React from "react";
import { Container } from "react-bootstrap";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookOpen,
  FaUniversity
} from "react-icons/fa";

import "./Stats.css";

const Stats = () => {
  return (
    <section className="stats">
      <Container className="stats-container">

        <div className="stats-wrapper">

          {/* CARD 1 */}
          <div className="stats-card stats-border">

            <div className="stats-icon">
              <FaUserGraduate />
            </div>

            <h3 className="stats-heading">
              5000+
            </h3>

            <p className="stats-description">
              Students Successfully Graduated
            </p>

          </div>

          {/* CARD 2 */}
          <div className="stats-card stats-border">

            <div className="stats-icon">
              <FaChalkboardTeacher />
            </div>

            <h3 className="stats-heading">
              120+
            </h3>

            <p className="stats-description">
              Experienced Faculty Members
            </p>

          </div>

          {/* CARD 3 */}
          <div className="stats-card stats-border">

            <div className="stats-icon">
              <FaBookOpen />
            </div>

            <h3 className="stats-heading">
              50+
            </h3>

            <p className="stats-description">
              Professional & Academic Courses
            </p>

          </div>

          {/* CARD 4 */}
          <div className="stats-card">

            <div className="stats-icon">
              <FaUniversity />
            </div>

            <h3 className="stats-heading">
              25+
            </h3>

            <p className="stats-description">
              Years Of Educational Excellence
            </p>

          </div>

        </div>

      </Container>
    </section>
  );
};

export default Stats;