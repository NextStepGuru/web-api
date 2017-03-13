'use strict';

const Joi = require('joi');
const Config = require('../../runtime/routes').tracking;

module.exports = {
  log: {
    payload: {
      p: Joi.object().required(),
      u: Joi.string().required(),
      r: Joi.string().required(),
      l: Joi.object().required(),
      e: Joi.object().required()
    }
  },

  find: {

  }
};
