import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
   <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          MACROLAB
        </Link>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-item" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" className="nav-item" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/services" className="nav-item" onClick={toggleMenu}>
            Services
          </Link>
          <Link to="/news" className="nav-item" onClick={toggleMenu}>
            News
          </Link>
          <Link to="/contact" className="nav-item" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
        <div className="nav-icon" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  )
}

export default Header