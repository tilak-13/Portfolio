import React from 'react';
import { ReactTyped } from 'react-typed';
import '../styles/TypingEffect.css';

const TypingEffect = () => {
    return (
        <div className="typing-effect">
            <ReactTyped
                strings={[
                    'Software Developer',
                    'AI/ML Enthusiast',
                    'Sports Geek',
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
            />
        </div>
    );
};

export default TypingEffect;
