import React from 'react';
import './MiniCard.css'; // create this file and import it

const MiniCard = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image"/>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default MiniCard;