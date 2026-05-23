import React from "react";
import TopBanner from "../components/TopBanner";
import {
  FaBookOpen,
  FaGraduationCap,
  FaPaintBrush,
  FaMusic,
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

      <section className="courses-section">

        <div className="container">

          {/* HEADING */}

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

          {/* SEATS ALERT */}

          <div className="seat-alert">
            ⚠ सीमित सीटें उपलब्ध हैं। प्रवेश पहले आओ पहले पाओ के आधार पर होगा।
          </div>

          {/* COURSE CARDS */}

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

    </div>
  );
};

export default Courses;