'use strict';

const Config = require('./config/tracking');

module.exports = (server, options, request) => [
  {
    method: 'GET',
    path: '/tracking/log',
    config: Config.find
  },
  {
    method: 'POST',
    path: '/tracking/log',
    config: Config.log
  }
];
