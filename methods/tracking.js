'use strict';

const Chalk = require('chalk');
const Boom = require('boom');
const _ = require('lodash');

module.exports = (server, options) => [
  {
    name: 'tracking.reformat',
    method: reformat,
    options: options
  },
  {
    name: 'tracking.log',
    method: log,
    options: {
      bind: server.waterline.collections.tracking
    }
  }
];

const log = function log(data, next) {

  this
  .create(data)
  .exec((err, tracking) => {

    if (err) {
      console.error(Chalk.bgRed.white(err));
      return next(Boom.badImplementation());
    }

    return next(null, tracking);
  });
};

const reformat = function reformat(data, next) {

  let defaults = {
    emopID : null,
    ehid : null,
    cartID : 0,
    orderID : 0,
    ga : null,
    url : null,
    uri : null,
    utmSource : null,
    utmCampaign : null,
    utmMedium : null,
    utmTerm : null,
    utmContent : null,
    gcid : null,
    params : null
  };

  /* tracking */
  if (data.e.ehid) {
    defaults.ehid = data.e.ehid;
    delete data.e.ehid;
  }
  if (data.e.emopid) {
    defaults.emopID = data.e.emopid;
    delete data.e.emopid;
  }
  if (data.e.cid) {
    defaults.cartID = data.e.cid;
    delete data.e.cid;
  }
  if (data.e.oid) {
    defaults.orderID = data.e.oid;
    delete data.e.oid;
  }
  if (data.e.ga) {
    defaults.ga = data.e.ga;
    delete data.e.ga;
  }

  /* location */
  if (data.p.utm_source) {
    defaults.utmSource = data.p.utm_source;
    delete data.p.utm_source;
  }
  if (data.p.utm_campaign) {
    defaults.utmCampaign = data.p.utm_campaign;
    delete data.p.utm_campaign;
  }
  if (data.p.utm_medium) {
    defaults.utmMedium = data.p.utm_medium;
    delete data.p.utm_medium;
  }
  if (data.p.utm_term) {
    defaults.utmTerm = data.p.utm_term;
    delete data.p.utm_term;
  }
  if (data.p.utm_content) {
    defaults.utmContent = data.p.utm_content;
    delete data.p.utm_content;
  }
  if (data.p.gcid) {
    defaults.gcid = data.p.gcid;
    delete data.p.gcid;
  }

  /* location */
  if (data.l.d) {
    defaults.url = data.l.d;
    delete data.l.d;
  }
  if (data.l.s) {
    defaults.uri = data.l.s;
    delete data.l.s;
  }

  /* additional params */
  if (Object.keys(data.p).length) {
    defaults.params = data.p;
  }

  return next(null, defaults);
}