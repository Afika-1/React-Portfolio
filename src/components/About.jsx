import React from 'react'
import './styling/about.css'
// import Navbar from './Navbar'
export default function About() {
    return (
        <div>

            <div className='about'>

                <div className='title'>
                    <h1 className="text-wrapper">About <span className="text-wrapper-2">Me</span></h1>
                </div>
                <div id="line"><p className="line"></p></div>

                <div className='about-content'>

                    <div className='qualification'>

                        <div className='sub'>
                            <p>Qualification </p>
                            <p>Post</p>
                        </div>

                        <div>
                            <p>: Dip IT</p>
                            <p>: Software Developer</p>
                        </div>
                    </div>



                    <p>I am a Graduate with a Diploma: IT (CN) that branched out to Software Development out of interest and passion for Mobile App Development  .
                        I am well equipped with tech knowledge and tools hence proficient in computer programs such as Visual Studio Code, SASAMS And Packet Tracer as examples.
                        <br></br>I have excellent Understanding and skills in languages such as HTML, CSS and JavaScript and upskilling with ReactJS and NodeJS. I currently specialize in Front End Web.</p>
                    <div className='boxes'>
                        <div>
                            <p>1+</p><p>Years of Experience</p>
                        </div>
                        <div><
                            p>1+</p><p>Projects Completed</p>
                        </div>
                        <div>
                            <p>1+</p><p>Tap to view My Education</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

