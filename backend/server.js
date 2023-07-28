const express = require('express');
const cors = require('cors');
const adminRoute = require('./routes/admin');
const axios = require('axios');
const apiKey = 'N13UKEELMNB4OPYC';

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use('/', adminRoute);

app.get('/api/cotacoes', async (req, res) => {
  try {
    const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=USD&interval=5min&apikey=${apiKey}`);
    const data = response.data['Time Series (5min)'];

    // Extract the latest entry (most recent data)
    const latestEntry = Object.entries(data)[0];
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

    res.json(result);
  } catch (error) {
    console.error('Erro ao obter cotação do dólar:', error.message);
    res.status(500).json({ error: 'Erro ao obter cotação do dólar' });
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`Servidor backend rodando na porta ${port}`);
});
