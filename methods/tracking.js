'use strict';

const Chalk = require('chalk');
const Boom = require('boom');
const _ = require('lodash');

module.exports = (server, options) => [
  {
    name: 'tracking.reformat',
    method: reformat
  },
  {
    name: 'tracking.create',
    method: create,
    options: {
      bind: server.waterline.collections.tracking
    }
  }
];

const create = function create(data, next) {

  this
  .create(data)
  .exec((err, pet) => {

    if (err) {
      console.error(Chalk.bgRed.white(err));
      return next(Boom.badImplementation());
    }
    return next(null, pet);
  });
};

const reformat = function reformat(data, next) {
  console.log(data);

  return next(null, data);
}