'use strict';
var errors = require('errors');
exports.UserError = errors.create({
  name:'UserError',
  code:500,
  parent: errors.HoistError
});
exports.request = require('./request');
