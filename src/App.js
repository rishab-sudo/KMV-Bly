import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import './App.css';
import  Navbar  from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";


function App() {


  return (
    <div className='App'>
      <Header />
<Navbar/>
        <Routes>
      
         <Route path="/" element={<Home />} />
         <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
      </Routes>
      
<Footer/>
  
    </div>
  );
}

export default App;
