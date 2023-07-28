const express = require('express');
const axios = require('axios');
const app = express();
const apiKey = 'N13UKEELMNB4OPYC';

app.get('/api/cotacoes', async (req, res) => {
  try {
    const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${apiKey}`);
    const data = response.data;
    const timeSeries = data['Time Series (5min)'];
    const latestTimestamp = Object.keys(timeSeries)[0];
    const latestQuote = timeSeries[latestTimestamp];
    res.json(latestQuote);
  } catch (error) {
    console.error('Erro ao obter cotação do dólar:', error.message);
    res.status(500).json({ error: 'Erro ao obter cotação do dólar' });
  }
});


const port = 3001;
app.listen(port, () => {
  console.log(`Servidor backend rodando na porta ${port}`);
});
