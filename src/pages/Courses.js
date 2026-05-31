import React from "react";
import TopBanner from "../components/TopBanner";
import {
  FaGraduationCap,
  FaUniversity,
  FaBookOpen,
  FaArrowRight,
  FaUsers,
  FaLayerGroup,
  FaClipboardCheck,

} from "react-icons/fa";

import "./Courses.css";

const Courses = () => {


const baSubjects = [
  "हिंदी",
  "अंग्रेजी",
  "समाजशास्त्र",
  "राजनीति शास्त्र",
  "अर्थशास्त्र",
  "संगीत",
  "चित्रकला",
  "इतिहास",
  "संस्कृत",
  "गृह विज्ञान",
  "शिक्षाशास्त्र",
];

const maSubjects = [
  "हिंदी",
  "अंग्रेजी",
  "चित्रकला",
  "संगीत",
];

  return (
    <div className="courses-page">

      <TopBanner
        title="Courses"
        currentPage="Courses"
          backgroundImage="/images/kmv-bly9.png"
      />

      {/* ================= COURSES SECTION ================= */}

<section className="subjects-section">
  <div className="container">

    <div className="subjects-wrapper">

      <div className="subject-card">

        <h3>
          <FaBookOpen /> बी.ए. विषय
        </h3>

        <div className="subject-tags">
          {baSubjects.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>

      </div>

      <div className="subject-card">

        <h3>
          <FaBookOpen /> एम.ए. विषय
        </h3>

        <div className="subject-tags">
          {maSubjects.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>

      </div>

    </div>

  </div>
</section>

      {/* ================= ADMISSION STATUS SECTION ================= */}

   <section className="stats-section">

  <div className="container">

    <div className="stats-grid">

      <div className="stat-card">
        <FaLayerGroup />
        <h3>15</h3>
        <p>कुल पाठ्यक्रम</p>
      </div>

      <div className="stat-card">
        <FaGraduationCap />
        <h3>865</h3>
        <p>स्वीकृत सीटें</p>
      </div>

      <div className="stat-card">
        <FaUsers />
        <h3>154</h3>
        <p>प्रवेश छात्राएं</p>
      </div>

      <div className="stat-card">
        <FaClipboardCheck />
        <h3>711</h3>
        <p>शेष सीटें</p>
      </div>

    </div>

  </div>

</section>
{/*  */}
<section className="seat-section">

  <div className="container">

    <div className="section-heading">
      <span>Seat Availability</span>
      <h2>प्रवेश स्थिति</h2>
    </div>

    <div className="seat-card">

      <h3>स्नातक स्तर (B.A.)</h3>

      <div className="seat-row">
        <span>उपलब्ध विषय</span>
        <strong>11</strong>
      </div>

      <div className="seat-row">
        <span>कुल सीटें</span>
        <strong>640</strong>
      </div>

      <div className="seat-row">
        <span>प्रवेश छात्राएं</span>
        <strong>128</strong>
      </div>

    </div>

    <div className="seat-card">

      <h3>परास्नातक स्तर (M.A.)</h3>

      <div className="seat-row">
        <span>हिंदी</span>
        <strong>60 / 07</strong>
      </div>

      <div className="seat-row">
        <span>अंग्रेजी</span>
        <strong>60 / 08</strong>
      </div>

      <div className="seat-row">
        <span>चित्रकला</span>
        <strong>30 / 08</strong>
      </div>

      <div className="seat-row">
        <span>संगीत वादन</span>
        <strong>15 / 03</strong>
      </div>

    </div>

  </div>

</section>
{/*  */}
<section className="admission-cta">

  <div className="container">

    <div className="cta-box">

      <h2>प्रवेश सत्र 2026-27 प्रारम्भ</h2>

      <p>
        अपने उज्ज्वल भविष्य की शुरुआत करें।
        आज ही प्रवेश प्रक्रिया पूर्ण करें।
      </p>

      <div className="cta-buttons">

        <button className="apply-btn">
          Apply Now
        </button>

        <button className="contact-btn">
          Contact Us
        </button>

      </div>

    </div>

  </div>

</section>
    </div>
  );
};

export default Courses;