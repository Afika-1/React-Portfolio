import React from 'react'
import './styling/projects.css'
import web from '../components/projects/mzamo.png'
import bank from '../components/projects/bank.png'
import chat from '../components/projects/ChatApp.png'
import income from '../components/projects/SARS-Tax.png'
import simple from '../components/projects/unnamed.webp'
import weather from '../components/projects/weather.png'
import news from '../components/projects/news.png'
import travel from '../components/projects/travel.png'

export default function Projects() {


    const imageToAnimate = document.getElementById('imageToAnimate');

    function toggleImageColor() {
        if (imageToAnimate.classList.contains('normal-color')) {
            imageToAnimate.classList.remove('normal-color');
            imageToAnimate.classList.add('black-white');
        } else {
            imageToAnimate.classList.remove('black-white');
            imageToAnimate.classList.add('normal-color');
        }
    }

    setInterval(toggleImageColor, 3000);



    return (
        <div className='projects' id='projects'>
            <div id="line"><p className="line"></p></div>

            <div className='contact-title'>
                <h1 className="text-wrapper">My <span className="text-wrapper-2">Projects</span></h1>
            </div>

            <div className='project-content'>



                <div className='image-descr'>

                    <div className='description-icons' id='description-icons'>
                        <div className='project-image' id='mzamo'><a href='https://www.figma.com/proto/T1vS2Nr8xA4MRuR7PQnl1u/TraVerse?node-id=101-359&t=axTqIQpWw4DPCoWZ-1' target='_blank'><img src={travel} className='bounce' /></a></div>
                        <div className='description'>
                            <h2>Travel App</h2>
                            <p>Currently building this Travel App with React Native. It encompasses all the necessary features a user would need from restuarant when traveling, hotels, clubs to car rentals I designed the UI on Figma.</p>
                            <a href="https://www.figma.com/proto/T1vS2Nr8xA4MRuR7PQnl1u/TraVerse?node-id=101-359&t=axTqIQpWw4DPCoWZ-1" target='_blank' >
                            <button>View UI</button></a>
                        </div>
                    </div>
                    <div className='description-icons'>
                        <div className='project-image' id='mzamo'><a href='https://monumental-bombolone-4c47a2.netlify.app/' target='_blank'><img src={web} className='bounce' /></a></div>
                        <div className='description'>
                            <h2>School Website</h2>
                            <p>We were tasked to create a website for the school to improve their online presence. We used HTML, CSS and JavaScript tools to achieve this</p>
                            <a href="https://monumental-bombolone-4c47a2.netlify.app/" target='_blank' ><button>View Web</button></a>
                        </div>
                    </div>

                    <div className='description-icons' id='description-icons'>
                        <div className='project-image' id='bank' ><a href='https://github.com/Afika-1/Bank-App--Final' target='_blank'><img src={bank} className='bounce' /></a></div>

                        <div className='description'>
                            <h2>Mobile Banking App</h2>
                            <p className='para'>Here is a mobile banking system app. This was created using a the TKinter Python library. The App can creates an account and allows account holder to make transactions while recording the data and more.</p>
                            <a href='https://github.com/Afika-1/Bank-App--Final' target='_blank'><button>View Code</button></a>
                        </div>

                    </div>

                    <div className='description-icons'>
                        <div className='project-image' id='mzamo'><a href='https://weather-app-f4.netlify.app' target='_blank'><img src={weather} className='bounce' /></a></div>
                        <div className='description'>
                            <h2>Weather App</h2>
                            <p>This is a weather app that shows the current weather of the requested region . THe website is built with HTML, CSS, Javascript and uses OpenWeatherMap API to access the weather data and display as requested.</p>
                            <a href="https://weather-app-f4.netlify.app" target='_blank' ><button>View Web</button></a>
                        </div>
                    </div>

                    <div className='description-icons' id='description-icons'>
                        <div className='project-image .bw-image' id='tax'><a href='today-scoop-magazine.web.app' target='_blank'><img src={news} className='bounce' /></a></div>

                        <div className='description'>
                            <h2>News Magazine</h2>
                            <p>This web is built using Reacj JS , Bootstrap  and News API(Dev only) to broadcast the top news headlines .. When the user clicks the read more button they're taken to the full story. 
                                Navigation allows to search articles for a specific category.... See README for  visuals </p>
                            <a href='https://github.com/Afika-1/news-magazine' arget='_blank'><button>Visuals</button></a>
                        </div>

                    </div>







                    <div className='description-icons'>
                        <div className='project-image' id='mzamo'> <a href='https://github.com/Afika-1/Chat-App' target='_blank'><img src={chat} className='bounce' /></a></div>
                        <div className='description'>
                            <h2>Chat Application</h2>
                            <p>The chat app was created using ReactJS, NodeJS and Socket.IO.  It allows the users create a chat room and join using the created RoomID. Can successfully send and receive texts showing timestamps and sender’s name</p>
                            <a href='https://github.com/Afika-1/Chat-App' target='_blank'><button>View Code</button></a>
                        </div>
                    </div>

                    <div className='description-icons' id='description-icons'>
                        <div className='project-image .bw-image' id='tax'><a href='https://github.com/Afika-1/Tax-Calculator' target='_blank'><img src={income} className='bounce' /></a></div>

                        <div className='description'>
                            <h2>Tax Calculator</h2>
                            <p>The Tax Calculator allows the user to enter their annual income, select the tax bracket they are in and applies the accurate tax rate then displays the annual and monthly tax obligation.
                                I used Java to build this. </p>
                            <a href='https://github.com/Afika-1/Tax-Calculator' arget='_blank'><button>View Code</button></a>
                        </div>

                    </div>

                    <div className='description-icons' id='bd'>
                        <div className='project-image .bw-image' id='simple'> <a href='https://github.com/Afika-1/Banking-System-App' target='_blank'><img src={simple} className='bounce' /></a></div>
                        <div className='description'>
                            <h2>Financial Calculator</h2>
                            <p>This application allows the user to calculate investment (simple/compound) and can also Calculate a house bond. These two are neatly showing on the app. Tkinter python library was used to build the GUI.  </p>
                            <a href='https://github.com/Afika-1/Banking-System-App' target='_blank'><button>View Code</button></a>
                        </div>
                    </div>



                </div>
            </div>


        </div>
    )
}

