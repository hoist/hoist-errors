'use strict';
var errors = require('../../../lib');
var expect = require('chai').expect;
describe('files', function () {
  describe('hoistJson', function () {
    describe('NotFoundError', function () {
      var notFoundError = new errors.files.hoistJson.NotFoundError();
      it('should have a 404 code', function () {
        expect(notFoundError.code).to.eql(404);
      });
      it('should be an error type', function () {
        expect(notFoundError).to.be.instanceof(Error);
      });
      it('should be a file not found error', function () {
        expect(notFoundError).to.be.instanceof(errors.files.NotFoundError);
      });
    });
  });
});
