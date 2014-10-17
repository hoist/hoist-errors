'use strict';
var _ = require('lodash');
var errors = require('errors');
var hoistErrors = {
  hoistError: errors.create({
    name: 'HoistError',
    code: 500
  }),
  model: require('./model'),
  files: require('./files'),
  git: require('./git')
};
hoistErrors.isHoistError = function (err) {
  return (err instanceof hoistErrors.hoistError);
};
module.exports = _.extend(errors, hoistErrors);
