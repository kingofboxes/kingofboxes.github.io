/* eslint-disable @typescript-eslint/no-var-requires */

// Import modules.
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');

// Create Express instance and adds cors / body-parser functionality.
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ limit: '25mb', extended: true }));
app.use(bodyParser.json({ limit: '25mb' }));

// Ignore favicon get requests.
app.get('/favicon.ico', function (req, res) {
  res.status(204);
  res.end();
});

// Uses / path as a default.
app.use('/', router);

// Start Express.
app.listen(4000, () => console.log('Express is now running on port 4000.'));
