'use strict';

module.exports = {
  env: 'production',

  product: {
    name: 'webApi'
  },

  server: {
    webApi: {
      host: '0.0.0.0',
      port: process.env.PORT || 3000,
      tls: false
    }
  },

  chairo: {
    options: {
      // prevent seneca timeout error
      // https://github.com/senecajs/seneca-transport/issues/23
      timeout: 999999999
    }
  },

  cache: {
    mainCache: {
      engine: 'catbox-memory',
      name: 'mainCache',
      partition: 'web-api'
    }
  },

  dogwater: {
    connections: {
      omoes: {
        adapter: 'sails-mongo',
        host: 'localhost',
        port: 27017,
        database: 'omoes'
      }
    },
    adapters: {
      'sails-mongo': require('sails-mongo')
    },
    models: require('path').resolve(__dirname, '..', 'models')
  },

  jobs: {
    address: 'mongodb://localhost:27017/omoes',
    collection: 'jobs',
    frequency: '5 minutes',
    concurrency: 20
  },

  apiPrefix: '/api/v2',

  deploy: {
    branch: 'master',
    servers: 'NextStepGuru@vm-address-here.com',
    deployTo: '/home/NextStepGuru/webApi'
  }
};
