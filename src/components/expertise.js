// src/components/Expertise.js
import React, { useState } from 'react';
import './section.css'; // Import your CSS file
import expertiseImage from '../assets/expertise_bg.png'; // Import your image file
import CustomModal from './CustomModal'; // Import the CustomModal component

const expertiseDetails = [
    {
        title: 'Software Development',
        description: 'I have experience in software development, including programming languages, frameworks, and tools.',
    },
    {
        title: 'Frontend Dev React, NextJS',
        description: 'Passionate about UI/UX.Development experience in HTML, CSS, JS, React and NextJS frameworks.',
    },
    {
        title: 'Problem Solving',
        description: 'Passionate about solving problems and turning the solution into code.',
    },
];

const Expertise = React.forwardRef((props, ref) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const openModal = (content) => {
        setModalContent(content);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <section id="expertise" className="expertise-section" ref={ref}>
            <h2>MY EXPERTISE</h2>
            <div className="expertise-box">
                {expertiseDetails.map((item, index) => (
                    <div
                        key={index}
                        className="expertise-item"
                        onClick={() => openModal(item.description)}
                    >
                        <h3>{item.title}</h3>
                        {/* <p>Click to learn more</p> */}
                    </div>
                ))}
            </div>
            <img src={expertiseImage} alt="Background" className="expertise-background-image" />
            <CustomModal
                isOpen={modalIsOpen}
                onClose={closeModal}
                content={modalContent}
            />
        </section>
    );
});

export default Expertise;
