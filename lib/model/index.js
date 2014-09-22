'use strict';
var errors = require('errors');
exports.NotFoundError = errors.create({
  name:'ModelNotFoundError',
  code:404
});
exports.application = require('./application');
