const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

app.get('/api/time', (req, res) => {
  res.json({ currentTime: new Date().toISOString() });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://0.0.0.0:${port}`);
});
