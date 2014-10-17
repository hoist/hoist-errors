'use strict';
var _ = require('lodash');
var errors = require('errors');
var hoistErrors = {
   model:require('./model'),
   files:require('./files'),
   git:require('./git')
};
module.exports = _.extend(errors,hoistErrors);
