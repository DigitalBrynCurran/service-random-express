const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3005;

const routes = require('./routes');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/item', routes);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});