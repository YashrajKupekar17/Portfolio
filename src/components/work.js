// src/components/Work.js
import React from 'react';
import './section.css'; // Import your CSS file
import videoSource1 from '../assets/tic-tac-toe-animated.mp4'; // Import your first video file
import videoSource2 from '../assets/trading_app.mp4'; // Import your second video file

const Work = () => {
    return (
        <section id="work" className="work-section">
            <div className="work-content">
                <h2>MY WORK</h2>
                <p>Some text about your work...</p>
            </div>
            <div className="videos-container">
                <div className="video-wrapper">
                    <video autoPlay loop muted>
                        <source src={videoSource1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h3>Project 1</h3>
                    <button>About Project</button>
                </div>
                <div className="video-wrapper">
                    <video autoPlay loop muted>
                        <source src={videoSource2} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h3>Project 2</h3>
                    <button>About Project</button>
                </div>
            </div>
        </section>
    );
};

export default Work;
