import React from "react";
import {
  FaUserTie,
  FaGraduationCap,
  FaBookOpen,
  FaUniversity,
} from "react-icons/fa";


import TopBanner from "../components/TopBanner";
import "./Faculty.css";


/* =========================
   GOVERNING COUNCIL
========================= */


const governingCouncil = [
  {
    name: "श्री शिवकुमार बरतरिया",
    role: "अध्यक्ष",
  },


  {
    name: "श्री रामगोपाल मिश्रा",
    role: "उपाध्यक्ष",
  },


  {
    name: "श्री योगेश सक्सेना",
    role: "सचिव",
  },


  {
    name: "श्री सत्येन्द्र कुमार सक्सेना",
    role: "उपसचिव",
  },


  {
    name: "श्री विशाल कुमार सक्सेना",
    role: "कोषाध्यक्ष",
  },


  {
    name: "श्री रविन्द्र वर्मा",
    role: "सदस्य",
  },


  {
    name: "श्री विशाल सक्सेना",
    role: "सदस्य",
  },


  {
    name: "श्री राकेश कुमार सक्सेना",
    role: "सदस्य",
  },


  {
    name: "श्री शिशुपाल गिरि गोस्वामी",
    role: "सदस्य",
  },


  {
    name: "श्री राजेन्द्र कुमार सक्सेना",
    role: "सदस्य",
  },


  {
    name: "डॉ० चन्द्रभान सक्सेना",
    role: "पदेन सदस्य",
  },


  {
    name: "प्राचार्या, कन्या महाविद्यालय",
    role: "पदेन सदस्या",
  },


  {
    name: "प्रधानाचार्या, इण्टर सेक्शन",
    role: "पदेन सदस्या",
  },
];


/* =========================
   MANAGEMENT COMMITTEE
========================= */


const managementCommittee = [
  {
    name: "श्री शिवकुमार बरतरिया",
    role: "अध्यक्ष",
  },


  {
    name: "श्री महेश कुमार शर्मा",
    role: "उपाध्यक्ष",
  },


  {
    name: "श्री विशन चन्द्र सक्सेना",
    role: "उपाध्यक्ष",
  },


  {
    name: "श्री अभयपाल सिंह",
    role: "नि. सचिव",
  },


  {
    name: "श्री संजय वीरेश",
    role: "उप सचिव",
  },


  {
    name: "श्रीमती मीनाक्षी बरतरिया",
    role: "उप सचिव",
  },


  {
    name: "श्री रमेश चन्द्र गुप्त",
    role: "सदस्य",
  },


  {
    name: "श्री अनिलेश कुमार",
    role: "सदस्य",
  },


  {
    name: "श्री आदित्य कुमार सक्सेना",
    role: "सदस्य",
  },


  {
    name: "श्रीमती शिल्पी चौधरी",
    role: "सदस्या",
  },


  {
    name: "श्रीमती ऊषा सक्सेना",
    role: "सदस्या",
  },


  {
    name: "पद रिक्त (मृत्योपरान्त)",
    role: "सदस्य",
  },


  {
    name: "पद रिक्त (मृत्योपरान्त)",
    role: "सदस्य",
  },


  {
    name: "पद रिक्त (मृत्योपरान्त)",
    role: "सदस्य",
  },


  {
    name: "डॉ० अनुराधा आर्य",
    role: "कार्य. प्राचार्या",
  },


  {
    name: "डॉ० सविता उपाध्याय",
    role: "शिक्षिका सदस्या",
  },


  {
    name: "डॉ० रेनू उपाध्याय",
    role: "शिक्षिका सदस्या",
  },


  {
    name: "डॉ० मुक्तामणि मिश्रा",
    role: "शिक्षिका सदस्या",
  },


  {
    name: "डॉ० कुमुद प्रभाकर",
    role: "शिक्षिका सदस्या",
  },


  {
    name: "श्री दिव्यांशु चौहान",
    role: "गैर शिक्षक कर्मचारी सदस्य",
  },
];


/* =========================
   DEPARTMENT STAFF
========================= */


const departmentData = [


  {
    department: "हिन्दी विभाग",


    staff: [
      {
        name: "डॉ० सविता उपाध्याय",
        qualification: "एम० ए० हिन्दी, पीएच० डी०",
        designation: "एसो० प्रो० एवं प्रभारी, हिन्दी विभाग",
      },


      {
        name: "डॉ० रेनू उपाध्याय",
        qualification: "एम० ए० हिन्दी, समाज शास्त्र, पीएच.डी.",
        designation: "एसो० प्रो०, हिन्दी विभाग",
      },
    ],
  },


  {
    department: "गृहविज्ञान विभाग",


    staff: [
      {
        name: "डॉ० परिधि सक्सेना",
        qualification: "एम० ए० गृहविज्ञान, पीएच० डी०",
        designation: "स्ववित्तपोषित योजनान्तर्गत प्रवक्ता",
      },


      {
        name: "पद रिक्त",
        qualification: "",
        designation: "",
      },
    ],
  },


  {
    department: "शिक्षाशास्त्र विभाग",


    staff: [
      {
        name: "डॉ० शुचि श्रीवास्तव",
        qualification: "एम० ए० शिक्षाशास्त्र, पीएच० डी०",
        designation: "स्ववित्तपोषित योजनान्तर्गत प्रवक्ता",
      },


      {
        name: "पद रिक्त",
        qualification: "",
        designation: "",
      },
    ],
  },


  {
    department: "इतिहास विभाग",


    staff: [
      {
        name: "पद रिक्त",
        qualification: "",
        designation: "",
      },
    ],
  },


  {
    department: "विषयवार स्टाफ विवरण",


    staff: [
      {
        name: "डॉ० कुमुद प्रभाकर",
        qualification: "एम० ए० राजनीति शास्त्र, नेट, पीएच० डी०",
        designation: "एसो.प्रो., राजनीति शास्त्र",
      },


      {
        name: "डॉ० सुषमा चौरसिया",
        qualification: "एम० ए० समाजशास्त्र, नेट, पीएच० डी०",
        designation: "एसो.प्रो., समाजशास्त्र",
      },


      {
        name: "डॉ० गीता पाराशर",
        qualification: "एम० पी० एड०, नेट, पीएच.डी.",
        designation: "असि० प्रो० ग्रेड II, शारीरिक शिक्षा",
      },


      {
        name: "डॉ० रीता मौर्या",
        qualification: "एम.ए. समाजशास्त्र, एम.फिल. पीएच० डी०",
        designation: "असि० प्रो० ग्रेड II, समाजशास्त्र",
      },


      {
        name: "डॉ० अनीता भारद्वाज",
        qualification: "एम० ए० अर्थशास्त्र, पीएच० डी०",
        designation: "असि० प्रो०, अर्थशास्त्र",
      },


      {
        name: "डॉ० स्वाति आनन्द",
        qualification: "एम० ए० अर्थशास्त्र, नेट",
        designation: "असि० प्रो०, अर्थशास्त्र",
      },


      {
        name: "डॉ० अनीता वर्मा",
        qualification: "एम० ए० हिन्दी, नेट",
        designation: "असि० प्रो०, हिन्दी",
      },


      {
        name: "श्रीमती निधि सोनकर",
        qualification: "एम० ए० राजनीतिशास्त्र, नेट",
        designation: "असि० प्रो०, राजनीति शास्त्र",
      },


      {
        name: "डॉ० विनीता सिंह",
        qualification: "एम० ए० समाजशास्त्र, नेट",
        designation: "असि० प्रो०, समाजशास्त्र",
      },


      {
        name: "पद रिक्त",
        qualification: "संस्कृत",
        designation: "",
      },
    ],
  },


  {
    department: "पुस्तकालय स्टाफ",


    staff: [
      {
        name: "पुस्तकालयाध्यक्ष",
        qualification: "",
        designation: "पद रिक्त",
      },


      {
        name: "श्री कमल किशोर तिवारी",
        qualification: "बी० कॉम०",
        designation: "पुस्तकालय लिपिक",
      },
    ],
  },


  {
    department: "कार्यालय स्टाफ",


    staff: [
      {
        name: "डॉ० विकास सक्सेना",
        qualification:
          "एम० ए० अर्थशास्त्र, समाजशास्त्र, डिप्लोमा आशुलिपि (हिन्दी), पीएच० डी०",
        designation: "आशुलिपिक (हिन्दी)",
      },


      {
        name: "श्री दिव्यांशु चौहान",
        qualification: "बी० कॉम०",
        designation: "नैतिक लिपिक",
      },


      {
        name: "पद रिक्त",
        qualification: "",
        designation: "कार्यालय अधीक्षक, ग्रेड-2",
      },


      {
        name: "पद रिक्त",
        qualification: "",
        designation: "सहायक लेखाकार",
      },
    ],
  },


  {
    department: "संगीतकार / प्रयोगशाला सहायक",


    staff: [
      {
        name: "डॉ० मीरू दुसेजा",
        qualification: "एम० ए० चित्ररंजन कला, पीएच० डी०",
        designation: "प्रयोगशाला सहायक, चित्ररंजन कला विभाग",
      },


      {
        name: "पद रिक्त (तबला संगीतकार)",
        qualification: "",
        designation: "संगीत विभाग",
      },
    ],
  },
];


const Faculty = () => {
  return (
    <section className="faculty">


      {/* HERO */}


  <TopBanner
        title="Faculty"
        currentPage="Faculty"
        backgroundImage="/images/kmv-banner1.jpeg"
      />



      <div className="container">


        {/* TOP */}


        <div className="faculty-top">


          <span className="faculty-subtitle">
            अनुभवी शिक्षण एवं प्रबंधन टीम
          </span>


          <h2 className="faculty-heading">
            महाविद्यालय समिति एवं शिक्षण स्टाफ
          </h2>


          <p className="faculty-text">
            कन्या महाविद्यालय में अनुभवी शिक्षकों एवं प्रबंधन
            समिति के मार्गदर्शन में छात्राओं को गुणवत्तापूर्ण
            शिक्षा एवं श्रेष्ठ शैक्षिक वातावरण प्रदान किया जाता है।
          </p>


        </div>


        {/* GOVERNING COUNCIL */}


        <div className="faculty-main-section">


          <div className="faculty-title-row">


            <div className="faculty-title-icon">
              <FaUniversity />
            </div>


            <div>


              <h2 className="faculty-section-heading">
                समिति संचालन परिषद
              </h2>


              <p className="faculty-section-subtext">
                सत्र 2025-26 के अनुसार समिति संचालन परिषद
              </p>


            </div>


          </div>


          <div className="faculty-management-wrapper">


            {governingCouncil.map((item, index) => (


              <div
                className="faculty-management-card"
                key={index}
              >


                {/* <div className="faculty-management-icon">
                  <FaUserTie />
                </div> */}


                <div>


                  <h3 className="faculty-management-name">
                    {item.name}
                  </h3>


                  <span className="faculty-management-role">
                    {item.role}
                  </span>


                </div>


              </div>


            ))}


          </div>


        </div>


        {/* MANAGEMENT COMMITTEE */}


        <div className="faculty-main-section">


          <div className="faculty-title-row">


            <div className="faculty-title-icon">
              <FaBookOpen />
            </div>


            <div>


              <h2 className="faculty-section-heading">
                प्रबन्ध समिति सदस्यगण
              </h2>


              <p className="faculty-section-subtext">
                Members of the Management Committee
              </p>


            </div>


          </div>


          <div className="faculty-management-wrapper">


            {managementCommittee.map((item, index) => (


              <div
                className="faculty-management-card"
                key={index}
              >


                {/* <div className="faculty-management-icon">
                  <FaUserTie />
                </div> */}


                <div>


                  <h3 className="faculty-management-name">
                    {item.name}
                  </h3>


                  <span className="faculty-management-role">
                    {item.role}
                  </span>


                </div>


              </div>


            ))}


          </div>


        </div>


        {/* DEPARTMENT WISE STAFF */}


        {departmentData.map((dept, index) => (


          <div
            className="faculty-department-section"
            key={index}
          >


            {/* TITLE */}


            <div className="faculty-department-top">


              <div className="faculty-title-icon">
                <FaGraduationCap />
              </div>


              <div>


                <h2 className="faculty-department-heading">
                  {dept.department}
                </h2>


              </div>


            </div>


            {/* STAFF */}


            <div className="faculty-staff-list">


              {dept.staff.map((staff, idx) => (


                <div
                  className="faculty-staff-row"
                  key={idx}
                >


                  {/* LEFT */}


                  <div className="faculty-staff-left">


                    {/* <div className="faculty-staff-icon">
                      <FaGraduationCap />
                    </div> */}


                    <div>


                      <h3 className="faculty-staff-name">
                        {staff.name}
                      </h3>


                      {staff.qualification && (


                        <p className="faculty-staff-qualification">
                          {staff.qualification}
                        </p>


                      )}


                    </div>


                  </div>


                  {/* RIGHT */}


                  {staff.designation && (


                    <div className="faculty-staff-right">


                      <span className="faculty-staff-designation">
                        {staff.designation}
                      </span>


                    </div>


                  )}


                </div>


              ))}


            </div>


          </div>


        ))}


      </div>


    </section>
  );
};


export default Faculty;