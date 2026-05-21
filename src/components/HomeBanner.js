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
                Welcome To KMV College
              </span>

              <h1>
                Empowering Students Through Quality Education
              </h1>

              <p>
                We help students build successful careers through
                academic excellence, innovation, discipline and modern
                learning environments.
              </p>

              <div className="homebanner-buttons">
                <a href="/courses" className="banner-btn banner-btn-fill">
                  Explore Courses
                </a>

                <a href="/admission" className="banner-btn banner-btn-outline">
                  Apply Now
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
                Build Your Bright Future
              </span>

              <h1>
                Excellence, Discipline & Academic Growth
              </h1>

              <p>
                Experience quality education with expert faculty,
                advanced infrastructure and opportunities for holistic
                student development.
              </p>

              <div className="homebanner-buttons">
                <a href="/courses" className="banner-btn banner-btn-fill">
                  Explore Courses
                </a>

                <a href="/admission" className="banner-btn banner-btn-outline">
                  Apply Now
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
                Admissions Open 2026
              </span>

              <h1>
                Join One Of The Leading Educational Institutions
              </h1>

              <p>
                Start your academic journey with KMV College and unlock
                endless opportunities for growth and success.
              </p>

              <div className="homebanner-buttons">
                <a href="/courses" className="banner-btn banner-btn-fill">
                  Explore Courses
                </a>

                <a href="/admission" className="banner-btn banner-btn-outline">
                  Apply Now
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