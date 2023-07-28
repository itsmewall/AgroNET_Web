// src/components/HighlightCard.js
import React from 'react';

function HighlightCard({ imageSrc, title, description }) {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default HighlightCard;
