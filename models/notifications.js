'use strict';

module.exports = {

  identity: 'notifications',
  tableName: 'notifications',

  connection: 'omoes',

  attributes: {
    text: {
      type: 'string',
      required: true
    },
    // belongs to
    userId: {
      type: 'string',
      model: 'users',
      required: true
    }
  },

  autoPK: true,

  autoCreatedAt: true,
  autoUpdatedAt: true
};
