'use strict';
var errors = require('errors');
exports.IncorrectError = errors.create({
  name: 'UserCredentialsIncorrectError',
  code: 401,
  defaultMessage: 'The username and/or password were not correct',
  defaultExplaination: 'The username and/or password were not correct',
  defaultResponse: 'The username and/or password were not correct',
  parent: errors.UserError
});

exports.NoPasswordError = errors.create({
  name: 'UserNoPasswordErrorError',
  code: 401,
  defaultMessage: 'You currently don\'t have a password setup, set a password for your account at https://portal.hoist.io',
  defaultExplaination: 'You currently don\'t have a password setup',
  defaultResponse: 'You currently don\'t have a password setup',
  parent: errors.UserError
});
