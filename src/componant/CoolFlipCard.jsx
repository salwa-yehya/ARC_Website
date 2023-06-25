import React from 'react';
import './CoolFlipCard.css'; // create this file and import it

const CoolFlipCard = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image"/>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default CoolFlipCard ;