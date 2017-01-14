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
      { method: 'tracking.reformat(payload)', assign: 'tracking' },
      { method: 'tracking.log(pre.tracking)', assign: 'tracking' }
    ],
    handler: Handlers.log
  }
};
