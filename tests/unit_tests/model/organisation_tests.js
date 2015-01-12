'use strict';
var errors = require('../../../lib');
var expect = require('chai').expect;
describe('model', function () {
  describe('organisation', function () {
    describe('NotFoundError', function () {
      var notFoundError = new errors.model.organisation.NotFoundError();
      it('should have a 404 code', function () {
        expect(notFoundError.code).to.eql(404);
      });
      it('should be an error type', function () {
        expect(notFoundError).to.be.instanceof(Error);
      });
      it('should be a model not found error', function () {
        expect(notFoundError).to.be.instanceof(errors.model.NotFoundError);
      });

      it('should be a hoist error', function () {
        expect(errors.isHoistError(notFoundError))
          .to.eql(true);
      });
    });
  });
});
