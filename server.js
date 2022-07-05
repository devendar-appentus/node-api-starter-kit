
const express = require('express');
const morgan = require('morgan')
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./config/routes/test');

const PORT = process.env.PORT || 7000;
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors())
app.use('/api/v1', routes);

// set port, listen for requests

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}.`);
});