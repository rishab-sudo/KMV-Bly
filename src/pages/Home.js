import React from 'react'
import HomeBanner from '../components/HomeBanner'
import "./Home.css"
import PrincipalMessage from '../components/PrincipalMessage';
import HomeCards from '../components/HomeCards';
import Stats from '../components/Stats';
import {
  FaGraduationCap,
  FaBookOpen,
  FaUserGraduate,
  FaUniversity
} from "react-icons/fa";
import HomeGallery from '../components/HomeGallery';

const Home = () => {
     

  return (
    <div>
        <HomeBanner/>


    <section className="notice">

      {/* LEFT SIDE */}
      <div className="notice-label">
        NOTICE
      </div>

      {/* RIGHT SIDE */}
      <div className="notice-marquee">

        <div className="notice-track">
          Admissions Open For 2026 Session | Scholarship Forms Available |
          Annual Function On 25th May | Semester Exams Starting From June |
          New Courses Introduced For Students |
        </div>

      </div>

    </section>
    {/*  */}
    <HomeCards
  cardsData={[
    {
      icon: <FaGraduationCap />,
      heading: "Quality Education",
      description:
        "Providing excellence in academics and holistic learning."
    },

    {
      icon: <FaBookOpen />,
      heading: "Modern Library",
      description:
        "Access thousands of books and digital learning resources."
    },

    {
      icon: <FaUserGraduate />,
      heading: "Expert Faculty",
      description:
        "Learn from highly experienced and dedicated educators."
    },

    {
      icon: <FaUniversity />,
      heading: "Campus Facilities",
      description:
        "Modern infrastructure with advanced classrooms and labs."
    }
  ]}
/>
  

        <section className="homeabout">
      <div className="container">

        {/* TOP CONTENT */}
        <div className="homeabout-top">

          <h2 className="homeabout-heading">
            About KMV College
          </h2>

          <p className="homeabout-description">
            KMV College is committed to providing quality education,
            academic excellence, and holistic development for students.
            Our institution focuses on innovation, discipline, leadership,
            and career-oriented learning to prepare students for a bright
            future. With experienced faculty members and modern
            infrastructure, we ensure an inspiring educational environment
            for every learner.
          </p>

        </div>

        {/* BOTTOM SECTION */}
        <div className="homeabout-bottom">

          {/* LEFT SIDE */}
          <div className="homeabout-left">

            <p>
              Our college believes in empowering students through
              knowledge, values, and practical learning experiences.
              We encourage participation in academics, sports,
              cultural activities, and research programs to build
              confidence and leadership qualities among students.
            </p>

            <p>
              KMV College continuously strives to create an atmosphere
              where students can achieve their educational goals and
              contribute positively to society with integrity and
              excellence.
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="homeabout-right">

            <img
              src={require("../assets/kmv-banner1.jpeg")}
              alt="about"
              className="homeabout-image"
            />

            {/* WHITE BOX */}
            <div className="homeabout-links-box">

              <a href="/" className="homeabout-link">
                Admission Open
              </a>

              <a href="/" className="homeabout-link">
                Download Prospectus
              </a>

              <a href="/" className="homeabout-link">
                Explore Courses
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>


    <Stats/>

<PrincipalMessage/>

<HomeGallery/>

    </div>

    
  )
}

export default Home