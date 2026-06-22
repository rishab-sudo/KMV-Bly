import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./HomeBanner.css";

/* IMAGES */
import banner1 from "../assets/banner/kmv-bly9.png";
import banner2 from "../assets/banner/kmv-bly8.png";
import banner3 from "../assets/banner/kmv-img2.png";
import banner4 from "../assets/banner/kmv-img10.png";
import banner5 from "../assets/banner/kmv-img11.png";

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

        {/* SLIDE 4 */}
        <Carousel.Item interval={3000}>
          <div className="homebanner-image-wrapper">

            <img
              className="homebanner-image"
              src={banner4}
              alt="banner"
            />

            <div className="homebanner-overlay"></div>

            <div className="homebanner-content">
              <span className="homebanner-subtitle">
                आधुनिक सुविधाओं से युक्त परिसर
              </span>

              <h1>
                सुरक्षित एवं प्रेरणादायक शिक्षण वातावरण
              </h1>

              <p>
                स्मार्ट कक्षाओं, पुस्तकालय, प्रयोगशालाओं एवं
                स्वच्छ परिसर के माध्यम से छात्राओं को बेहतर
                शिक्षण अनुभव एवं आत्मविश्वासपूर्ण वातावरण प्रदान किया जाता है।
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

        {/* SLIDE 5 */}
        <Carousel.Item interval={3000}>
          <div className="homebanner-image-wrapper">

            <img
              className="homebanner-image"
              src={banner5}
              alt="banner"
            />

            <div className="homebanner-overlay"></div>

            <div className="homebanner-content">
              <span className="homebanner-subtitle">
                शिक्षा के साथ संस्कार एवं आत्मविश्वास
              </span>

              <h1>
                छात्राओं के उज्ज्वल भविष्य का मजबूत आधार
              </h1>

              <p>
                कन्या महाविद्यालय में शिक्षा के साथ नैतिक मूल्यों,
                सांस्कृतिक गतिविधियों एवं व्यक्तित्व विकास पर विशेष
                ध्यान देकर छात्राओं को सफलता हेतु तैयार किया जाता है।
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