'use strict';
var errors = require('../../../lib');
var expect = require('chai').expect;
describe('git', function () {
  describe('NotFoundError', function () {
    var notFoundError = new errors.git.NotFoundError();
    it('should have a 404 code', function () {
      expect(notFoundError.code).to.eql(404);
    });
    it('should be an error type', function () {
      expect(notFoundError).to.be.instanceof(Error);
    });
  });
   describe('InvalidError', function () {
    var invalidError = new errors.git.InvalidError();
    it('should have a 500 code', function () {
      expect(invalidError.code).to.eql(500);
    });
    it('should be an error type', function () {
      expect(invalidError).to.be.instanceof(Error);
    });
  });
});
