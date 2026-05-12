import React from "react";
import Marquee from "react-fast-marquee";
import "./HomeGallery.css";

const HomeGallery = () => {
  return (
    <section className="home-gallery">
      <div className="container">

        {/* HEADING */}
        <div className="home-gallery-top">
          <h2 className="home-gallery-heading">
            Our Gallery
          </h2>

          <p className="home-gallery-text">
            Explore memorable moments, campus life, academic
            activities and events at KMV College.
          </p>
        </div>

        {/* SLIDER */}
        <Marquee
          speed={50}
          pauseOnHover={true}
          gradient={false}
        >

          <div className="home-gallery-item">
            <img
              src={require("../assets/kmv-banner1.jpeg")}
              alt="gallery"
              className="home-gallery-image"
            />
          </div>

          <div className="home-gallery-item">
            <img
            src={require("../assets/kmv-banner2.jpeg")}
              alt="gallery"
              className="home-gallery-image"
            />
          </div>

          <div className="home-gallery-item">
            <img
              src={require("../assets/kmv-banner3.jpeg")}
              alt="gallery"
              className="home-gallery-image"
            />
          </div>

          <div className="home-gallery-item">
            <img
             src={require("../assets/kmv-banner4.jpeg")}
              alt="gallery"
              className="home-gallery-image"
            />
          </div>

          <div className="home-gallery-item">
            <img
              src={require("../assets/kmv-banner5.jpeg")}
              alt="gallery"
              className="home-gallery-image"
            />
          </div>

          <div className="home-gallery-item">
            <img
              src={require("../assets/kmv-banner6.jpeg")}
              alt="gallery"
              className="home-gallery-image"
            />
          </div>

        </Marquee>

      </div>
    </section>
  );
};

export default HomeGallery;