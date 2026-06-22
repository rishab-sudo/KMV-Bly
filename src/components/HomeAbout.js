import React from "react";
import "./HomeAbout.css";


const HomeAbout = () => {
  return (
    <section className="homeabout g-0">

      <div className="container-fluid g-0">

        <div className="homeabout-wrapper">

          {/* LEFT IMAGE */}
          <div className="homeabout-image-section">
            <img
              src={require("../assets/banner/kmv-bly9.png")}
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
    के.एम.वी. महाविद्यालय आर्य समाज भूड़, बरेली आज से 66 वर्ष पूर्व
    1960 में आर्य समाज द्वारा स्थापित संस्था है। स्थापना वर्ष में यह
    आगरा विश्वविद्यालय से एवं वर्ष 1975 से महात्मा ज्योतिबा फुले
    रोहिलखंड विश्वविद्यालय, बरेली से स्थायी रूप से संबद्ध है।
  </p>
</div>

<div className="homeabout-textbox">
  <p className="homeabout-description">
    यह उत्तर प्रदेश के बरेली जिले में स्थापित प्रथम महिला महाविद्यालय
    है, जिसे कन्याओं की उच्च शिक्षा की दिशा में पहला कदम उठाने का
    गौरव प्राप्त है।
  </p>

  <p className="homeabout-description">
    महाविद्यालय अपने स्थापना काल से ही छात्राओं के सर्वांगीण विकास,
    गुणवत्तापूर्ण शिक्षा एवं सांस्कृतिक मूल्यों के संवर्धन हेतु
    निरंतर प्रयासरत है।
  </p>
</div>

</div>

        </div>

      </div>

    </section>
  );
};

export default HomeAbout;