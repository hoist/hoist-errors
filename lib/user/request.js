'use strict';
var errors = require('errors');
exports.InvalidError = errors.create({
  name: 'UserRequestInvalidError',
  code: 400,
  parent: errors.UserError
});
exports.IPLockedError = errors.create({
  name: 'UserRequestIPLockedError',
  defaultMessage: 'Your computer has been temporarily locked out due to too many incorrect login attempts',
  defaultResponse: 'Please wait 2 minutes and try again',
  code: 400,
  parent: errors.UserError
});
exports.AccountLockedError = errors.create({
  name: 'UserRequestAccountLockedError',
  defaultMessage: 'Your account is currently locked due to too many incorrect login attempts',
  defaultResponse: 'Please wait 2 minutes and try again',
  code: 400,
  parent: errors.UserError
});
