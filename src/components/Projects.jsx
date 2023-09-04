import React from 'react'
import './styling/projects.css'
import web from '../components/projects/mzamo.png'
import bank from '../components/projects/bank.png'
import chat from '../components/projects/ChatApp.png'
import income from '../components/projects/INCOME.jpg'
import simple from '../components/projects/simple.png'

export default function Projects() {
    return (
        <div className='projects' id='projects'>
        <div id="line"><p className="line"></p></div>

            <div className='contact-title'>
                <h1 className="text-wrapper">My <span className="text-wrapper-2">Projects</span></h1>
            </div>

            <div className='project-content'>

                <div className='image-descr'>
                    <div className='description-icons'>
                        <div className='project-image'><img src={web}/></div>
                        <div className='description'>
                            <h2>School Website</h2>
                            <p>We were tasked to create a website for the school to improve their online presence. We used HTML, CSS and JS tools to achieve this</p>
                            <a  href="https://monumental-bombolone-4c47a2.netlify.app/" ><button>View Web</button></a>
                        </div>
                    </div>

                    <div className='description-icons' id='description-icons'>
                        <div className='description'>
                            <h2>Banking System</h2>
                            <p className='para'>Here is a mobile banking system app. This was created using a the TKinter Python library. The App can creates an account and allows account holder to make transactions while recording the data and more.</p>
                            <a href=''><button>View Code</button></a>
                        </div>
                        <div className='project-image'><img src={bank} /></div>

                    </div>

                    <div className='description-icons'>
                        <div className='project-image'><img src={chat} /></div>
                        <div className='description'>
                            <h2>Chat Application</h2>
                            <p>The chat app was created using ReactJS, NodeJS and Socket.IO.  It allows the users create a chat room and join using the created RoomID. Can successfully send and receive texts showing timestamps and sender’s name</p>
                            <a href=''><button>View Code</button></a>
                        </div>
                    </div>

                    <div className='description-icons' id='description-icons'>
                        <div className='description'>
                            <h2>Tax Calculator</h2>
                            <p>The Tax Calculator allows the user to enter their annual income, select the tax bracket they are in and applies the accurate tax rate then displays the annual and monthly tax obligation.
                                I used Java to build this. </p>
                                <a href=''><button>View Code</button></a>
                        </div>
                        <div className='project-image'><img src={income} /></div>

                    </div>

                    <div className='description-icons' id='bd'>
                        <div className='project-image'><img src={simple} /></div>
                        <div className='description'>
                            <h2>Financial Calculator</h2>
                            <p>This application allows the user to  calculate investment (simple/compound) and can also Calculate a house bond. These two are neatly showing on the app. Tkinter python library was used to build the GUI.  </p>
                            <a href=''><button>View Code</button></a>
                        </div>
                    </div>



                </div>
            </div>


        </div>
    )
}

