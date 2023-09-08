import React from 'react'
import './styling/about.css'
// import '../App.css'

export default function About() {
    return (

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

                <p>I am a Graduate with a Diploma: IT (CN) that branched out to Software Development out of interest and passion for Mobile App Development  .
                    I am well equipped with tech knowledge and tools hence proficient in computer programs such as Visual Studio Code, SASAMS And Packet Tracer as examples.
                    <br></br>I have excellent Understanding and skills in languages such as HTML, CSS and JavaScript and upskilling with ReactJS and NodeJS. I currently specialize in Front End Web.</p>
                <div className='boxes'>
                    <div>
                        <p className='btns' id='btns'>1+</p>
                        <p className='btns'>Years of Experience</p>
                    </div>
                    <div>
                        <p className='btns' id='btns'>5+</p>
                        <p className='btns'>Projects Completed</p>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

