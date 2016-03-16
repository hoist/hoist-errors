'use strict';
var errors = require('errors');

exports.ContextError = errors.create({
  name: 'ContextError',
  code: 400,
  parent: errors.HoistError
});

exports.ApplicationRequiredError = errors.create({
  name: 'ContextApplicaitonRequiredError',
  defaultMessage: 'Context currently has no application set',
  defaultExplaination: 'The action performed requires a current application and one has not been set',
  code: 400,
  parent: exports.ContextError
});
exports.PermissionDeniedError = errors.create({
  name: 'ContextPermissionDeniedError',
  defaultMessage: 'Action not allowed',
  defaultExplaination: 'The current user does not have permission to carry out that action',
  code: 401,
  parent: exports.ContextError
});
