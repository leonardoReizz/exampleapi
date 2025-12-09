const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Contador para alternar entre 200 e 500
let requestCount = 0;

app.use(express.json());

// Endpoint que alterna entre 200 e 500
app.get('/api', (req, res) => {
  requestCount++;
  
  // Alterna entre 200 (ímpar) e 500 (par)
  if (requestCount % 2 === 1) {
    // Requisição ímpar: retorna 200
    res.status(200).json({
      status: 200,
      message: 'Success',
      requestNumber: requestCount
    });
  } else {
    // Requisição par: retorna 500
    res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
      requestNumber: requestCount
    });
  }
});

// Endpoint para resetar o contador (opcional)
app.post('/api/reset', (req, res) => {
  requestCount = 0;
  res.status(200).json({
    message: 'Counter reset',
    requestCount: requestCount
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api`);
});

