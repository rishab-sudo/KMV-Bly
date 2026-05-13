import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes
} from "react-icons/fa";

import "./Gallery.css";

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
    ],
  },

  {
    heading: "Academic Activities",
    description:
      "Highlights of seminars, classrooms, workshops and laboratory sessions.",

    images: [
      require("../assets//kmv-banner5.jpeg"),
      require("../assets/kmv-banner6.jpeg"),
      require("../assets/kmv-banner7.jpeg"),
      require("../assets/kmv-banner8.jpeg"),
    ],
  },
];

const Gallery = () => {

  const [popup, setPopup] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allImages, setAllImages] = useState([]);

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

  return (
    <section className="gallery">

      {/* HERO */}
      <div className="gallery-hero">

        <div className="gallery-overlay"></div>

        <div className="container">

          <div className="gallery-hero-content">

            <h1 className="gallery-hero-heading">
              Gallery
            </h1>

            <p className="gallery-hero-text">
              Home / Gallery
            </p>

          </div>

        </div>

      </div>

      <div className="container">

        {/* LOOP */}
        {gallerySections.map((section, sectionIndex) => (

          <div
            className="gallery-section"
            key={sectionIndex}
          >

            {/* HEADING */}
            <div className="gallery-top">

              <h2 className="gallery-heading">
                {section.heading}
              </h2>

              <p className="gallery-description">
                {section.description}
              </p>

            </div>

            {/* IMAGES */}
            <div className="gallery-wrapper">

              {section.images.map((image, index) => (

                <div
                  className="gallery-card"
                  key={index}
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

              ))}

            </div>

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