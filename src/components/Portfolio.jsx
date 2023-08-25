import React from 'react'
import '../components/portfolio.css'
import linkedin from '../assets/linkedin.gif'
import github from '../assets/github.gif'
import css from '../assets/css.png'
import html from '../assets/html.png'
import bootstrap from '../assets/bootstrap.png'
import js from '../assets/js.png'
import rct from '../assets/reactjs.png'
import figma from '../assets/figma.png'
import gitlogo from '../assets/git.png'


export default function Portfolio() {
    return (
        <div className='portfolio'>
            <div className='backgound'></div>
            <div className='home-content'>
                <p>Hi There</p>
                <h1>I'm <span>AFIKA SHWASHWA</span></h1>
                <p>A software developer  currently  specializing in front-end mobile and web development </p>
                <div className='btn-icons'>
                    <button className='btn'>Resume</button>
                    <div className="icons">
                        <img className="git-hub" alt="Github link" src={github} />
                        <img className="linkedin" alt="Linkedin link" src={linkedin} />
                    </div>

                </div>
                <div className='skillset'>
                    <p>Tech Stack</p>
                    <p><img src={css} /> <img src={html} /><img src={bootstrap} /><img src={js} /><img src={rct} /><img src={figma} /> <img src={gitlogo} /></p>

                </div>
            </div>

        </div>
    )
}

