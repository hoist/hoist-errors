'use strict';
var errors = require('errors');
exports.InvalidError = errors.create({
  name:'UserRequestInvalidError',
  code:400,
  parent: errors.UserError
});
