'use strict';
var errors = require('errors');
exports.RequestInvalidError = errors.create({
  name:'RequestInvalidError',
  code:400,
  parent: errors.DataError
});
