'use strict';
var errors = require('errors');
exports.NotFoundError = errors.create({
  name:'ModelNotFoundError',
  code:404,
  parent: errors.HoistError
});
exports.application = require('./application');
exports.appUser = require('./app_user');
exports.event = require('./event');
exports.organisation = require('./organisation');
