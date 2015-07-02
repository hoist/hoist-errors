'use strict';
var _ = require('lodash');
var errors = require('errors');
var HoistErrors = {
  HoistError: errors.create({
    name: 'HoistError',
    code: 500
  }),
  model: require('./model'),
  files: require('./files'),
  git: require('./git'),
  data: require('./data'),
  user: require('./user'),
  context: require('./context'),
  connector: require('./connector'),
  bucket: require('./bucket'),
  event: require('./event'),
  invite: require('./invite'),
  timeout: require('./timeout')
};
HoistErrors.hoistError = HoistErrors.HoistError;
HoistErrors.isHoistError = function (err) {
  return ((err instanceof HoistErrors.HoistError) || (err instanceof errors.HttpError));
};
module.exports = _.extend(errors, HoistErrors);
