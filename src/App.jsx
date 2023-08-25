import React from "react";
import { useState } from 'react'
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Education from "./components/Education";
// import {faPhone, FaEnvelope, faLocation}from 'react-icons/fa' 

function App() {

  return (
    <div>


      <Navbar />
      <Portfolio />

      <About />
      <Projects />
      <Education />
      <Contact />

    </div>


  );
};

export default App
