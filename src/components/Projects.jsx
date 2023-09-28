import React from 'react'
import './styling/projects.css'
import web from '../components/projects/mzamo.png'
import bank from '../components/projects/bank.png'
import chat from '../components/projects/ChatApp.png'
import income from '../components/projects/SARS-Tax.png'
import simple from '../components/projects/unnamed.webp'

export default function Projects() {


// Get a reference to the image element
const imageToAnimate = document.getElementById('imageToAnimate');

// Function to toggle between normal color and black and white
function toggleImageColor() {
  if (imageToAnimate.classList.contains('normal-color')) {
    imageToAnimate.classList.remove('normal-color');
    imageToAnimate.classList.add('black-white');
  } else {
    imageToAnimate.classList.remove('black-white');
    imageToAnimate.classList.add('normal-color');
  }
}

// Set an interval to run the toggle function every 3 seconds
setInterval(toggleImageColor, 3000);


    
    return (
        <div className='projects' id='projects'>
        <div id="line"><p className="line"></p></div>

            <div className='contact-title'>
                <h1 className="text-wrapper">My <span className="text-wrapper-2">Projects</span></h1>
            </div>

            <div className='project-content'>

                <div className='image-descr'>
                    <div className='description-icons'>
                        <div className='project-image' id='mzamo'><a href='https://monumental-bombolone-4c47a2.netlify.app/' target='_blank'><img src={web} className='bounce'/></a></div>
                        <div className='description'>
                            <h2>School Website</h2>
                            <p>We were tasked to create a website for the school to improve their online presence. We used HTML, CSS and JS tools to achieve this</p>
                            <a  href="https://monumental-bombolone-4c47a2.netlify.app/" target='_blank' ><button>View Web</button></a>
                        </div>
                    </div>

                    <div className='description-icons' id='description-icons'>
                    <div className='project-image'id='bank' ><a href='https://github.com/Afika-1/Bank-App--Final' target='_blank'><img src={bank} className='bounce'/></a></div>

                        <div className='description'>
                            <h2>Banking System</h2>
                            <p className='para'>Here is a mobile banking system app. This was created using a the TKinter Python library. The App can creates an account and allows account holder to make transactions while recording the data and more.</p>
                            <a href='https://github.com/Afika-1/Bank-App--Final' target='_blank'><button>View Code</button></a>
                        </div>

                    </div>

                    <div className='description-icons'>
                        <div className='project-image'  id='mzamo'> <a href='https://github.com/Afika-1/Chat-App' target='_blank'><img src={chat} className='bounce'/></a></div>
                        <div className='description'>
                            <h2>Chat Application</h2>
                            <p>The chat app was created using ReactJS, NodeJS and Socket.IO.  It allows the users create a chat room and join using the created RoomID. Can successfully send and receive texts showing timestamps and sender’s name</p>
                            <a href='https://github.com/Afika-1/Chat-App' target='_blank'><button>View Code</button></a>
                        </div>
                    </div>

                    <div className='description-icons' id='description-icons'>
                    <div className='project-image .bw-image' id='tax'><a href='https://github.com/Afika-1/Tax-Calculator' target='_blank'><img src={income} className='bounce'/></a></div>

                        <div className='description'>
                            <h2>Tax Calculator</h2>
                            <p>The Tax Calculator allows the user to enter their annual income, select the tax bracket they are in and applies the accurate tax rate then displays the annual and monthly tax obligation.
                                I used Java to build this. </p>
                                <a href='https://github.com/Afika-1/Tax-Calculator' arget='_blank'><button>View Code</button></a>
                        </div>

                    </div>

                    <div className='description-icons' id='bd'>
                        <div className='project-image .bw-image' id='simple'> <a href='https://github.com/Afika-1/Banking-System-App' target='_blank'><img src={simple} className='bounce'/></a></div>
                        <div className='description'>
                            <h2>Financial Calculator</h2>
                            <p>This application allows the user to  calculate investment (simple/compound) and can also Calculate a house bond. These two are neatly showing on the app. Tkinter python library was used to build the GUI.  </p>
                            <a href='https://github.com/Afika-1/Banking-System-App' target='_blank'><button>View Code</button></a>
                        </div>
                    </div>



                </div>
            </div>


        </div>
    )
}

