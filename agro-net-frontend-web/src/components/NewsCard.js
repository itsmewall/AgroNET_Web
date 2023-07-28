// src/components/NewsCard.js
import React from 'react';

function NewsCard({ title, content }) {
  return (
    <div className="news-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default NewsCard;
