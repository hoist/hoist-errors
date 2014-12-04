'use strict';
var errors = require('errors');
exports.NotFoundError = errors.create({
  name: 'BucketNotFoundError',
  defaultMessage: 'The specified bucket id was not found',
  defaultExplaination: 'No bucket exists with the specified id',
  defaultResponse: 'Check that you are using the correct id',
  code: 404,
  parent: errors.HoistError
});
exports.InvalidError = errors.create({
  name: 'BucketInvalidError',
  defaultMessage: 'Bucket id seems to be invalid',
  defaultExplaination: 'There\'s something invalid about the requested bucket id',
  defaultResponse: 'Please choose another valid bucket id',
  code: 500,
  parent: errors.HoistError
});
exports.SaveError = errors.create({
  name: 'BucketSaveError',
  defaultMessage: 'Bucket save failed',
  defaultExplaination: 'Bucket couldn\'t be saved',
  defaultResponse: 'Please try again',
  code: 500,
  parent: errors.HoistError
});
