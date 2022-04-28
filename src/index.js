const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config;
const port = process.env.PORT || 3000;

// parse application/json
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  const renderFile = path.resolve(__dirname + '/public/index.html');
  res.sendFile(renderFile);
});

const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})