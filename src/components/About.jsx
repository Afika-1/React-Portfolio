import React from 'react'
import './styling/about.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { FaRegFileAlt } from 'react-icons/fa';


export default function About() {
    return (
        <div>
            <Navbar />


            <div className='about' id='about'>

                <div className='title'>
                    <h1 className="text-wrapper">About <span className="text-wrapper-2">Me</span></h1>
                </div>
                <div id="line"><p className="line"></p></div>

                <div className='about-content'>

                    <div className='qualification'>

                        <div className='sub'>
                            <p className='p1'>Qualification  </p>

                            <p className='p1'>Post </p>

                        </div>

                        <div className='sub'>
                            <p>: Dip IT</p>
                            <p>: Software Developer</p>
                        </div>
                    </div>
                    <div className='paragraph'>
                        <p className='paragraph1'>I am a Graduate with a Diploma: IT (CN) that branched out to Software Development out of interest and passion for Mobile App and Web Development  .
                            I am well equipped with tech knowledge and tools hence proficient in computer programs such as Visual Studio Code, Figma, AWS, SASAMS And Packet Tracer as examples.
                            <br></br>I have excellent Understanding and skills in languages such as HTML, CSS and JavaScript and upskilling with ReactJS, Ract Native, NodeJS MongoDB. I currently specialize in Front End .</p>
                    </div>
                    <div className='boxes'>
                        <div>
                            <p className='btns' id='btns'>1+</p>
                            <p className='btns'>Years of Experience</p>
                        </div>
                        <div>
                            <p className='btns' id='btns'>5+</p>
                            <p className='btns'>Projects Completed</p>
                        </div>
                        <Link to='/education'>
                            <div>
                            <p className='btns' id='btns'><FaRegFileAlt />
                            </p>
                                <p className='btns' id='btns'>View</p>
                                <p className='btns'>My Education</p>
                            </div>
                        </Link>

                    </div> </div>
            </div>
        </div>

    )
}

