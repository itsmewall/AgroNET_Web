// src/components/NewsCard.js
import React from 'react';
import { GiNewspaper } from 'react-icons/gi';

const NewsCard = () => {
  return (
    <div className="news-card">
      <div className="icon">
        <GiNewspaper size={50} />
      </div>
      <div className="content">
        <h3>Notícia sobre Agronegócio</h3>
        <p>Resumo da notícia sobre agronegócio no Brasil.</p>
      </div>
    </div>
  );
};

export default NewsCard;
