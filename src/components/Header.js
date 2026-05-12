import React from "react";
import { Container } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
     
        <Container className="container">
          <div className="header-wrapper">

            {/* LEFT SIDE */}
            <div className="header-left">
              <img
                src="/logo.png"
                alt="College Logo"
                className="header-logo"
              />

              <div className="college-info">
                <h2 className="college-name">KMV College</h2>
                <p className="college-tagline">
                  Excellence in Education
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="header-right">
              <div className="header-contact">
                <span className="label">Email :</span>
                <span>info@kmvcollege.edu</span>
              </div>

              <div className="header-contact">
                <span className="label">Phone :</span>
                <span>+91 9876543210</span>
              </div>
            </div>

          </div>
        </Container>

    </header>
  );
};

export default Header;