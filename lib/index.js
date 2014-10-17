'use strict';
var _ = require('lodash');
var errors = require('errors');
var hoistErrors = {
   model:require('./model'),
   files:require('./files')
};
module.exports = _.extend(errors,hoistErrors);
