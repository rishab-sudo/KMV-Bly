import React from 'react'
import HomeBanner from '../components/HomeBanner'
import "./Home.css"
import PrincipalMessage from '../components/PrincipalMessage';
import HomeCards from '../components/HomeCards';
// import Stats from '../components/Stats';
import {
  FaGraduationCap,
  FaBookOpen,
  FaUserGraduate,
  FaUniversity
} from "react-icons/fa";
import HomeGallery from '../components/HomeGallery';
import HomeAbout from '../components/HomeAbout';
import HomeCourses from '../components/HomeCourses';

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

    
   <HomeAbout/>

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
  



    {/* <Stats/> */}

<PrincipalMessage/>
<HomeCourses/>
<HomeGallery/>

    </div>

    
  )
}

export default Home