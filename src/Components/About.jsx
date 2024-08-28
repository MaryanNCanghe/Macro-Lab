import React from 'react';
import './About.css';

import lab4 from '../assets/lab-2.jpg';
import lab5 from '../assets/lab-5.jpg';
import lab6 from '../assets/lab-6.jpg';
import lab7 from '../assets/lab-7.jpg';

const About = () => {
  const timelineEvents = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Our company was founded with the mission to innovate and improve lives.',
      image: lab4,
    },
    {
      year: '2021',
      title: 'First Product Launch',
      description: 'We launched our first product, which revolutionized the market.',
      image: lab5,
    },
    {
      year: '2022',
      title: 'International Expansion',
      description: 'We expanded our operations internationally.',
      image: lab6,
    },
    {
      year: '2023',
      title: 'Milestone Achievement',
      description: 'We achieved a significant milestone in our journey.',
      image: lab7,
    },
  ];

  return (
    <div className="about-container">
      <h2>About Us</h2>
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <div key={index} className={`timeline-event ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-year">{event.year}</div>
            <div className="timeline-content">
              <img src={event.image} alt={event.title} className="timeline-image" />
              <div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
