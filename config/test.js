'use strict';

module.exports = {
  env: 'test',

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

  dogwater: {
    connections: {
      omoes: {
        adapter: 'sails-mongo',
        host: 'localhost',
        port: 27017,
        database: 'test'
      }
    },
    adapters: {
      'sails-mongo': require('sails-mongo')
    },
    models: require('path').resolve(__dirname, '..', 'models')
  }

  // Uncomment to enable job queue in test environment
  // jobs: {
  //   address: 'mongodb://localhost:27017/test',
  //   collection: 'jobs',
  //   frequency: '5 minutes',
  //   concurrency: 20
  // },
  //
  // Uncomment to prefix routes in test environment
  // apiPrefix: '/api/v2'
};
