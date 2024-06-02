// src/components/CustomModal.js
import React from 'react';
import './CustomModal.css';

const CustomModal = ({ isOpen, onClose, content }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>&times;</button>
                <div className="modal-body">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default CustomModal;
