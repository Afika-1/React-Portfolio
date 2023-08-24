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
                <div className='icons'></div>
                <div>
                    <div className='description-icons'>
                        <div className='project-image'><img src={web}/></div>
                        <div className='description'></div>
                    </div>

                    <div className='description-icons'>
                        <div className='project-image'><img src={bank}/></div>
                        <div className='description'></div>
                    </div>

                    <div className='description-icons'>
                        <div className='project-image'><img src={chat}/></div>
                        <div className='description'></div>
                    </div>

                    <div className='description-icons'>
                        <div className='project-image'><img src={tax}/></div>
                        <div className='description'></div>
                    </div>

                    <div className='description-icons'>
                        <div className='project-image'><img src={simple}/></div>
                        <div className='description'></div>
                    </div>

                    <div className='description-icons'>
                        <div className='project-image'><img src={income}/></div>
                        <div className='description'></div>
                    </div>

                </div>
            </div>


        </div>
    )
}

