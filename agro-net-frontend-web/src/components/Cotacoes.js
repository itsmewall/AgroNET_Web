// src/components/Cotacoes.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cotacoes.css'; // Importando diretamente da mesma pasta


const Cotacoes = () => {
  const [cotacao, setCotacao] = useState(null);

  useEffect(() => {
    const fetchCotacao = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/cotacoes');
        setCotacao(response.data);
      } catch (error) {
        console.error('Erro ao obter cotação do dólar:', error.message);
      }
    };

    fetchCotacao();
  }, []);

  return (
    <div className="cotacoes">
      <h3>Dólar</h3>
        {cotacao ? (
          <div className="cotacao-data">
            <p><strong>Última Atualização:</strong> {cotacao.timestamp}</p>
            <p><strong>Abertura:</strong> {cotacao.open}</p>
            <p><strong>Máxima:</strong> {cotacao.high}</p>
            <p><strong>Mínima:</strong> {cotacao.low}</p>
            <p><strong>Fechamento:</strong> {cotacao.close}</p>
          </div>
        ) : (
          <p>Carregando cotação...</p>
        )}
    </div>
  );
};

export default Cotacoes;
