import React from "react";
import TopBanner from "../components/TopBanner";
import {
  FaGraduationCap,
  FaFileAlt,
  FaUniversity,
  FaCheckCircle,
  FaIdCard,
  FaCamera,
  FaFileInvoice,
  FaClipboardList,
  FaCertificate,
  FaUserGraduate,
  FaAddressCard,
  FaAward,
} from "react-icons/fa";


import "./Admission.css";


const documents = [
  "विश्वविद्यालय रजिस्ट्रेशन फॉर्म की मूल प्रति",
  "आवेदन पत्र एवं परिचय-पत्र",
  "तीन वर्तमान पासपोर्ट साइज फोटो",
  "गत परीक्षा की अंकतालिका",
  "स्थायी निवास प्रमाण-पत्र",
  "स्थानान्तरण एवं चरित्र प्रमाण-पत्र",
  "हाईस्कूल अंकपत्र की छायाप्रति",
  "आधार कार्ड की छायाप्रति",
  "आय प्रमाण-पत्र",
  "आरक्षण सम्बन्धी प्रमाण-पत्र",
];


const fees = [
  {
    title: "बी० ए० गृहविज्ञान",
    amount: "₹1,250",
  },


  {
    title: "बी० ए० शिक्षाशास्त्र",
    amount: "₹1,250",
  },


  {
    title: "एम० ए० अंग्रेजी",
    amount: "₹6,000",
  },


  {
    title: "एम० ए० हिन्दी",
    amount: "₹6,000",
  },


  {
    title: "एम० ए० चित्ररंजन कला",
    amount: "₹6,000",
  },


  {
    title: "एम० ए० संगीत वादन",
    amount: "₹6,000",
  },
];


const Admission = () => {
  return (
    <section className="admission">


      {/* HERO */}
      <TopBanner
        title="Admission"
        currentPage="Admission"
        backgroundImage="/images/kmv-banner1.jpeg"
      />



      <div className="container">


        {/* TOP */}


        <div className="admission-top">


          <span className="admission-subtitle">
            प्रवेश प्रक्रिया 2026-27
          </span>


          <h2 className="admission-heading">
            प्रवेश नियम एवं महत्वपूर्ण जानकारी
          </h2>


          <p className="admission-text">
            महाविद्यालय में प्रवेश विश्वविद्यालय एवं शासन द्वारा
            निर्धारित नियमों के अनुसार योग्यता एवं उत्तम आचरण
            के आधार पर प्रदान किया जायेगा।
          </p>


        </div>


        {/* RULES */}


        <div className="admission-wrapper">


          {/* CARD */}

          {/* CARD */}

          <div className="admission-card">

            <div className="admission-card-top">

              <div className="admission-icon">
                <FaUniversity />
              </div>

              <h3 className="admission-card-heading">
                बी० ए० प्रवेश नियम
              </h3>

            </div>

            <div className="admission-rule-list">

              <div className="admission-rule-item">
                <div className="admission-rule-check">
                  <FaCheckCircle />
                </div>

                <p>
                  इण्टरमीडिएट अथवा समकक्ष परीक्षा उत्तीर्ण होना आवश्यक है।
                </p>
              </div>

              <div className="admission-rule-item">
                <div className="admission-rule-check">
                  <FaCheckCircle />
                </div>

                <p>
                  न्यूनतम 40% अंक प्राप्त करने वाली छात्राओं को ही प्रवेश मिलेगा।
                </p>
              </div>

              <div className="admission-rule-item">
                <div className="admission-rule-check">
                  <FaCheckCircle />
                </div>

                <p>
                  आरक्षित वर्ग को शासनादेशानुसार नियमानुसार छूट प्रदान की जायेगी।
                </p>
              </div>

              <div className="admission-rule-item">
                <div className="admission-rule-check">
                  <FaCheckCircle />
                </div>

                <p>
                  प्रवेश मेरिट एवं सीट उपलब्धता के आधार पर होगा।
                </p>
              </div>

            </div>

          </div>



          <div className="admission-card">

            <div className="admission-card-top">

              <div className="admission-icon">
                <FaGraduationCap />
              </div>

              <h3 className="admission-card-heading">
                एम० ए० प्रवेश नियम
              </h3>

            </div>

            <div className="admission-rule-list">

              <div className="admission-rule-item">
                <div className="admission-rule-check">
                  <FaCheckCircle />
                </div>

                <p>
                  स्नातक परीक्षा में न्यूनतम 45% अंक आवश्यक हैं।
                </p>
              </div>

              <div className="admission-rule-item">
                <div className="admission-rule-check">
                  <FaCheckCircle />
                </div>

                <p>
                  अनुसूचित जाति एवं जनजाति वर्ग को 5% छूट प्रदान की जायेगी।
                </p>
              </div>

              <div className="admission-rule-item">
                <div className="admission-rule-check">
                  <FaCheckCircle />
                </div>

                <p>
                  विषय अनुसार सीटों की उपलब्धता के आधार पर प्रवेश होगा।
                </p>
              </div>

              <div className="admission-rule-item">
                <div className="admission-rule-check">
                  <FaCheckCircle />
                </div>

                <p>
                  विश्वविद्यालय नियमों के अनुसार प्रवेश प्रक्रिया पूर्ण होगी।
                </p>
              </div>

            </div>

          </div>


        </div>


        {/* DOCUMENTS */}


        <div className="admission-documents">


          <div className="admission-section-top">


            <span className="admission-subtitle">
              आवश्यक दस्तावेज
            </span>


            <h2 className="admission-section-heading">
              प्रवेश के समय जमा किये जाने वाले दस्तावेज
            </h2>


          </div>


          <div className="admission-documents-wrapper">


            {documents.map((doc, index) => (

              <div
                className="admission-document-item"
                key={index}
              >

                <div className="admission-document-icon">

                  {index === 0 && <FaClipboardList />}

                  {index === 1 && <FaIdCard />}

                  {index === 2 && <FaCamera />}

                  {index === 3 && <FaFileInvoice />}

                  {index === 4 && <FaAddressCard />}

                  {index === 5 && <FaCertificate />}

                  {index === 6 && <FaUserGraduate />}

                  {index === 7 && <FaIdCard />}

                  {index === 8 && <FaFileAlt />}

                  {index === 9 && <FaAward />}

                </div>

                <p className="admission-document-text">
                  {doc}
                </p>

              </div>

            ))}

          </div>

        </div>

   {/* FEES */}
    
      <div className="admission-fees">


          <div className="admission-section-top">


            <span className="admission-subtitle">
              शुल्क विवरण
            </span>


            <h2 className="admission-section-heading">
              स्ववित्तपोषित पाठ्यक्रम शुल्क
            </h2>


          </div>


          {/* HEADER */}
          <div className="admission-fee-header">


            <div className="admission-fee-head">
              पाठ्यक्रम
            </div>


            <div className="admission-fee-head">
              वार्षिक शुल्क
            </div>


          </div>


          {/* ROWS */}

         <div className="admission-fee-rows">


            {fees.map((fee, index) => (


              <div
                className="admission-fee-row"
                key={index}
              >


                {/* LEFT */}


                <div className="admission-fee-left">


                  <div className="admission-fee-icon">
                    <FaCheckCircle />
                  </div>


                  <h3 className="admission-fee-title">
                    {fee.title}
                  </h3>


                </div>


                {/* RIGHT */}


                <div className="admission-fee-right">


                  <h4 className="admission-fee-amount">
                    {fee.amount}
                  </h4>


                </div>

              </div>
))}

          </div>
 </div>

 {/* IMPORTANT */}


        <div className="admission-important">


          <h2 className="admission-important-heading">
            महत्वपूर्ण निर्देश
          </h2>


          <ul className="admission-important-list">


            <li>
              केवल वही छात्रायें परीक्षा में सम्मिलित होने की
              अधिकारी होंगी जिनकी उपस्थिति न्यूनतम 75% होगी।
            </li>


            <li>
              15 अगस्त, 2 अक्टूबर एवं 26 जनवरी को महाविद्यालय
              में उपस्थिति अनिवार्य है।
            </li>


            <li>
              प्रवेश के समय गलत जानकारी प्रस्तुत करने पर
              प्रवेश निरस्त कर दिया जायेगा।
            </li>


            <li>
              प्रवेश विश्वविद्यालय एवं शासन की नियमावली के
              अनुसार ही मान्य होगा।
            </li>


          </ul>


        </div>


      </div>


    </section>
  );
};


export default Admission;
