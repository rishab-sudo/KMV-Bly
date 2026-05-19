import React from "react";
import Slider from "react-slick";
import "./HomeGallery.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeGallery = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
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

  const galleryImages = [
    require("../assets/kmv-banner1.jpeg"),
    require("../assets/kmv-banner2.jpeg"),
    require("../assets/kmv-banner3.jpeg"),
    require("../assets/kmv-banner4.jpeg"),
    require("../assets/kmv-banner5.jpeg"),
    require("../assets/kmv-banner6.jpeg"),
  ];

  return (
    <section className="home-gallery">

      <div className="container">

        {/* HEADING */}
        <div className="home-gallery-top">

          <h2 className="home-gallery-heading">
            Our Gallery
          </h2>

          <p className="home-gallery-text">
            Explore memorable moments, campus life,
            academic activities and events at KMV College.
          </p>

        </div>

        {/* SLIDER */}
        <Slider {...settings}>

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