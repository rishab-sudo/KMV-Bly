import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Routes, Route } from "react-router-dom";
import './App.css';
import  Navbar  from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import Courses from "./pages/Courses";


function App() {


  return (
    <div className='App'>
    
<Navbar/>
        <Routes>
      
         <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
         <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
      </Routes>
      
<Footer/>
  
    </div>
  );
}

export default App;
