import React from "react";
import TopBanner from "../components/TopBanner";
import {
  FaBookOpen,
  FaGraduationCap,
  FaPaintBrush,
  FaMusic,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";

import "./Courses.css";

const Courses = () => {

  const baSubjects = [
    "हिंदी",
    "अंग्रेजी",
    "समाजशास्त्र",
    "राजनीति शास्त्र",
    "अर्थशास्त्र",
    "संगीत (गायन व वादन)",
    "चित्रकला",
    "इतिहास",
    "संस्कृत",
    "गृह विज्ञान (स्ववित्तपोषित पाठ्यक्रम)",
    "शिक्षाशास्त्र (स्ववित्तपोषित पाठ्यक्रम)",
  ];

  const maSubjects = [
    "हिंदी",
    "अंग्रेजी",
    "चित्रकला",
    "संगीत (वादन)",
  ];

  return (
    <div className="courses-page">

      <TopBanner
        title="Courses"
        currentPage="Courses"
        backgroundImage="/images/kmv-banner1.jpeg"
      />

      {/* ================= COURSES SECTION ================= */}

      <section className="courses-section">

        <div className="container">

          <div className="course-heading">

            <p className="small-title">
              Academic Programs
            </p>

            <h2>
              हमारे <span>पाठ्यक्रम</span>
            </h2>

            <p className="course-description">
              छात्राओं के उज्ज्वल भविष्य के लिए स्नातक एवं स्नातकोत्तर
              स्तर पर गुणवत्तापूर्ण शिक्षा उपलब्ध कराई जाती है।
            </p>

          </div>

          <div className="seat-alert">
            ⚠ सीमित सीटें उपलब्ध हैं। प्रवेश पहले आओ पहले पाओ के आधार पर होगा।
          </div>

          <div className="course-grid">

            {/* BA CARD */}

            <div className="course-card">

              <div className="course-icon">
                <FaGraduationCap />
              </div>

              <h3>बी.ए. (B.A.)</h3>

              <p className="course-subtitle">
                स्नातक पाठ्यक्रम
              </p>

              <ul className="subject-list">

                {baSubjects.map((subject, index) => (
                  <li key={index}>
                    <FaBookOpen className="subject-icon" />
                    {subject}
                  </li>
                ))}

              </ul>

              <button className="enroll-btn">
                Enroll Now
              </button>

            </div>

            {/* MA CARD */}

            <div className="course-card">

              <div className="course-icon">
                <FaMusic />
              </div>

              <h3>एम.ए. (M.A.)</h3>

              <p className="course-subtitle">
                स्नातकोत्तर पाठ्यक्रम
              </p>

              <ul className="subject-list">

                {maSubjects.map((subject, index) => (
                  <li key={index}>
                    <FaPaintBrush className="subject-icon" />
                    {subject}
                  </li>
                ))}

              </ul>

              <button className="enroll-btn">
                Enroll Now
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ================= ADMISSION STATUS SECTION ================= */}

      <section className="admission-section">

        <div className="container">

          <div className="admission-heading">

            <p className="small-title">
              Admission Overview
            </p>

            <h2>
              छात्राओं की <span>प्रवेश स्थिति</span>
            </h2>

            <p>
              स्नातक एवं स्नातकोत्तर स्तर पर उपलब्ध सीटों एवं वर्तमान
              प्रवेश स्थिति का विवरण।
            </p>

          </div>

          <div className="admission-wrapper">

            {/* LEFT IMAGE */}

            <div className="admission-image">

              <img
                src="/images/admission-status.jpeg"
                alt="Admission Status"
              />

            </div>

            {/* RIGHT CONTENT */}

            <div className="admission-content">

              {/* UG CARD */}

              <div className="admission-card">

                <div className="admission-card-icon">
                  <FaUniversity />
                </div>

                <div className="admission-card-content">

                  <h3>स्नातक स्तर (B.A.)</h3>

                  <div className="admission-info">

                    <div className="info-box">
                      <span>विषय</span>
                      <h4>11</h4>
                    </div>

                    <div className="info-box">
                      <span>स्वीकृत सीट</span>
                      <h4>640</h4>
                    </div>

                    <div className="info-box">
                      <span>प्रवेश छात्राएं</span>
                      <h4>128</h4>
                    </div>

                  </div>

                </div>

              </div>

              {/* PG CARD */}

              <div className="admission-card">

                <div className="admission-card-icon">
                  <FaUsers />
                </div>

                <div className="admission-card-content">

                  <h3>परास्नातक स्तर (M.A.)</h3>

                  <div className="pg-table">

                    <div className="pg-row">
                      <span>हिंदी</span>
                      <strong>60 सीट / 07 प्रवेश</strong>
                    </div>

                    <div className="pg-row">
                      <span>अंग्रेजी</span>
                      <strong>60 सीट / 08 प्रवेश</strong>
                    </div>

                    <div className="pg-row">
                      <span>चित्रकला</span>
                      <strong>30 सीट / 08 प्रवेश</strong>
                    </div>

                    <div className="pg-row">
                      <span>संगीत वादन</span>
                      <strong>15 सीट / 03 प्रवेश</strong>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Courses;