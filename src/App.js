import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Routes, Route } from "react-router-dom";
import './App.css';
import  Navbar  from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import Courses from "./pages/Courses";
import Admission from "./pages/Admission";

import Faculty from "./pages/Faculty";
import Certificate from "./pages/Certificate";


function App() {


  return (
    <div className='App'>
    
<Navbar/>
        <Routes>
      
         <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/facilities" element={<Facilities />} />
                    <Route path="/certificate" element={<Certificate/>} />
          <Route path="/courses" element={<Courses />} />
             <Route path="/admission" element={<Admission />} />
                <Route path="/faculty" element={<Faculty />} />
         <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
      </Routes>
      
<Footer/>
  
    </div>
  );
}

export default App;
