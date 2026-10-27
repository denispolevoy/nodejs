const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.send('Hello from Expres!!!');
});

app.listen(3000);
