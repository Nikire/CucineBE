// Helpers
const errorHandler = require('@/middlewares/errorHandler');
const jsonResponses = require('@/middlewares/jsonResponses');
// Require Express
const express = require('express');
const routes = require('@/routes');

// Middlewares
const morgan = require('morgan');
const cors = require('cors');

// Create Express app
const server = express();

// Setup Express middleware
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(jsonResponses());
server.use(morgan('dev'));
server.use(cors());

// Setup routes
server.use('/', routes);

// Error handler
server.use(errorHandler());

module.exports = server;
