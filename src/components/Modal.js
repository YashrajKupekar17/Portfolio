// src/components/Modal.js
import React from 'react';
import ReactModal from 'react-modal';
import './Modal.css'; // Custom styles for the modal

const Modal = ({ isOpen, onRequestClose, content }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="modal-content"
            overlayClassName="modal-overlay"
            closeTimeoutMS={300} // For smooth animation
        >
            <div className="modal-header">
                <button onClick={onRequestClose} className="close-button">&times;</button>
            </div>
            <div className="modal-body">
                {content}
            </div>
        </ReactModal>
    );
};

export default Modal;
