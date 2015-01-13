'use strict';
var errors = require('errors');
exports.MismatchError = errors.create({
  name:'EventApplicationMismatchError',
  code:400,
  parent: errors.EventError
});
