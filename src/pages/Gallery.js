import React, { useState, useRef } from "react";
import Slider from "react-slick";
import TopBanner from "../components/TopBanner";

import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import "./Gallery.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const gallerySections = [
  {
    heading: "Campus Life",
    description:
      "Explore beautiful campus infrastructure and student life moments.",

    images: [
      require("../assets/kmv-banner1.jpeg"),
      require("../assets/kmv-banner2.jpeg"),
      require("../assets/kmv-banner3.jpeg"),
      require("../assets/kmv-banner4.jpeg"),
      require("../assets/kmv-banner1.jpeg"),
      require("../assets/kmv-banner2.jpeg"),
    ],
  },

  {
    heading: "Academic Activities",
    description:
      "Highlights of seminars, classrooms, workshops and laboratory sessions.",

    images: [
      require("../assets/kmv-banner5.jpeg"),
      require("../assets/kmv-banner6.jpeg"),
      require("../assets/kmv-banner7.jpeg"),
      require("../assets/kmv-banner8.jpeg"),
      require("../assets/kmv-banner5.jpeg"),
      require("../assets/kmv-banner6.jpeg"),
    ],
  },
];

const Gallery = () => {

  const [popup, setPopup] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allImages, setAllImages] = useState([]);

  const sliderRefs = useRef([]);

  /* OPEN POPUP */
  const openPopup = (images, index) => {
    setPopup(true);
    setAllImages(images);
    setCurrentImage(images[index]);
    setCurrentIndex(index);
  };

  /* NEXT IMAGE */
  const nextImage = () => {
    const newIndex =
      currentIndex === allImages.length - 1
        ? 0
        : currentIndex + 1;

    setCurrentIndex(newIndex);
    setCurrentImage(allImages[newIndex]);
  };

  /* PREVIOUS IMAGE */
  const prevImage = () => {
    const newIndex =
      currentIndex === 0
        ? allImages.length - 1
        : currentIndex - 1;

    setCurrentIndex(newIndex);
    setCurrentImage(allImages[newIndex]);
  };

  /* SLICK SETTINGS */
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 2200,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    cssEase: "ease-in-out",

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
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
    <section className="gallery">

      {/* HERO */}
      <TopBanner
        title="Gallery"
        currentPage="Gallery"
          backgroundImage="/images/kmv-bly9.png"
      />

      <div className="container">

        {/* LOOP */}
        {gallerySections.map((section, sectionIndex) => (

          <div
            className="gallery-section"
            key={sectionIndex}
          >

            {/* TOP */}
            <div className="gallery-top">

              <div className="gallery-top-left">

                <h2 className="gallery-heading">
                  {section.heading}
                </h2>

                <p className="gallery-description">
                  {section.description}
                </p>

              </div>

              {/* ARROWS */}
              <div className="gallery-slider-arrows">

                <button
                  className="gallery-slider-arrow"
                  onClick={() =>
                    sliderRefs.current[sectionIndex].slickPrev()
                  }
                >
                  <FaArrowLeft />
                </button>

                <button
                  className="gallery-slider-arrow"
                  onClick={() =>
                    sliderRefs.current[sectionIndex].slickNext()
                  }
                >
                  <FaArrowRight />
                </button>

              </div>

            </div>

            {/* SLIDER */}
            <Slider
              ref={(slider) =>
                (sliderRefs.current[sectionIndex] = slider)
              }
              {...settings}
            >

              {section.images.map((image, index) => (

                <div
                  className="gallery-slide"
                  key={index}
                >

                  <div
                    className="gallery-card"
                    onClick={() =>
                      openPopup(section.images, index)
                    }
                  >

                    <img
                      src={image}
                      alt="gallery"
                      className="gallery-image"
                    />

                  </div>

                </div>

              ))}

            </Slider>

          </div>

        ))}

      </div>

      {/* POPUP */}
      {popup && (

        <div className="gallery-popup">

          {/* CLOSE */}
          <button
            className="gallery-close"
            onClick={() => setPopup(false)}
          >
            <FaTimes />
          </button>

          {/* LEFT */}
          <button
            className="gallery-arrow gallery-left"
            onClick={prevImage}
          >
            <FaChevronLeft />
          </button>

          {/* IMAGE */}
          <img
            src={currentImage}
            alt="popup"
            className="gallery-popup-image"
          />

          {/* RIGHT */}
          <button
            className="gallery-arrow gallery-right"
            onClick={nextImage}
          >
            <FaChevronRight />
          </button>

        </div>

      )}

    </section>
  );
};

export default Gallery;