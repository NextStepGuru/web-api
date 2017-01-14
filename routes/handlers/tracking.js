'use strict';

module.exports = {
  find: (request, reply) => {

    return reply({success:true});
  },
  log: (request, reply) => {

    return reply({success:true, logID: request.pre.tracking.id});
  }
};
