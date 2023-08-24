import React from "react";
import { useState } from 'react'
import Contact from "./Components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
// import {faPhone, FaEnvelope, faLocation}from 'react-icons/fa' 

function App() {

  return (
    <body>


      <Navbar />
      <Portfolio />

      <About />

      <Contact />

    </body>


  );
};

export default App
