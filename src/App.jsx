import React from "react";
import { useState } from 'react'
import './App.css'
import linkedin from './/assets/linkedin.gif'
import github from './/assets/github.gif'
import logo from './/assets/logo.jpg'
import Navbar from './Navbar.jsx'

// import {faPhone, FaEnvelope, faLocation}from 'react-icons/fa' 

function App() {

  return (
    <body>
     
<Navbar/>
            <div className='title'>
              <h1 className="text-wrapper">Contact <span className="text-wrapper-2">Me</span></h1>
            </div>
            <div id="line"><p className="line"></p></div>
            <div className="contact-content">

              <div className="contact-det">

                <div className="contact-container">
                  <div className="det-div">
                    <p>+27662398354</p>
                    <p >Afikashwashwa@gmail.com</p>
                    <p >Cape Town, South Africa</p>
                  </div>

                  <div className="icons">
                    <img className="github" alt="Github link" src={github} />
                    <img className="linkedin-logo" alt="Linkedin link" src={linkedin} />
                  </div>

                </div>
              </div>

              <form>
                <input className="form-input" type='text' required name='name' placeholder='Full Name' />
                <input className="form-input" type='email' required name='email' placeholder='Email Address' />
                <input className="form-input" type='text' required name='project' placeholder='Project' />
                <textarea className="form-message" type='text' required name='message' placeholder='Type your message here' />
                <div>
                  <button className="send-button" type="submit">Send</button>
                  </div>
              </form>

            </div>
   
       
    </body>);
};

export default App
