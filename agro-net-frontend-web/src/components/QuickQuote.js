// src/pages/Home.js
import React from 'react';
import NavBar from '../components/NavBar';
import HighlightCard from '../components/HighlightCard';
import NewsCard from '../components/NewsCard';
import QuickQuote from '../components/QuickQuote';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <NavBar />
      <div className="container">
        <div className="section">
          <h2>Destaque</h2>
          <div className="highlight-cards">
            <HighlightCard
              imageSrc="https://via.placeholder.com/300"
              title="Card Destaque 1"
              description="Descrição do card de destaque 1."
            />

            <HighlightCard
              imageSrc="https://via.placeholder.com/300"
              title="Card Destaque 2"
              description="Descrição do card de destaque 2."
            />
          </div>
        </div>

        <div className="section">
          <h2>Notícias</h2>
          <div className="news-cards">
            <NewsCard
              title="Notícia 1"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae ex at tellus vestibulum iaculis at vel tortor."
            />

            <NewsCard
              title="Notícia 2"
              content="Ut vel massa vitae ante tincidunt auctor a sit amet enim. Sed in odio non elit vulputate volutpat."
            />
          </div>
        </div>

        <div className="section">
          <h2>Cotações Rápidas</h2>
          <ul className="quick-quotes-list">
            <QuickQuote item="Soja" price="R$ 150,00/sc" />
            <QuickQuote item="Milho" price="R$ 90,00/sc" />
            <QuickQuote item="Algodão" price="R$ 250,00/sc" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
