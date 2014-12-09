'use strict';
var errors = require('errors');
exports.InvalidError = errors.create({
  name:'ConnectorRequestInvalidError',
  code:400,
  parent: errors.ConnectorError
});
exports.UnauthorizedError = errors.create({
  name:'ConnectorRequestUnauthorizedError',
  code:401,
  parent: errors.ConnectorError
});

