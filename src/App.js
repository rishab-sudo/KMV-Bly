import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import './App.css';
import  Navbar  from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";


function App() {


  return (
    <div className='App'>
      <Header />
<Navbar/>
        <Routes>
      
         <Route path="/" element={<Home />} />
        
      </Routes>
      
<Footer/>
  
    </div>
  );
}

export default App;
