'use strict';
var errors = require('errors');
exports.DataError = errors.create({
  name:'DataError',
  code:500,
  parent: errors.HoistError
});
exports.request = require('./request');
