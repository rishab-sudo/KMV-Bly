import React from "react";
import "./HomeCards.css";

const HomeCards = ({ cardsData }) => {
  return (
    <section className="homecards">
      <div className="container">

        <div className="homecards-wrapper">

          {cardsData.map((card, index) => (
            <div
              className={`homecards-col ${
                index !== cardsData.length - 1
                  ? "homecards-border"
                  : ""
              }`}
              key={index}
            >

              {/* ICON */}
              <div className="homecards-icon">
                {card.icon}
              </div>

              {/* HEADING */}
              <h3 className="homecards-heading">
                {card.heading}
              </h3>

              {/* DESCRIPTION */}
              <p className="homecards-description">
                {card.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default HomeCards;