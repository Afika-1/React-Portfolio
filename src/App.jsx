import React from "react";
import { useState } from 'react'
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Education from "./components/Education";
import MyBackgound from "./components/particles/MyBackgound";


function App() {

  return (
    <div>

      <Navbar />
   
      <Portfolio />
      <About />
      <MyBackgound/>
      <Projects />
      <Education />
      <Contact />

    </div>


  );
};

export default App
