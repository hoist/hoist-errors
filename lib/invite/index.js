'use strict';
var errors = require('errors');
exports.InviteError = errors.create({
  name:'InviteError',
  code:500,
  parent: errors.HoistError
});
exports.organisation = require('./organisation');
