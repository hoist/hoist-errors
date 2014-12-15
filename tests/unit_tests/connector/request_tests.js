'use strict';
var errors = require('../../../lib');
var expect = require('chai').expect;
describe('connector', function() {
  describe('request', function() {
    describe('InvalidError', function() {
      var invalidError = new errors.connector.request.InvalidError();
      it('should have a 400 code', function() {
        expect(invalidError.code).to.eql(400);
      });
      it('should be an error type', function() {
        expect(invalidError).to.be.instanceof(Error);
      });
      it('should be a hoist error', function() {
        expect(errors.isHoistError(invalidError))
          .to.eql(true);
      });
    });
    describe('UnauthorizedError', function() {
      var unauthorizedError = new errors.connector.request.UnauthorizedError();
      it('should have a 401 code', function() {
        expect(unauthorizedError.code).to.eql(401);
      });
      it('should be an error type', function() {
        expect(unauthorizedError).to.be.instanceof(Error);
      });
      it('should be a hoist error', function() {
        expect(errors.isHoistError(unauthorizedError))
          .to.eql(true);
      });
    });
    describe('UnsupportedError', function() {
      var unsupportedError = new errors.connector.request.UnsupportedError();
      it('should have a 404 code', function() {
        expect(unsupportedError.code).to.eql(404);
      });
      it('should be an error type', function() {
        expect(unsupportedError).to.be.instanceof(Error);
      });
      it('should be a hoist error', function() {
        expect(errors.isHoistError(unsupportedError))
          .to.eql(true);
      });
    });
  });
});