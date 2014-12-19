'use strict';
var errors = require('../../../lib');
var expect = require('chai').expect;
describe('invite', function () {
  describe('InviteError', function () {
    var inviteError = new errors.invite.InviteError();
    it('should have a 500 code', function () {
      expect(inviteError.code).to.eql(500);
    });
    it('should be an error type', function () {
      expect(inviteError).to.be.instanceof(Error);
    });
    it('should be a hoist error', function () {
      expect(errors.isHoistError(inviteError))
        .to.eql(true);
    });
  });
});