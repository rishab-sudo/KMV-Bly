import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./HomeBanner.css";

/* IMAGES */
import banner1 from "../assets/kmv-banner1.jpeg";
import banner2 from "../assets/kmv-banner2.jpeg";
import banner3 from "../assets/kmv-banner3.jpeg";

const HomeBanner = () => {
  return (
    <section className="homebanner">

      <Carousel slide indicators={false} pause={false}>

        {/* SLIDE 1 */}
        <Carousel.Item interval={3000}>
          <div className="homebanner-image-wrapper">

            <img
              className="homebanner-image"
              src={banner1}
              alt="banner"
            />

            <div className="homebanner-overlay"></div>

            <div className="homebanner-content">
     <span className="homebanner-subtitle">
  कन्या महाविद्यालय में आपका स्वागत है
</span>

<h1>
  गुणवत्तापूर्ण शिक्षा से छात्राओं का सशक्तिकरण
</h1>

<p>
  हमारा महाविद्यालय छात्राओं को उत्कृष्ट शिक्षा,
  अनुशासन, संस्कार एवं आधुनिक शिक्षण वातावरण प्रदान
  कर उज्ज्वल भविष्य की ओर अग्रसर करता है।
</p>


              <div className="homebanner-buttons">
                <a href="/courses" className="banner-btn banner-btn-fill">
                  पाठ्यक्रम देखें
                </a>

                <a href="/admission" className="banner-btn banner-btn-outline">
                  प्रवेश लें
                </a>
              </div>
            </div>

          </div>
        </Carousel.Item>

        {/* SLIDE 2 */}
        <Carousel.Item interval={3000}>
          <div className="homebanner-image-wrapper">

            <img
              className="homebanner-image"
              src={banner2}
              alt="banner"
            />

            <div className="homebanner-overlay"></div>

            <div className="homebanner-content">
              <span className="homebanner-subtitle">
  उज्ज्वल भविष्य की ओर एक नया कदम
</span>

<h1>
  शिक्षा, अनुशासन एवं छात्राओं का विकास
</h1>

<p>
  अनुभवी शिक्षकों, श्रेष्ठ शैक्षिक वातावरण एवं सांस्कृतिक
  गतिविधियों के माध्यम से छात्राओं के सर्वांगीण विकास
  एवं उज्ज्वल भविष्य पर विशेष ध्यान दिया जाता है।
</p>


              <div className="homebanner-buttons">
                <a href="/courses" className="banner-btn banner-btn-fill">
                  पाठ्यक्रम देखें
                </a>

                <a href="/admission" className="banner-btn banner-btn-outline">
                  प्रवेश लें
                </a>
              </div>
            </div>

          </div>
        </Carousel.Item>

        {/* SLIDE 3 */}
        <Carousel.Item interval={3000}>
          <div className="homebanner-image-wrapper">

            <img
              className="homebanner-image"
              src={banner3}
              alt="banner"
            />

            <div className="homebanner-overlay"></div>

            <div className="homebanner-content">
             <span className="homebanner-subtitle">
  प्रवेश प्रारम्भ सत्र 2026-27
</span>

<h1>
  उत्कृष्ट शिक्षा एवं संस्कारों का श्रेष्ठ केंद्र
</h1>

<p>
  कन्या महाविद्यालय के साथ अपनी शैक्षिक यात्रा प्रारम्भ
  करें और ज्ञान, आत्मविश्वास एवं सफलता के नए अवसरों
  के साथ उज्ज्वल भविष्य की ओर आगे बढ़ें।
</p>

              <div className="homebanner-buttons">
                <a href="/courses" className="banner-btn banner-btn-fill">
                  पाठ्यक्रम देखें
                </a>

                <a href="/admission" className="banner-btn banner-btn-outline">
                  प्रवेश लें
                </a>
              </div>
            </div>

          </div>
        </Carousel.Item>

      </Carousel>

    </section>
  );
};

export default HomeBanner;