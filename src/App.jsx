import { useState } from 'react'
import './App.css'
import backgound from './/assets/background 3.jpg'
import linkedin from './/assets/linkedin.gif'
import github from './/assets/github.gif'
import logo from './/assets/logo.jpg'
import React from "react";


function App() {

  return (
    <div className="contact">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="fluent-call" alt="Fluent call" src="image.svg" />
          <div className="rectangle" />
          <img className="background" alt="Background image" src={backgound} />
          <div className="background-home" />
          <div className="div" />
          <div className='title'><h1 className="text-wrapper">Contact <span className="text-wrapper-2">Me</span></h1></div>
          <img className="line" alt="Line" src="line-9.svg" />
          <img className="github" alt="Github" src={github} />
          <img className="linkedin-logo" alt="Linkedin logo" src={linkedin} />
          <img className="img" alt="Img" src={logo} />
          <div className="CV-button">

          </div>
          <button className="overlap-group">CV</button>
          <nav className='navbar'>
            <ul>
              <li><a href="#about" className="text-wrapper-4">About</a></li>
              <li><a href="#project" className="text-wrapper-5">Project</a></li>
              <li><a href="#contact" className="text-wrapper-6">Contact</a></li>
            </ul>
          </nav>

          <form>
            <input className="rectangle-4" type='text' name='name' placeholder='Full Name' />
            <input className="rectangle-5" type='email' name='email' placeholder='Email Address' />
            <input className="rectangle-6" type='text' name='project' placeholder='Project' />
            <input className="rectangle-7" type='text' name='message' placeholder='Type your message' />
            <button className="send-button" type="submit">Send</button>
          </form>

          <div className="text-wrapper-7">+27662398354</div>
          <div className="text-wrapper-8">Afikashwashwa@gmail.com</div>
          <div className="text-wrapper-9">Cape Town, South Africa</div>
          <img className="vector" alt="Vector" src="vector.svg" />
          <img className="mdi-email" alt="Mdi email" src="mdi-email.svg" />
          <img className="zondicons-location" alt="Zondicons location" src="zondicons-location.svg" />
          <img className="fluent-call-2" alt="Fluent call" src="fluent-call-20-regular.svg" />
          <img className="group" alt="Group" src="group.png" />
          
        </div>
      </div>
    </div>
  );
};
export default App
