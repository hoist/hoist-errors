'use strict';
var _ = require('lodash');
var errors = require('errors');
var hoistErrors = {
   model:require('./model')
};
module.exports = _.extend(errors,hoistErrors);
