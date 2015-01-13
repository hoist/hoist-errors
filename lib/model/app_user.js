'use strict';
var errors = require('errors');
module.exports = {
  NotFoundError: errors.create({
    name: 'AppUserNotFoundError',
    defaultMessage: 'The specified appUser could not be found',
    defaultExplaination: 'No AppUser with the specified id was not found',
    defaultResponse: 'Check the app user id specified',
    parent: errors.ModelNotFoundError,
    code: 404
  })
};
