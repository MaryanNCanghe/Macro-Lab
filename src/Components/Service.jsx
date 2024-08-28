import React, { useState } from 'react';
import './Service.css'; // Optional: CSS for styling

const Service = ({ title, description, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="service">
      <div className="service-header" onClick={toggleOpen}>
        <h3>{title}</h3>
        <button>{isOpen ? 'see less' : 'see more'}</button>
      </div>
      {isOpen && (
        <div className="service-content">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Service;
