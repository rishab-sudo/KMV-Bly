import React, { useRef } from "react";
import Slider from "react-slick";
import "./HomeGallery.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeGallery = () => {
  const sliderRef = useRef(null);

  const galleryImages = [
    require("../assets/banner/kmv-img1.png"),
    require("../assets/banner/kmv-img2.png"),
    require("../assets/banner/kmv-bly4.png"),
    require("../assets/banner/kmv-bly5.png"),
    require("../assets/banner/kmv-bly6.png"),
    require("../assets/banner/kmv-bly7.png"),
    require("../assets/banner/kmv-bly8.png"),
    require("../assets/banner/kmv-bly9.png"),
    require("../assets/banner/kmv-img10.png"),
    require("../assets/banner/kmv-img11.png"),
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    lazyLoad: "ondemand",

    afterChange: (current) => {
      const slidesVisible =
        window.innerWidth < 768
          ? 1
          : window.innerWidth < 992
          ? 2
          : 3;

      const lastSlideIndex = galleryImages.length - slidesVisible;

      if (current >= lastSlideIndex) {
        setTimeout(() => {
          sliderRef.current?.slickGoTo(0);
        }, 2500);
      }
    },

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="home-gallery">
      <div className="container">
        {/* HEADING */}
        <div className="home-gallery-top">
          <h2 className="home-gallery-heading">
            Our Gallery
          </h2>

          <p className="home-gallery-text">
            केएमवी कॉलेज के यादगार पलों, परिसर जीवन, शैक्षणिक गतिविधियों एवं
            विभिन्न कार्यक्रमों को जानें।
          </p>
        </div>

        {/* SLIDER */}
        <Slider ref={sliderRef} {...settings}>
          {galleryImages.map((image, index) => (
            <div
              className="home-gallery-slide"
              key={index}
            >
              <div className="home-gallery-item">
                <img
                  src={image}
                  alt={`gallery-${index}`}
                  className="home-gallery-image"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HomeGallery;