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



// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import logo from '../assets/logo.jpg';
// import './navigation.css';

// export default function Navbar() {
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//         setMobileMenuOpen(!mobileMenuOpen);
//     };

//     return (
//         <header className='header-class'>
//             <nav className={`navbar ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
//                 <img className="logo" alt="logo Image" src={logo} />
                
//                 {/* Mobile Menu Toggle Button */}
//                 <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
//                     <div className="bar"></div>
//                     <div className="bar"></div>
//                     <div className="bar"></div>
//                 </button>

//                 {/* Navigation Items */}
//                 <ul className={`nav-items ${mobileMenuOpen ? 'active' : ''}`}>
//                     <li><a href='#home' className='home'>Home</a></li>
//                     <li><a href="#about" className="text-wrapper-4">About</a></li>
//                     <li><a href="#project" className="text-wrapper-5">Project</a></li>
//                     <li><a href="#contact" className="text-wrapper-6">Contact</a></li>
//                 </ul>

//                 <button className="btn-cv"> Resume</button>
//             </nav>
//         </header>
//     );
// }


import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faInfoCircle, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.jpg';
import './navigation.css';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className='header-class'>
            <nav className='navbar'>
                <img className="logo" alt="logo Image" src={logo} />

                <ul className={mobileMenuOpen ? 'nav-list mobile-open' : 'nav-list'}>
                    <li><a href='#home'><FontAwesomeIcon icon={faHome} /></a></li>
                    <li><a href="#about"><FontAwesomeIcon icon={faInfoCircle} /></a></li>
                    <li><a href="#project"><FontAwesomeIcon icon={faProjectDiagram} /></a></li>
                    <li><a href="#contact"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                </ul>

                <button className="btn-cv">Resume</button>
                <div className="mobile-menu" onClick={toggleMobileMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </nav>
        </header>
    );
}
