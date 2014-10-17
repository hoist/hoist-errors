'use strict';
var errors = require('errors');
exports.NotFoundError = errors.create({
  name: 'GitRepositoryNotFoundError',
  defaultMessage: 'The specified git repository was not found',
  defaultExplaination: 'No git repository exists at the specified path',
  defaultResponse: 'Check that you are using the correct git repository',
  code: 404,
  parent: errors.HoistError
});
exports.InvalidError = errors.create({
  name: 'GitRepositoryInvalidError',
  defaultMessage: 'Git repository seems to be invalid',
  defaultExplaination: 'There\'s something invalid about the requested git repository',
  defaultResponse: 'Check that the git repository has a master branch, and is valid',
  code: 500,
  parent: errors.HoistError
});
