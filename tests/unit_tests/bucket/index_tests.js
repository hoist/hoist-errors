'use strict';
var errors = require('../../../lib');
var expect = require('chai').expect;
describe('bucket', function () {
  describe('NotFoundError', function () {
    var notFoundError = new errors.bucket.NotFoundError();
    it('should have a 404 code', function () {
      expect(notFoundError.code).to.eql(404);
    });
    it('should be an error type', function () {
      expect(notFoundError).to.be.instanceof(Error);
    });

    it('should be a hoist error', function () {
      expect(errors.isHoistError(notFoundError))
        .to.eql(true);
    });
  });
  describe('InvalidError', function () {
    var invalidError = new errors.bucket.InvalidError();
    it('should have a 500 code', function () {
      expect(invalidError.code).to.eql(500);
    });
    it('should be an error type', function () {
      expect(invalidError).to.be.instanceof(Error);
    });
    it('should be a hoist error', function () {
      expect(errors.isHoistError(invalidError))
        .to.eql(true);
    });
  });
});
