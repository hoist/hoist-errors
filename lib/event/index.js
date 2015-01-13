'use strict';
var errors = require('errors');
exports.EventError = errors.create({
  name:'EventError',
  code:500,
  parent: errors.HoistError
});
exports.application = require('./application');
