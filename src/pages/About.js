import React from "react";
import TopBanner from "../components/TopBanner";
import {
  FaUniversity,
  FaBookReader,
  FaGraduationCap,
  FaFemale,
  FaBullseye,
  FaEye,
} from "react-icons/fa";
import "./About.css";

const About = () => {
  const features = [
    {
      icon: <FaFemale />,
      title: "महिला शिक्षा",
      text: "बरेली जिले का प्रथम महिला महाविद्यालय होने का गौरव प्राप्त।",
    },
    {
      icon: <FaGraduationCap />,
      title: "उच्च शिक्षा",
      text: "स्नातक एवं स्नातकोत्तर स्तर पर गुणवत्तापूर्ण शिक्षा।",
    },
    {
      icon: <FaBookReader />,
      title: "संस्कारयुक्त शिक्षा",
      text: "वैदिक संस्कृति एवं नैतिक मूल्यों पर आधारित शिक्षा।",
    },
    {
      icon: <FaUniversity />,
      title: "अनुभवी संस्था",
      text: "66 वर्षों से शिक्षा के क्षेत्र में उत्कृष्ट योगदान।",
    },
  ];

  return (
    <div className="about-page">
      <TopBanner
        title="About Us"
        currentPage="About Us"
        backgroundImage="/images/kmv-banner1.jpeg"
      />

      <section className="about-section">
        <div className="container">

          {/* ABOUT SECTION */}

          <div className="about-wrapper">

            <div className="about-content">

              <p className="about-tag">About College</p>

              <h2 className="about-heading">
                कन्या महाविद्यालय <span>आर्य समाज भूड़, बरेली</span>
              </h2>

              <p className="about-description">
                कन्या महाविद्यालय आर्य समाज भूड़ बरेली आज से 66 वर्ष पूर्व
                1960 में आर्य समाज द्वारा स्थापित संस्था है। स्थापना वर्ष में
                यह आगरा विश्वविद्यालय से एवं वर्ष 1975 से महात्मा ज्योतिबा फूले
                रोहिलखंड विश्वविद्यालय बरेली से स्थायी रूप से संबद्ध है।
              </p>

              <p className="about-description">
                यह उत्तर प्रदेश के बरेली जिले में स्थापित प्रथम महिला
                महाविद्यालय है जिसे कन्याओं की उच्च शिक्षा की दिशा में पहला कदम
                उठाने का गौरव प्राप्त है।
              </p>

              <p className="about-description">
                इस महाविद्यालय में कला और मानविकी में स्नातक एवं स्नातकोत्तर
                कार्यक्रम संचालित हैं। संस्था का मुख्य उद्देश्य छात्राओं को
                गुणवत्तापूर्ण शिक्षा प्रदान करना एवं उन्हें सामाजिक, नैतिक और
                सांस्कृतिक मूल्यों से जोड़ना है।
              </p>

            </div>

            <div className="about-image-wrapper">
              <img
                src="/images/kmv-banner1.jpeg"
                alt="College"
                className="about-image"
              />
            </div>

          </div>

          {/* MISSION VISION SINGLE ROW */}

          <div className="mission-vision-wrapper">

            {/* Mission */}

            <div className="mv-card">

              <div className="mv-icon">
                <FaBullseye />
              </div>

              <div>
                <h3>Mission</h3>

                <h2>आचारः परमो धर्मः</h2>

                <p>(धर्म आचरण ही सर्वोच्च धर्म है)</p>

                <span>
                  छात्राओं को गुणवत्तापूर्ण शिक्षा, नैतिक संस्कार एवं
                  आत्मनिर्भरता प्रदान करना।
                </span>
              </div>

            </div>

            {/* Vision */}

            <div className="mv-card">

              <div className="mv-icon">
                <FaEye />
              </div>

              <div>
                <h3>Vision</h3>

                <h2>श्रेष्ठ शिक्षा एवं संस्कार</h2>

                <p>
                  वैदिक संस्कृति, सामाजिक मूल्यों एवं आधुनिक शिक्षा के माध्यम से
                  छात्राओं को सशक्त बनाना।
                </p>

                <span>
                  राष्ट्र निर्माण में महिलाओं की सक्रिय भागीदारी सुनिश्चित करना।
                </span>
              </div>

            </div>

          </div>

          {/* FEATURES */}

          <div className="features-grid">

            {features.map((item, index) => (
              <div className="feature-card" key={index}>

                <div className="feature-icon">
                  {item.icon}
                </div>

                <h4>{item.title}</h4>

                <p>{item.text}</p>

              </div>
            ))}

          </div>

          {/* OBJECTIVES */}

          <div className="objective-box">

            <h2>संस्था के उद्देश्य</h2>

            <ul>
              <li>
                छात्राओं एवं छात्रों की शिक्षा हिन्दी भाषा के माध्यम से
                श्रेष्ठ प्रकार से संचालित करना।
              </li>

              <li>
                धार्मिक, सामाजिक एवं शारीरिक उन्नति करना।
              </li>

              <li>
                वैदिक संस्कृति एवं सभ्यता का प्रचार एवं प्रसार करना।
              </li>

              <li>
                संस्कृत भाषा का प्रचार एवं अन्य विद्यालयों का संचालन करना।
              </li>

              <li>
                धर्म एवं जाति के भेदभाव के बिना समान शिक्षा उपलब्ध कराना।
              </li>
            </ul>

          </div>

        </div>
      </section>
    </div>
  );
};

export default About;