/* eslint-disable @typescript-eslint/no-var-requires */

// Import Express.
const express = require('express');

// Import controller.
const controller = require('./controller');

// Create a new instance of a router and route the different routes to the functions inside the controller.
const router = express.Router();
router.get('/wanikani', controller.sendWKStats);
router.get('/maimai', controller.sendMMStats);

// Export the router.
module.exports = router;
