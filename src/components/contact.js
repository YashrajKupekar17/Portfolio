// Contact.js
import React, { useEffect, useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [text, setText] = useState('');
    const contactText = "Let's get in touch! You can reach out to me via email at ykupekar007@gmail.com or connect with me on LinkedIn.";

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < contactText.length) {
                setText(prevText => prevText + contactText[currentIndex]);
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="contact">
            <h1 className="contact-heading">Contact Me</h1>
            <p className="contact-content">{text}</p>
            <div className="social-icons">
                <a href="mailto:ykupekar007@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-envelope"></i>
                </a>
                <a href="https://in.linkedin.com/in/yashraj-kupekar-8b3a58243" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                {/* Add more social media icons and links here */}
            </div>
        </div>
    );
};

export default Contact;
