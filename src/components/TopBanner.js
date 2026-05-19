import React from "react";
import "./TopBanner.css";

const TopBanner = ({
  title = "Page Heading",
  currentPage = "Current Page",
  backgroundImage = "/images/banner.jpg",
}) => {
  return (
    <section
      className="topbanner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="topbanner-overlay">
        <h1 className="topbanner-title">{title}</h1>

        <div className="topbanner-breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <p>{currentPage}</p>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;