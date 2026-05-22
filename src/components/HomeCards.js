import React from "react";
import {
  FaBookOpen,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";

import "./HomeCards.css";

const HomeCards = () => {

  /* =========================
     CARDS DATA
  ========================= */

 const cardsData = [

  {
    icon: <FaBookOpen />,
    heading: "गुणवत्तापूर्ण शिक्षा",
    description:
      "हम आधुनिक, व्यावहारिक एवं करियर-केंद्रित शिक्षा प्रदान करते हैं, जो छात्राओं को ज्ञान, आत्मविश्वास और व्यावसायिक कौशल विकसित करने में सहायता करती है।",
  },

  {
    icon: <FaGraduationCap />,
    heading: "अनुभवी शिक्षण स्टाफ",
    description:
      "हमारे अनुभवी शिक्षक नवीन शिक्षण पद्धतियों, मार्गदर्शन और शैक्षिक उत्कृष्टता के माध्यम से छात्राओं को बेहतर शिक्षा प्रदान करते हैं।",
  },

  {
    icon: <FaUsers />,
    heading: "छात्रा विकास",
    description:
      "हम छात्राओं के व्यक्तित्व विकास, नेतृत्व क्षमता, रचनात्मकता तथा सह-पाठ्यक्रम गतिविधियों के माध्यम से उनके सर्वांगीण विकास पर विशेष ध्यान देते हैं।",
  },

];

  return (
    <section className="homecards">

      <div className="container">

        <div className="homecards-wrapper">

          {cardsData.map((card, index) => (

            <div
              className="homecards-col"
              key={index}
            >

              {/* ICON */}

              <div className="homecards-icon">

                {card.icon}

              </div>

              {/* CONTENT */}

              <div className="homecards-content">

                {/* HEADING */}

                <h3 className="homecards-heading">
                  {card.heading}
                </h3>

                {/* DESCRIPTION */}

                <p className="homecards-description">
                  {card.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default HomeCards;