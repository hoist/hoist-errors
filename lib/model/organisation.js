'use strict';
var errors = require('errors');
module.exports = {
  NotFoundError: errors.create({
    name: 'OrganisationNotFoundError',
    defaultMessage: 'The specified organisation could not be found',
    defaultExplaination: 'No Organisation with the specified id was not found',
    defaultResponse: 'Check the organisation id specified',
    parent: errors.ModelNotFoundError,
    code: 404
  })
};
