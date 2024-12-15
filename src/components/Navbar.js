import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <span className="logo">TS</span>
            </div>
            <ul className={`navbar-center ${menuOpen ? 'open' : ''}`}>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="navbar-right">
                <a
                    href="/CV.pdf"
                    download="Tikaharu_Sharma_CV.pdf"
                    className="download-cv-btn"
                >
                    Download my CV
                </a>
            </div>
            {/* Burger Menu Button */}
            <button className="burger-menu" onClick={toggleMenu}>
                ☰
            </button>
        </nav>
    );
};

export default Navbar;
