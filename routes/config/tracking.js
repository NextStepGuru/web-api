'use strict';

const Validations = require('../validations/tracking');
const Handlers = require('../handlers/tracking');

module.exports = {
  find: {
    validate: Validations.find,
    handler: Handlers.find
  },
  log: {
    validate: Validations.log,
    pre: [
      { method: 'tracking.reformat(payload, info)', assign: 'tracking', failAction: 'log' },
      { method: 'tracking.log(pre.tracking, request)', assign: 'tracking', failAction: 'log' }
    ],
    handler: Handlers.log
  }
};
