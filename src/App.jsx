import React from "react";
import { useState } from 'react'
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";

// import {faPhone, FaEnvelope, faLocation}from 'react-icons/fa' 

function App() {

  return (
    <body>
      <Navbar />
      <About />
      <Contact />

    </body>


  );
};

export default App
