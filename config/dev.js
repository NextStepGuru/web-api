'use strict';

module.exports = {
  env: 'development',

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
            adapter: 'sails-mysql',
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'Carter$1Noah$1',
            database: 'omoes'
        }
    },
    adapters: {
      'sails-mysql': require('sails-mysql'),
      'sails-mongo': require('sails-mongo')
    },
    models: require('path').resolve(__dirname, '..', 'models')
  },



  apiPrefix: '/api/v2'
};
