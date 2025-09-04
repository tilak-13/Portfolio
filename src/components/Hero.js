import React from 'react';
import TypingEffect from './TypingEffect';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="intro-line" data-aos="fade-right">Hi, I am</h1>
                    <h1 className="name-line" data-aos="fade-left">Tikaharu</h1>
                    <h1 className="surname-line" data-aos="fade-up">Sharma</h1>
                    <TypingEffect />
                </div>
                <div className="hero-photo">
                    <img src="/images/photo2.jpg" alt="Tikaharu Sharma" className="profile-photo" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
