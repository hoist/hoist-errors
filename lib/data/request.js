'use strict';
var errors = require('errors');
exports.InvalidError = errors.create({
  name:'RequestInvalidError',
  code:400,
  parent: errors.DataError
});
