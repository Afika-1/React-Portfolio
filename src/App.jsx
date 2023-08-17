import React from "react";
import { useState } from 'react'
import './App.css'
// import backgound from './/assets/background 3.jpg'
import linkedin from './/assets/linkedin.gif'
import github from './/assets/github.gif'
import logo from './/assets/logo.jpg'



function App() {

  return (
    <body>
      <div className="contact">
        <div className="overlap-wrapper">
          <div className="overlap">

            <div className="background-image">
              
            </div>

            <header className='header-class'>
              <nav className='navbar'>
                <img className="logo" alt="logo Image" src={logo} />

                <ul>
                  <li><a href='#home' className='home'>Home</a></li>
                  <li><a href="#about" className="text-wrapper-4">About</a></li>
                  <li><a href="#project" className="text-wrapper-5">Project</a></li>
                  <li><a href="#contact" className="text-wrapper-6">Contact</a></li>
                </ul>

                <button className="btn-cv">Resume</button>

              </nav>
            </header>
            <div className='title'>
              <h1 className="text-wrapper">Contact <span className="text-wrapper-2">Me</span></h1>
            </div>
            {/* <img className="fluent-call" alt="Fluent call" src="image.svg" /> */}
            <div className="background-home" />
            <div className="div" />

            <div id="line"><p className="line"></p></div>






            <div className="contact-content">
              <div>
                <div className="text-wrapper-7">+27662398354</div>
                <div className="text-wrapper-8">Afikashwashwa@gmail.com</div>
                <div className="text-wrapper-9">Cape Town, South Africa</div>
              </div>
              <img className="github" alt="Github" src={github} />
              <img className="linkedin-logo" alt="Linkedin logo" src={linkedin} />
              <form>
                <input className="form-input" type='text' name='name' placeholder='Full Name' />
                <input className="form-input" type='email' name='email' placeholder='Email Address' />
                <input className="form-input" type='text' name='project' placeholder='Project' />
                <input className="form-input" type='text' name='message' placeholder='Type your message' />
                <div><button className="send-button" type="submit">Send</button></div>
              </form>

            </div>
            {/* <img className="vector" alt="Vector" src="vector.svg" />
            <img className="mdi-email" alt="Mdi email" src="mdi-email.svg" />
            <img className="zondicons-location" alt="Zondicons location" src="zondicons-location.svg" />
            <img className="fluent-call-2" alt="Fluent call" src="fluent-call-20-regular.svg" />
            <img className="group" alt="Group" src="group.png" /> */}

          </div>
      // </div>
    // </div>
    </body>);
};
export default App
