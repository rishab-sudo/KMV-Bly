import React, { useMemo, useState } from "react";
import {
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import TopBanner from "../components/TopBanner";
import "./Faculty.css";

const facultyData = [
  // PAGE 1
  {
    id: 1,
    page: 1,
    subject: "हिन्दी",
    subjectEnglish: "hindi",
    name: "डॉ० सविता उपाध्याय",
    qualification: "एम० ए० हिन्दी, पीएच० डी०",
    designation: "एसो० प्रो० एवं प्रभारी",
    image:require("../assets/kmv-logo.png"),
    email: "savita@kmvcollege.edu.in",
  },

  {
    id: 2,
    page: 1,
    subject: "हिन्दी",
    subjectEnglish: "hindi",
    name: "डॉ० रेनू उपाध्याय",
    qualification: "एम० ए० हिन्दी, समाज शास्त्र, पीएच.डी.",
    designation: "एसो० प्रो०",
     image:require("../assets/kmv-logo.png"),
    email: "renu@kmvcollege.edu.in",
  },

  {
    id: 3,
    page: 1,
    subject: "हिन्दी",
    subjectEnglish: "hindi",
    name: "डॉ० अनीता वर्मा",
    qualification: "एम० ए० हिन्दी, नेट",
    designation: "असिस्टेंट प्रोफेसर",
     image:require("../assets/kmv-logo.png"),
    email: "anita@kmvcollege.edu.in",
  },
    {
    id: 4,
    page: 1,
    subject: "हिन्दी",
    subjectEnglish: "hindi",
    name: "डॉ० अनीता वर्मा",
    qualification: "एम० ए० हिन्दी, नेट",
    designation: "असिस्टेंट प्रोफेसर",
     image:require("../assets/kmv-logo.png"),
    email: "anita@kmvcollege.edu.in",
  },
      {
    id: 5,
    page: 1,
    subject: "हिन्दी",
    subjectEnglish: "hindi",
    name: "डॉ० अनीता वर्मा",
    qualification: "एम० ए० हिन्दी, नेट",
    designation: "असिस्टेंट प्रोफेसर",
     image:require("../assets/kmv-logo.png"),
    email: "anita@kmvcollege.edu.in",
  },
      {
    id: 6,
    page: 1,
    subject: "हिन्दी",
    subjectEnglish: "hindi",
    name: "डॉ० अनीता वर्मा",
    qualification: "एम० ए० हिन्दी, नेट",
    designation: "असिस्टेंट प्रोफेसर",
     image:require("../assets/kmv-logo.png"),
    email: "anita@kmvcollege.edu.in",
  },

  // PAGE 2
  {
    id: 4,
    page: 2,
    subject: "राजनीति शास्त्र",
    subjectEnglish: "political science",
    name: "डॉ० कुमुद प्रभाकर",
    qualification: "एम० ए० राजनीति शास्त्र, नेट, पीएच० डी०",
    designation: "एसो० प्रो०",
    image:require("../assets/kmv-logo.png"),
    email: "kumud@kmvcollege.edu.in",
  },

  {
    id: 5,
    page: 2,
    subject: "राजनीति शास्त्र",
    subjectEnglish: "politics",
    name: "श्रीमती निधि सोनकर",
    qualification: "एम० ए० राजनीतिशास्त्र, नेट",
    designation: "असिस्टेंट प्रोफेसर",
     image:require("../assets/kmv-logo.png"),
    email: "nidhi@kmvcollege.edu.in",
  },
    {
    id: 6,
    page: 2,
    subject: "राजनीति शास्त्र",
    subjectEnglish: "politics",
    name: "श्रीमती निधि सोनकर",
    qualification: "एम० ए० राजनीतिशास्त्र, नेट",
    designation: "असिस्टेंट प्रोफेसर",
     image:require("../assets/kmv-logo.png"),
    email: "nidhi@kmvcollege.edu.in",
  },
    {
    id: 7,
    page: 2,
    subject: "राजनीति शास्त्र",
    subjectEnglish: "politics",
    name: "श्रीमती निधि सोनकर",
    qualification: "एम० ए० राजनीतिशास्त्र, नेट",
    designation: "असिस्टेंट प्रोफेसर",
     image:require("../assets/kmv-logo.png"),
    email: "nidhi@kmvcollege.edu.in",
  },
    {
    id: 8,
    page: 2,
    subject: "राजनीति शास्त्र",
    subjectEnglish: "politics",
    name: "श्रीमती निधि सोनकर",
    qualification: "एम० ए० राजनीतिशास्त्र, नेट",
    designation: "असिस्टेंट प्रोफेसर",
     image:require("../assets/kmv-logo.png"),
    email: "nidhi@kmvcollege.edu.in",
  },
    {
    id: 9,
    page: 2,
    subject: "राजनीति शास्त्र",
    subjectEnglish: "politics",
    name: "श्रीमती निधि सोनकर",
    qualification: "एम० ए० राजनीतिशास्त्र, नेट",
    designation: "असिस्टेंट प्रोफेसर",
     image:require("../assets/kmv-logo.png"),
    email: "nidhi@kmvcollege.edu.in",
  },

  // PAGE 3
  {
    id: 6,
    page: 3,
    subject: "समाजशास्त्र",
    subjectEnglish: "sociology",
    name: "डॉ० सुषमा चौरसिया",
    qualification: "एम० ए० समाजशास्त्र, नेट, पीएच० डी०",
    designation: "एसो० प्रो०",
     image:require("../assets/kmv-logo.png"),
    email: "sushma@kmvcollege.edu.in",
  },

  {
    id: 7,
    page: 3,
    subject: "समाजशास्त्र",
    subjectEnglish: "sociology",
    name: "डॉ० रीता मौर्या",
    qualification: "एम.ए. समाजशास्त्र, एम.फिल. पीएच० डी०",
    designation: "असिस्टेंट प्रोफेसर",
     image:require("../assets/kmv-logo.png"),
    email: "rita@kmvcollege.edu.in",
  },

  // PAGE 4
  {
    id: 8,
    page: 4,
    subject: "अर्थशास्त्र",
    subjectEnglish: "economics",
    name: "डॉ० अनीता भारद्वाज",
    qualification: "एम० ए० अर्थशास्त्र, पीएच० डी०",
    designation: "असिस्टेंट प्रोफेसर",
     image:require("../assets/kmv-logo.png"),
    email: "anita@kmvcollege.edu.in",
  },

  {
    id: 9,
    page: 4,
    subject: "अर्थशास्त्र",
    subjectEnglish: "economics",
    name: "डॉ० स्वाति आनन्द",
    qualification: "एम० ए० अर्थशास्त्र, नेट",
    designation: "असिस्टेंट प्रोफेसर",
     image:require("../assets/kmv-logo.png"),
    email: "swati@kmvcollege.edu.in",
  },

  // PAGE 5
  {
    id: 10,
    page: 5,
    subject: "गृहविज्ञान",
    subjectEnglish: "home science",
    name: "डॉ० परिधि सक्सेना",
    qualification: "एम० ए० गृहविज्ञान, पीएच० डी०",
    designation: "असिस्टेंट प्रोफेसर",
    image:require("../assets/kmv-logo.png"),
    email: "paridhi@kmvcollege.edu.in",
  },

  {
    id: 11,
    page: 5,
    subject: "शिक्षाशास्त्र",
    subjectEnglish: "education",
    name: "डॉ० शुचि श्रीवास्तव",
    qualification: "एम० ए० शिक्षाशास्त्र, पीएच० डी०",
    designation: "असिस्टेंट प्रोफेसर",
    image:require("../assets/kmv-logo.png"),
    email: "shuchi@kmvcollege.edu.in",
  },
];

const subjects = [
  {
    id: 1,
    label: "हिन्दी",
    page: 1,
  },

  {
    id: 2,
    label: "राजनीति शास्त्र",
    page: 2,
  },

  {
    id: 3,
    label: "समाजशास्त्र",
    page: 3,
  },

  {
    id: 4,
    label: "अर्थशास्त्र",
    page: 4,
  },

  {
    id: 5,
    label: "गृहविज्ञान",
    page: 5,
  },
];

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredFaculty = useMemo(() => {
    const search = searchTerm.toLowerCase();

    return facultyData.filter((item) => {
      const matchPage = item.page === currentPage;

      const matchSearch =
        item.subject.toLowerCase().includes(search) ||
        item.subjectEnglish.toLowerCase().includes(search);

      if (searchTerm === "") {
        return matchPage;
      }

      return matchSearch;
    });
  }, [searchTerm, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="faculty-page">
      <TopBanner
        title="Faculty"
        currentPage="Faculty"
        backgroundImage="/images/kmv-banner1.jpeg"
      />

      <section className="faculty-main-section">
        <div className="container">
          <div className="faculty-main-wrapper">
            {/* SIDEBAR */}

            <aside className="faculty-sidebar">
              <div className="faculty-sidebar-box">
                <h3 className="faculty-sidebar-heading">
                  शिक्षक खोजें
                </h3>

                {/* SEARCH */}

                <div className="faculty-search-box">
                  <FaSearch className="faculty-search-icon" />

                  <input
                    type="text"
                    placeholder="विषय खोजें..."
                    value={searchTerm}
                    onChange={(e) =>
                      setSearchTerm(e.target.value)
                    }
                  />
                </div>

                {/* FILTER */}

                <div className="faculty-filter-wrapper">
                  <h4 className="faculty-filter-title">
                    विषय
                  </h4>

                  <div className="faculty-filter-list">
                    {subjects.map((item) => (
                      <button
                        key={item.id}
                        className={`faculty-filter-btn ${
                          currentPage === item.page
                            ? "active"
                            : ""
                        }`}
                        onClick={() =>
                          handlePageChange(item.page)
                        }
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* HELP */}

              <div className="faculty-help-box">
                <h3>संपर्क सहायता</h3>

                <p>
                  विषय एवं शिक्षकों से संबंधित जानकारी
                  प्राप्त करें।
                </p>

                <button>संपर्क करें</button>
              </div>
            </aside>

            {/* RIGHT */}

            <div className="faculty-right-area">
              <div className="faculty-right-top">
                <h2>फैकल्टी सदस्य</h2>

                <span>
                  {filteredFaculty.length} शिक्षक उपलब्ध
                </span>
              </div>

              {/* SCROLL AREA */}

              <div className="faculty-scroll-area">
                <div className="faculty-grid">
                  {filteredFaculty.map((faculty) => (
                    <div
                      className="faculty-card"
                      key={faculty.id}
                    >
                      <div className="faculty-card-image">
                        <img
                          src={faculty.image}
                          alt={faculty.name}
                        />
                      </div>

                      <div className="faculty-card-content">
                        <span className="faculty-subject-badge">
                          {faculty.subject}
                        </span>

                        <h3 className="faculty-card-name">
                          {faculty.name}
                        </h3>

                        <h4 className="faculty-card-role">
                          {faculty.designation}
                        </h4>

                        <p className="faculty-card-qualification">
                          {faculty.qualification}
                        </p>

                        {/* <div className="faculty-card-email">
                          <FaEnvelope />

                          <span>{faculty.email}</span>
                        </div> */}

                        {/* <button className="faculty-profile-btn">
                          VIEW PROFILE
                        </button> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PAGINATION */}

              <div className="faculty-pagination">
                <button
                  onClick={() =>
                    currentPage > 1 &&
                    setCurrentPage(currentPage - 1)
                  }
                >
                  <FaChevronLeft />
                </button>

                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={
                      currentPage === page
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      setCurrentPage(page)
                    }
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() =>
                    currentPage < 5 &&
                    setCurrentPage(currentPage + 1)
                  }
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Faculty;