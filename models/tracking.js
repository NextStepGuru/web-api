'use strict';

module.exports = {

  identity: 'tracking',
  tableName: 'tracking',

  connection: 'omoes',

  attributes: {
    id: {
      columnName: 'trackingID',
      primarykey: true,
      autoIncrement: true
    },
    emopID: {
      type: 'string'
    },
    ehid: {
      type: 'string'
    },
    cartID: {
      type: 'integer'
    },
    orderID: {
      type: 'integer'
    },
    ga: {
      type: 'string'
    },
    url: {
      type: 'string'
    },
    uri: {
      type: 'string'
    },
    utmSource: {
      type: 'string'
    },
    utmCampaign: {
      type: 'string'
    },
    utmMedium: {
      type: 'string'
    },
    utmTerm: {
      type: 'string'
    },
    utmContent: {
      type: 'string'
    },
    gcid: {
      type: 'string'
    },
    params: {
      type: 'json'
    }

  },
  migrate: 'safe',
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false
};
