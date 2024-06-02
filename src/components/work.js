// src/components/Work.js
import React, { useState } from 'react';
import './section.css'; // Import your CSS file
import videoSource1 from '../assets/tic-tac-toe-animated.mp4'; // Import your first video file
import videoSource2 from '../assets/trading_app.mp4'; // Import your second video file
import videoSource3 from '../assets/snake_and_ladder.mp4'; // Import your third video file
import videoSource4 from '../assets/data_analysis.mp4'; // Import your fourth video file

const Work = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const openModal = (content) => {
        setModalContent(content);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <section id="work" className="work-section">
            <div className="work-content">
                <h2>MY WORK</h2>
                <p>Some text about your work...</p>
            </div>
            <div className="videos-container">
                <div className="video-wrapper" onClick={() => openModal('Description of Project 1')}>
                    <video autoPlay loop muted>
                        <source src={videoSource1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h3>Tic-Tac-Toe</h3>
                </div>
                <div className="video-wrapper" onClick={() => openModal('Description of Project 2')}>
                    <video autoPlay loop muted>
                        <source src={videoSource2} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h3>Trading app using C++</h3>
                </div>
                <div className="video-wrapper" onClick={() => openModal('Description of Project 3')}>
                    <video autoPlay loop muted>
                        <source src={videoSource3} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h3>Snake and Ladder</h3>
                </div>
                <div className="video-wrapper" onClick={() => openModal('Description of Project 4')}>
                    <video autoPlay loop muted>
                        <source src={videoSource4} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h3>Data analysis for Aerofit and Yulu</h3>
                </div>
            </div>
            {modalVisible && (
                <div className={`custom-modal-overlay ${modalVisible ? 'show' : ''}`}>
                    <div className="custom-modal-content">
                        <button className="custom-close-button" onClick={closeModal}>×</button>
                        <p>{modalContent}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Work;
