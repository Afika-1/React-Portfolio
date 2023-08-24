import React from 'react'
import '../components/projects.css'
import web from '../components/projects/mzamo.png'
import bank from '../components/projects/bank.png'
import chat from '../components/projects/ChatApp.png'
import income from '../components/projects/INCOME.jpg'
import red from '../components/projects/red.png'
import tax from '../components/projects/tax-calculator.jpg'
import simple from '../components/projects/simple.png'

export default function Projects() {
    return (
        <div className='projects'>

            <div className='contact-title'>
                <h1 className="text-wrapper">My <span className="text-wrapper-2">Projects</span></h1>
            </div>
            <div id="line"><p className="line"></p></div>

            <div className='project-content'>
                <div className='icons'> Icons and other icons</div>

                <div className='image-descr'>
                    <div className='description-icons'>
                        <div className='project-image'><img src={web}/></div>
                        <div className='description'><h1>School Website</h1><p>We were tasked to create a website for the school to improve their online presence.  We used HTML, CSS and JS tools to achieve this</p>
                        <button>Tap to view</button></div>
                    </div>

                    <div className='description-icons'>
                    <div className='description'><h1></h1><p></p><button></button> ef se fws fgs </div>
                        <div className='project-image'><img src={bank}/></div>
                       
                    </div>

                    <div className='description-icons'>
                        <div className='project-image'><img src={chat}/></div>
                        <div className='description'> <h1>gfdgdf</h1><p></p><button></button></div>
                    </div>

                    <div className='description-icons'>
                    <div className='description'> sdfsfds dfs dfsdf <h1></h1><p></p><button></button></div>
                        <div className='project-image'><img src={tax}/></div>
                   
                    </div>

                    <div className='description-icons'>
                        <div className='project-image'><img src={simple}/></div>
                        <div className='description'> sf ds fdsf dsf sdf<h1></h1><p></p><button></button></div>
                    </div>

                    <div className='description-icons'>
                    <div className='description'> <h1></h1><p></p><button></button>dsfgd sg</div>
                        <div className='project-image'><img src={income}/></div>
                     
                    </div>

                </div>
            </div>


        </div>
    )
}

