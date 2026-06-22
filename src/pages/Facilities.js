import React from "react";
import TopBanner from "../components/TopBanner"
import { FaCheckCircle } from "react-icons/fa";
import "./Facilities.css";

const Facilities = () => {
  const facilities = [
    "कक्षाओं प्रयोगशालाओं एवं अन्य शैक्षणिक भवनों का नियमित रखरखाव ।",
    "स्वच्छता एवं स्वच्छ परिसर सुनिश्चित करना।",
    "विद्युत जल आपूर्ति एवं पावर बैकअप प्रणाली का रखरखाव ।",
    "आरओ वाटर कूलर एवं अन्य पेयजल सुविधा ।",
    "सुरक्षा एवं निगरानी प्रणाली का सुचारू संचालन ।",
    "मरम्मत एवं अनुरक्षण कार्यों की व्यवस्था ।",
    "बाजार से आधे दामों पर महाविद्यालय की छात्राओं को चित्रकला विभाग से पुरानी कैनवास का विक्रय ।",
    "छात्राओं के लिए शिकायत निवारण प्रकोष्ठ ।",
  ];

  return (
<>
        <TopBanner
            title="Facilities"
            currentPage="Facilities"
             backgroundImage="/images/kmv-bly7.png"
          />
    <section className="maintenance-section">
      <div className="container">
        <h2 className="maintenance-heading">
          परिसर सुविधाओं में रखरखाव एवं छात्राओं की सुविधा
        </h2>

        <p className="maintenance-intro">
          कन्या महाविद्यालय आर्य समाज भूड़ बरेली में शैक्षणिक, प्रशासनिक एवं
          सहायक सुविधाओं का नियमित एवं प्रभावी रखरखाव किया जाता है। इसके अंतर्गत
          निम्नलिखित गतिविधियाँ सम्मिलित हैं।
        </p>

        <div className="maintenance-box">
          {facilities.map((item, index) => (
            <div className="maintenance-item" key={index}>
              <FaCheckCircle className="maintenance-icon" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Facilities;