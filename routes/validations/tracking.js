'use strict';

const Joi = require('joi');
const Config = require('../../runtime/routes').tracking;

module.exports = {
  log: {
    payload: {
      p: Joi.object().required(),
      l: Joi.object().required(),
      e: Joi.object().required()
    }
  },

  find: {

  }
};
