const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hola, mundo!!! \n Autor: Jorge A Moreno Guerrero');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});