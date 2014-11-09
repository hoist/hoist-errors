'use strict';
var errors = require('errors');
exports.IncorrectError = errors.create({
  name:'UserCredentialsIncorrectError',
  code:401,
  defaultMessage: 'The username and/or password were not correct',
  defaultExplaination: 'The username and/or password were not correct',
  defaultResponse: 'The username and/or password were not correct',
  parent: errors.UserError
});
