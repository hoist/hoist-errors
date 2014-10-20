'use strict';
var errors = require('errors');
exports.NotFoundError = errors.create({
  name:'ModelNotFoundError',
  code:404,
  parent: errors.HoistError
});
exports.application = require('./application');
exports.organisation = require('./organisation');
