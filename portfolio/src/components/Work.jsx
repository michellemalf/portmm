import React from 'react';
import './Work.css';

import pic1 from '../assets/tictacto.png';
import pic2 from '../assets/flashcard.png';
import pic3 from '../assets/weatherapp.png';

const Work = () => {
  const cardData = [
    {
      id: 1,
      image: pic1,
      description: 'Tic-Tac-Toe Game: React and Javascript',
      link: 'https://wonderful-sand-08054e61e.4.azurestaticapps.net',
    },
    {
      id: 2,
      image: pic2,
      description: 'FlashCard App: React, Javascript',
      link: 'https://red-hill-0df8fd81e.4.azurestaticapps.net',
    },
    {
      id: 3,
      image: pic3,
      description: 'Weather Girl App: Javascript, HTML, CSS, and API',
      link: 'Link 3',
    },
  ];

  return (
    
    <section id="work" className="work-section">
      <div className="work-cards">
        {cardData.map((item) => (
          <div className="work-card" key={item.id}>
            <img src={item.image} alt={`Work ${item.id}`} />
            <div className="overlay">
              <div className="overlay-content">
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    
  );
};

export default Work;



