import React from 'react';
import './section.css'; // Import section styles
import AnimatedButton from './AnimatedButton';
import AnimatedCircle from './Animated_circle';


function Home({ scrollToNextSection }) {
    return (
        <section id="home" className="home-section">
            {/* Add background image */}
            <div className="background-image"></div>
            <div className="background-overlay"></div>
            
            {/* Add animated circle */}
            <AnimatedCircle />

            {/* Add text content */}
            <div className="centered-text">
                <h1>Yashraj Kupekar</h1>
                <p>Software Engineer</p>
            </div>
            <AnimatedButton onClick={scrollToNextSection} />
        </section>
    );
}

export default Home;
