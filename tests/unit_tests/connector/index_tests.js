'use strict';
var errors = require('../../../lib');
var expect = require('chai').expect;
describe('connector', function () {
  describe('ConnectorError', function () {
    var connectorError = new errors.connector.ConnectorError();
    it('should have a 500 code', function () {
      expect(connectorError.code).to.eql(500);
    });
    it('should be an error type', function () {
      expect(connectorError).to.be.instanceof(Error);
    });
    it('should be a hoist error', function () {
      expect(errors.isHoistError(connectorError))
        .to.eql(true);
    });
  });
});