
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../assets/logo.jpg';
import './styling/navigation.css';
import resume from '../assets/Afika-Shwashwa.pdf'
import { Link, NavLink } from 'react-router-dom';
import About from './About';


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
      
        const handleDocumentClick = (e) => {
            if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
       
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [menuOpen]);

    return (
        <header className='header-class'>
            <nav ref={navRef} className={`navbar ${menuOpen ? 'open' : ''}`}>
                <p><Link to='/'><img className="logo" alt="logo Image" src={logo} /></Link></p>
                <div className='drop'>
                    <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>

                    <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                        {/* <li><Link to='/'className='home' onClick={closeMenu}>Home</Link></li> */}
                        <li><Link  to='/about' className="text-wrapper-4" id='link' onClick={closeMenu}>About</Link></li>
                        <li><Link to='/projects' className="text-wrapper-5" onClick={closeMenu}>Project</Link></li>
                        <li><Link  to="/education" className="text-wrapper-4" onClick={closeMenu}>Education</Link></li>
                        <li><Link to="/contact" className="text-wrapper-6" onClick={closeMenu}>Contact</Link></li>
                    </ul>
                </div>
                {/* <button className="btn-cv"><a href={resume} target='_blank'>Resume</a></button> */}
                <button className="btn-cv"></button>

            </nav>
        </header>
    );
}
