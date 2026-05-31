import React from "react";
import "./Certificate.css";

// Import your certificate images
import certificate1 from "../assets/NAAC_Certificate_Left-copy.png";
import certificate2 from "../assets/NAAC_Quality_Profile_Right-copy.png";


const certificates = [
  {
    id: 1,
    image: certificate1,
    alt: "Certificate 1",
  },
  {
    id: 2,
    image: certificate2,
    alt: "Certificate 2",
  },

];

const Certificate = () => {
  return (
    <section className="certificate-section">
      <div className="certificate-container">
        <div className="section-header">
          <span className="section-tag">Certificates & Accreditations</span>
          <h2>  NAAC - ACCEDITED LEVEL B</h2>

        </div>

        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <div className="certificate-card" key={certificate.id}>
              <img
                src={certificate.image}
                alt={certificate.alt}
                className="certificate-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;