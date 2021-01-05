/* eslint-disable @typescript-eslint/no-var-requires */

// Import modules.
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');
const https = require('https');
const fs = require('fs');

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

var key = fs.readFileSync(__dirname + '/certsFiles/privkey.pem');
var cert = fs.readFileSync(__dirname + '/certsFiles/fullchain.pem');
var credentials = {
  key: key,
  cert: cert
};

var httpsServer = https.createServer(credentials, app);
httpsServer.listen(4000, () => {
  console.log("Express is listening on port 4000.")
});
