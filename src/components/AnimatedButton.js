import React from 'react';
import './button-animation.css';
function AnimatedButton({ onClick }) {
    return (
        <svg className="arrows" onClick={onClick}>
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
    );
}

export default AnimatedButton;
