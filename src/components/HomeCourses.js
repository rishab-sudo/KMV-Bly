import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import "./HomeCourses.css";

const HomeCourses = () => {
  return (
    <section className="homecourse">

      <div className="container">

        {/* TOP HEADING */}

        <div className="homecourse-top">

          <span className="homecourse-subtitle">
            कला संकाय
          </span>

          <h2 className="homecourse-heading">
            उपलब्ध पाठ्यक्रम
          </h2>

          <p className="homecourse-text">
            कन्या महाविद्यालय में छात्राओं के लिए कला संकाय के अंतर्गत
            विभिन्न विषयों में स्नातक एवं स्ववित्तपोषित पाठ्यक्रम
            संचालित किए जाते हैं।
          </p>

        </div>

        {/* CONTENT */}

        <div className="homecourse-content">

          {/* COURSE CARD */}

          <div className="homecourse-card">

            <div className="homecourse-icon">
              <FaGraduationCap />
            </div>

            <h3 className="homecourse-cardtitle">
              बी.ए. विषय
            </h3>

            <p className="homecourse-cardtext">
              हिंदी, अंग्रेजी, समाजशास्त्र, राजनीति शास्त्र,
              अर्थशास्त्र, संगीत (गायन व वादन), चित्रकला,
              इतिहास, संस्कृत, गृह विज्ञान एवं शिक्षाशास्त्र
              (स्ववित्तपोषित पाठ्यक्रम)।
            </p>

            <a href="/admission" className="homecourse-btn">
              Apply Now
            </a>

          </div>

          {/* COURSE CARD */}

          <div className="homecourse-card">

            <div className="homecourse-icon">
              <FaGraduationCap />
            </div>

            <h3 className="homecourse-cardtitle">
             एम.ए (स्ववित्तपोषित पाठ्यक्रम)
            </h3>

            <p className="homecourse-cardtext">
          हिन्दी, अंग्रेज़ी, चित्रकला, संगीत (वादन)
            </p>

            <a href="/admission" className="homecourse-btn">
              Apply Now
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HomeCourses;