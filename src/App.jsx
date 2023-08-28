import React from "react";
import { useState } from 'react'
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Backgound from "./components/Background";
function App() {

  return (
    <div>


      <Navbar />
      <Portfolio />
      <Backgound />
      <About />
      <Projects />
      <Education />
      <Contact />

    </div>


  );
};

export default App
