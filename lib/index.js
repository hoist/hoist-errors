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
  git: require('./git'),
  data: require('./data'),
  user: require('./user'),
  context: require('./context'),
  connector: require('./connector'),
  bucket: require('./bucket'),
  invite: require('./invite')
};
hoistErrors.isHoistError = function (err) {
  return ((err instanceof hoistErrors.hoistError) || (err instanceof errors.HttpError));
};
module.exports = _.extend(errors, hoistErrors);
