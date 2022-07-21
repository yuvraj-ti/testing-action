const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/healthcheck', (req, res) => {
  res.send('healthcheck World!');
});
app.get('/.healthcheck', (req, res) => {
  res.send('healthcheck World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
