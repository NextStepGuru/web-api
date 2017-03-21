'use strict';

const Joi = require('joi');
const Config = require('../../runtime/routes').tracking;

module.exports = {
  log: {
    payload: {
      p: Joi.object(),
      u: Joi.string(),
      r: Joi.any().optional(),
      l: Joi.object(),
      e: Joi.object(),
      j: Joi.array().optional()
    }
  },

  find: {

  }
};
