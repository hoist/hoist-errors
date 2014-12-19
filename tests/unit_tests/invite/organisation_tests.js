'use strict';
var errors = require('../../../lib');
var expect = require('chai').expect;
describe('invite', function() {
  describe('organisation', function() {
    describe('OrgnaisationDuplicateUserError', function() {
      var organisationDuplicateUserError = new errors.invite.organisation.DuplicateUserError();
      it('should have a 400 code', function() {
        expect(organisationDuplicateUserError.code).to.eql(400);
      });
      it('should be an error type', function() {
        expect(organisationDuplicateUserError).to.be.instanceof(Error);
      });
      it('should be a hoist error', function() {
        expect(errors.isHoistError(organisationDuplicateUserError))
          .to.eql(true);
      });
    });
  });
});