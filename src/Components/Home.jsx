import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom
import './Home.css'; // Arquivo CSS para estilização (opcional)

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-text">
        <h1>Welcome to MACROLAB!</h1>
        <p>Introducing innovation to save and improve lives.</p>
        <div className="info-button-container">
          <Link to="/About" className="info-button">
            Know more
          </Link>
        </div>
      </div>
      <div className="image-container">
        {/* Imagem de fundo ou outro conteúdo visual */}
      </div>
    </div>
  );
};

export default Home;
