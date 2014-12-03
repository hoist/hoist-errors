'use strict';
var errors = require('errors');
exports.TimeoutError = errors.create({
  name: 'TimeoutError',
  code: 500,
  parent: errors.HoistError
});
exports.InvalidTimeoutValueError = errors.create({
  name: 'InvalidTimeoutValueError',
  defaultMessage: 'The specified value for timeout length was invalid',
  defaultExplaination: 'The specified value for timeout length was invalid',
  defaultResponse: 'Ensure you\'ve passed a numeric value between 0 and 30000',
  code: 500,
  parent: errors.TimeoutError
});
