'use strict';

const Joi = require('joi');
const Config = require('../../runtime/routes').tracking;

module.exports = {
  create: {
    payload: {
      username: Joi.string().required()
    }
  },

  find: {

  }
};
