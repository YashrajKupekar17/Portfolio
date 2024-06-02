// Text.js
import React, { useEffect, useState } from 'react';
import './Text_j.css';

const AboutMe = () => {
    const [text, setText] = useState('');
    const aboutMeText = "Hi there! I'm Yashraj Kupekar, and I'm driven by a passion for technology and problem-solving. With a keen interest in robotics, AI/ML, and software development, I'm always exploring new ways to innovate and create. Whether it's diving into the intricacies of machine learning algorithms or tackling complex coding challenges, I thrive on the excitement of pushing boundaries and finding solutions. Let's connect and embark on this journey of exploration and discovery together!";

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < aboutMeText.length) {
                setText(prevText => prevText + aboutMeText[currentIndex]);
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="about-me">
            <h1 className="about-me-heading">About Me</h1>
            <p className="about-me-content">{text}</p>
        </div>
    );
};

export default AboutMe;
