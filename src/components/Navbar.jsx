// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import logo from '../assets/logo.jpg'
// import './navigation.css'


// export default function Navbar() {

//     return (
//         <header className='header-class'>
//             <nav className='navbar'>
//                 <img className="logo" alt="logo Image" src={logo} />

//                 <ul>
//                     <li><a href='#home' className='home'>Home</a></li>
//                     <li><a href="#about" className="text-wrapper-4">About</a></li>
//                     <li><a href="#project" className="text-wrapper-5">Project</a>
//                     </li>
//                     <li>
//                         <a href="#contact" className="text-wrapper-6">Contact</a></li>
//                 </ul>
                    

//                 <button className="btn-cv"> Resume</button>
//             </nav>
//         </header>
//     );};



import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../assets/logo.jpg';
import './styling/navigation.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className='header-class'>
            <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
                <a href='#portfolio'><img className="logo" alt="logo Image" src={logo} /></a>

                <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                    <li><a href='#portfolio' className='home'>Home</a></li>
                    <li><a href="#about" className="text-wrapper-4">About</a></li>
                    <li><a href="#projects" className="text-wrapper-5">Project</a></li>
                    <li><a href="#contact" className="text-wrapper-6">Contact</a></li>
                </ul>

                <button className="btn-cv">Resume</button>
            </nav>
        </header>
    );
}
