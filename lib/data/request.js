'use strict';
var errors = require('errors');
exports.InvalidError = errors.create({
  name: 'DataRequestInvalidError',
  code: 400,
  parent: errors.DataError
});
