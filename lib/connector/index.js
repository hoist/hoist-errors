'use strict';
var errors = require('errors');
exports.ConnectorError = errors.create({
  name:'ConnectorError',
  code:500,
  parent: errors.HoistError
});
exports.request = require('./request');
