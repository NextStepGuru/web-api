'use strict';

const Validations = require('../validations/tracking');
const Handlers = require('../handlers/tracking');

module.exports = {
  find: {
    validate: Validations.find,
    handler: Handlers.find
  },
  create: {
    validate: Validations.create,
    pre: [
      //{ method: 'tracking.create(payload)', assign: 'tracking' },
      { method: 'utils.buildResourceLocation(path, pre.tracking.trackingID)', assign: 'location' }
    ],
    handler: Handlers.create
  }
};
