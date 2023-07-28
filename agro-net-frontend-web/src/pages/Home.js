// src/pages/Home.js
import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/Home.css';
import HighlightCard from '../components/HighlightCard';
import NewsCard from '../components/NewsCard';
import Cotacoes from '../components/Cotacoes';

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="container">
        <div className="section">
          <h2>Destaques </h2>
          <div className="highlight-cards">
            <div className="card">
              <HighlightCard />
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Notícias</h2>
          <div className="news-cards">
            <div className="card">
              <NewsCard />
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Cotações</h2>
              <Cotacoes />     
        </div>
      </div>
    </div>
  );
}

export default Home;
