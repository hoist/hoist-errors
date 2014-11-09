'use strict';
var errors = require('errors');
exports.InvalidError = errors.create({
  name:'ConnectorRequestInvalidError',
  code:400,
  parent: errors.UserError
});
