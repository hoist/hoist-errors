'use strict';
var errors = require('errors');
exports.NotFoundError = errors.create({
  name:'FileNotFoundError',
  code:404
});
exports.hoistJson = require('./hoist_json');
