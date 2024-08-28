// News.jsx
import React, { useState } from 'react';
import './News.css'; // Optional: CSS for styling
import Modal from './Modal'; // Import your Modal component

import DNAImage from '../assets/DNA.jpg'; // Adjust the path as needed


const News = () => {
  // Example data (you can replace this with your actual data)
  const newsArticles = [
    {
      id: 1,
      title: 'New Product Launch',
      description: 'We have launched an exciting new product!',
      date: 'June 28, 2024',
      
      image: DNAImage,
    },
    {
      id: 2,
      title: 'Company Milestone Achieved',
      description: 'We reached a significant milestone in our company history.',
      date: 'June 25, 2024',
     
      image: DNAImage,
    },
    // Add more news articles as needed
  ];

  const [selectedArticle, setSelectedArticle] = useState(null);

  const openModal = (article) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="news-container">
      <h2>Latest News</h2>
      {/* Check if an article is selected to hide the list */}
      {selectedArticle ? (
        <div className="news-item">
          <img src={selectedArticle.image} alt="News" className="news-image" />
          <div className="news-content">
            <h3>{selectedArticle.title}</h3>
            <p>{selectedArticle.description}</p>
            <p className="news-date">{selectedArticle.date}</p>
          </div>
        </div>
      ) : (
        // Display the list of news articles
        newsArticles.map((article) => (
          <div key={article.id} className="news-item">
            <img src={article.image} alt="News" className="news-image" />
            <div className="news-content">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <p className="news-date">{article.date}</p>
              <button onClick={() => openModal(article)}>Read More</button>
            </div>
          </div>
        ))
      )}
      {/* Modal for displaying article details */}
      <Modal isOpen={selectedArticle !== null} onClose={closeModal} article={selectedArticle} />
    </div>
  );
};

export default News;