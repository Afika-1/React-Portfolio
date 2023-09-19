import React from "react";
import { useState } from 'react'
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Background from "./components/Three";

function App() {

  return (
    <div>
    
      <Background />
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
