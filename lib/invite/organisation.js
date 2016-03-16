'use strict';
var errors = require('errors');
exports.DuplicateUserError = errors.create({
  name: 'InviteOrganisationDuplicateUserError',
  code: 400,
  parent: errors.InviteError
});
