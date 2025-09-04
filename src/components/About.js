import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-content">
                <h2>About Me</h2>
                <p>
  Hi, I’m Tikaharu Sharma, a curious mind currently pursuing my Master’s in Computer Science 
  at the University of Florida. My journey started back home in Nepal, where I completed 
  my Computer Engineering degree at Pulchowk Campus. Over the years, I’ve fallen in love 
  with the world of Artificial Intelligence and Machine Learning—fields that excite me 
  because of their potential to solve real-world problems in creative ways. 
  
  I’ve built projects ranging from AI-powered resume analyzers and recommendation systems 
  to full-stack web apps. For me, these projects aren’t just technical experiments—they’re 
  ways of turning ideas into something tangible and useful. 

  Outside of academics and coding, you’ll often find me talking (a lot!) about sports—football, 
  cricket, basketball, and chess are my favorites. They’ve taught me discipline, teamwork, 
  and strategy, which I try to carry into everything I do. 

  At my core, I’m someone who loves learning, sharing ideas, and building things that 
  bring value to others. My goal is to grow as a researcher and developer, while also 
  staying true to the passions that make me who I am.
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
