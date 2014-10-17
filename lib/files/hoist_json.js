'use strict';
var errors = require('errors');
module.exports = {
  NotFoundError: errors.create({
    name: 'HoistJsonNotFoundError',
    defaultMessage: 'No hoist.json found',
    defaultExplaination: 'No hoist.json file found in the specified application',
    defaultResponse: 'Check that you have created and commited a hoist.json file',
    parent: errors.FileNotFoundError,
    code: 404
  })
};
