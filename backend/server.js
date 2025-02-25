const express = require('express');
const path = require('path');
const webApp = express();

webApp.use(express.static(path.join(__dirname, '../frontend')));

webApp.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/index.html'));
})

webApp.listen(3000, () => {
  console.log("http://localhost:3000/")
})