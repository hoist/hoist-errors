'use strict';
var errors = require('../../../lib');
var expect = require('chai').expect;
describe('event', function () {
  describe('EventError', function () {
    var eventError = new errors.event.EventError();
    it('should have a 500 code', function () {
      expect(eventError.code).to.eql(500);
    });
    it('should be an error type', function () {
      expect(eventError).to.be.instanceof(Error);
    });
    it('should be a hoist error', function () {
      expect(errors.isHoistError(eventError))
        .to.eql(true);
    });
  });
});