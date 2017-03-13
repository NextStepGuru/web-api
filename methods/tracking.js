'use strict';

const Chalk = require('chalk');
const Boom = require('boom');
const _ = require('lodash');

module.exports = (server, options, request) => [
  {
    name: 'tracking.reformat',
    method: reformat
  },
  {
    name: 'tracking.log',
    method: log,
    options: {
      bind: server.waterline.collections.tracking
    }
  }
];

const log = function log(data, request, next) {

  this.create(data).exec((err, tracking) => {

    if (err) {
      console.error(Chalk.bgRed.white(err));
      return next(Boom.badImplementation());
    }

    return next(null, tracking);
  });
};

const reformat = function reformat(data, headers, next) {

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
    params : null,
    useragent : null,
    ip : null,
    referrer : null
  };

  defaults.ip = headers['x-real-ip']

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
  if (data.r) {
    defaults.referrer = data.r;
    if (defaults.referrer.length > 250) {
      defaults.referrer = defaults.referrer.substring(0,250)
    }
    delete data.r;
  }
  if (data.u) {
    defaults.useragent = data.u;
    if (defaults.useragent.length > 250) {
      defaults.useragent = defaults.useragent.substring(0,250)
    }
    delete data.u;
  }

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
  if (data.p.gclid) {
    defaults.gcid = data.p.gclid;
    delete data.p.gclid;
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