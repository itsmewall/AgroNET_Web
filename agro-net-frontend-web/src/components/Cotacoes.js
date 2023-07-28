import React, { useState, useEffect } from 'react';

const Cotacoes = () => {
  const [cotacao, setCotacao] = useState(null);

  useEffect(() => {
    const apiKey = 'N13UKEELMNB4OPYC';
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=USD&interval=5min&apikey=${apiKey}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then(data => {
        const timeSeries = data['Time Series (5min)'];
        const latestEntry = Object.entries(timeSeries)[0];
        const timestamp = latestEntry[0];
        const priceData = latestEntry[1];
        const openPrice = priceData['1. open'];
        const highPrice = priceData['2. high'];
        const lowPrice = priceData['3. low'];
        const closePrice = priceData['4. close'];

        const result = {
          timestamp,
          open: openPrice,
          high: highPrice,
          low: lowPrice,
          close: closePrice,
        };
        console.log('Cotação do dólar:', result);

        setCotacao(result);
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }, []);

  return (
    <div className="cotacoes">
      {cotacao ? (
        <div className="cotacao-data">
          <p>Timestamp: {cotacao.timestamp}</p>
          <p>Abertura: {cotacao.open}</p>
          <p>Máxima: {cotacao.high}</p>
          <p>Mínima: {cotacao.low}</p>
          <p>Fechamento: {cotacao.close}</p>
        </div>
      ) : (
        <p>Carregando cotação...</p>
      )}
    </div>
  );
};

export default Cotacoes;
