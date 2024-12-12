import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-content">
                <h2>About Me</h2>
                <p>
                    I am Tikaharu Sharma, a software developer with a passion for Machine Learning and Artificial Intelligence.
                    I graduated from Pulchowk Campus with a degree in Computer Engineering and have professional experience
                    as a full-stack developer. My goal is to build innovative solutions that make a meaningful impact.
                </p>
                <div className="skills">
                    <h4>Technical Skills</h4>
                    <ul className="skills-list">
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>ReactJS</li>
                        <li>NodeJS</li>
                        <li>Machine Learning</li>
                        <li>SQL</li>
                        <li>Django</li>
                        <li>DSA</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
