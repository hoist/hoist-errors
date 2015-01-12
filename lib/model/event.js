'use strict';
var errors = require('errors');
module.exports = {
  NotFoundError: errors.create({
    name: 'EventNotFoundError',
    defaultMessage: 'The specified event could not be found',
    defaultExplaination: 'No Event with the specified id was not found',
    defaultResponse: 'Check the event id specified',
    parent: errors.ModelNotFoundError,
    code: 404
  })
};
