'use strict';
var errors = require('errors');
exports.NotFoundError = errors.create({
  name:'FileNotFoundError',
  code:404,
  parent: errors.HoistError
});
exports.hoistJson = require('./hoist_json');
