import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Importe para estilos adicionais se necessário

// Importe da imagem de background
import backgroundImage from './assets/DNA1.webp';

import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import News from './Components/News';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div
        className="App"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/News" element={<News />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
