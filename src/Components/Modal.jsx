// Modal.jsx
import React from 'react';
import './Modal.css'; // Optional: CSS for modal styling

const Modal = ({ isOpen, onClose, article }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
       
        <p>{article.description}</p>
        <p>{article.date}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
