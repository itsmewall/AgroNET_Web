// src/components/HighlightCard.js
import React from 'react';
import { GiWheat, GiFarmTractor, GiCow } from 'react-icons/gi';

const HighlightCard = () => {
  return (
    <div className="highlight-card">
      <div className="icon">
        <GiWheat size={50} />
      </div>
      <div className="content">
        <h3>Produção de Trigo</h3>
        <p>Informações sobre a produção de trigo no Brasil.</p>
      </div>
    </div>
  );
};

export default HighlightCard;
