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
              <h1>Welcome To KMV College</h1>
              <p>
                Empowering Students Through Quality Education &
                Innovation
              </p>
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
              <h1>Build Your Bright Future</h1>
              <p>
                Excellence, Discipline & Academic Growth For Every
                Student
              </p>
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
              <h1>Admissions Open 2026</h1>
              <p>
                Join One Of The Leading Educational Institutions
              </p>
            </div>
          </div>
        </Carousel.Item>

      </Carousel>

    </section>
  );
};

export default HomeBanner;