const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require("morgan");

const globalPath = require("./helpers/pathFile");

require("dotenv").config;
const port = process.env.PORT || 3000;

// parse application/json
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const renderFile = path.resolve(__dirname + globalPath("/public/index.html"));
  res.sendFile(renderFile);
});

const apiV1 = require("./routes/apiV1/auth.route");
app.use("/apiV1", apiV1);

const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
})