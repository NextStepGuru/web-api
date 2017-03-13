'use strict';

const Chalk = require('chalk');
const _ = require('lodash');
var HAPIWebSocket = require("hapi-plugin-websocket")


exports.register = (server, options, next) => {

  if (server.settings.app.env !== 'test') {
    console.log(Chalk.bgGreen.white('Starting Socket.io server...'));
  }

  //process.on('SIGTERM', _.bind(gracefulShutdown, null, server));
  //process.on('SIGINT', _.bind(gracefulShutdown, null, server));
  //server.connection({ address: "127.0.0.1", port: 12345 })
  HAPIWebSocket;

  next();
};

exports.register.attributes = {
  name: 'socketio-plugin'
};
