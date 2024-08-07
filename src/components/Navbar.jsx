
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../assets/logo.jpg';
import './styling/navigation.css';
import resume from '../assets/Afika-Shwashwa.pdf'


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
                <p><a href='#portfolio'><img className="logo" alt="logo Image" src={logo} /></a></p>
                <div className='drop'>
                    <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>

                    <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                        {/* <li><a href='#portfolio' className='home' onClick={closeMenu}>Home</a></li> */}
                        <li><a href="#about" className="text-wrapper-4" onClick={closeMenu}>About</a></li>
                        <li><a href="#projects" className="text-wrapper-5" onClick={closeMenu}>Project</a></li>
                        <li><a href="#education" className="text-wrapper-4" onClick={closeMenu}>Education</a></li>
                        <li><a href="#contact" className="text-wrapper-6" onClick={closeMenu}>Contact</a></li>
                    </ul>
                </div>
                {/* <button className="btn-cv"><a href={resume} target='_blank'>Resume</a></button> */}
                                <button className="btn-cv"></button>

            </nav>
        </header>
    );
}
