'use strict';
var errors = require('../../../lib');
var expect = require('chai').expect;
describe('event', function() {
  describe('application', function() {
    describe('ApplicationMismatchError', function() {
      var applicationMismatchError = new errors.event.application.MismatchError();
      it('should have a 400 code', function() {
        expect(applicationMismatchError.code).to.eql(400);
      });
      it('should be an error type', function() {
        expect(applicationMismatchError).to.be.instanceof(Error);
      });
      it('should be a hoist error', function() {
        expect(errors.isHoistError(applicationMismatchError))
          .to.eql(true);
      });
    });
  });
});