import React from 'react';
import GradientBackground from './components/GradientBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import "./App.css"
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollIndicator = document.getElementById('scroll-indicator');
            if (scrollIndicator) {
                const scrollTop = document.documentElement.scrollTop;
                const scrollHeight =
                    document.documentElement.scrollHeight -
                    document.documentElement.clientHeight;
                const scrollPercent = (scrollTop / scrollHeight) * 100;
                scrollIndicator.style.width = scrollPercent + '%';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div>
            <div id="scroll-indicator"></div>
            <GradientBackground />
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </div>
    );
};

export default App;

