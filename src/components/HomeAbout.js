import React from "react";
import "./HomeAbout.css";

import aboutImage from "../assets/kmv-banner1.jpeg";

const HomeAbout = () => {
  return (
    <section className="homeabout g-0">

      <div className="container-fluid g-0">

        <div className="homeabout-wrapper">

          {/* LEFT IMAGE */}
          <div className="homeabout-image-section">
            <img
              src={aboutImage}
              alt="KMV College"
              className="homeabout-image"
            />
          </div>

          {/* RIGHT CONTENT */}
        {/* RIGHT CONTENT */}
<div className="homeabout-content">

  <span className="homeabout-subtitle">
    About KMV College
  </span>

  <h2 className="homeabout-heading">
     हमारी गौरवशाली स्थापना
  </h2>

  {/* PARA 1 */}

  <div className="homeabout-textbox">

    <p className="homeabout-description">
   क ा महाव ालय आय समाज भूड़ बरेली आज से 66 वष पूव 1960 म आय समाज ारा सं ापत सं ा है। 
   सं ापना वष म यह आगरा वश्वव ालय से एवं वष 1975 से महा ा ोतबा फूले रोहलखंड वश्वव ालय बरेली से ाई रूप से संबंध है।
    </p>

  </div>

  {/* PARA 2 */}

  <div className="homeabout-textbox">
    <p className="homeabout-description">
    यह उत्तर प्रदेश बरेली जले म ापत प्रथम महला महाव ालय है जसे क ाओं क उच्च श ा क दशा म पहला पग उठाने का गौरव प्राप्त है।
    </p>

<p>यह उत्तर प्रदेश बरेली जले म ापत प्रथम महला महाव ालय है जसे क ाओं क उच्च श ा क दशा म पहला पग उठाने का गौरव प्राप्त है।</p>
  </div>
 {/* BUTTON */}

  <div className="homeabout-btn-wrapper">
    <a href="/about" className="homeabout-btn">
      Know More
    </a>
  </div>

</div>

        </div>

      </div>

    </section>
  );
};

export default HomeAbout;