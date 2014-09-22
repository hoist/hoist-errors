'use strict';
var errors = require('errors');
module.exports = {
  NotFoundError: errors.create({
    name: 'ApplicationNotFoundError',
    defaultMessage: 'The specified application could not be found',
    defaultExplaination: 'No Application with the specified id was not found',
    defaultResponse: 'Check the application id specified',
    parent: errors.ModelNotFoundError,
    code: 404
  })
};
