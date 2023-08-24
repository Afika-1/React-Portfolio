import React from "react";
import { useState } from 'react'
import Contact from "./Components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
// import {faPhone, FaEnvelope, faLocation}from 'react-icons/fa' 

function App() {

  return (
    <div>


      <Navbar />
      <Portfolio />

      <About />
      <Projects/>

      <Contact />

    </div>


  );
};

export default App
