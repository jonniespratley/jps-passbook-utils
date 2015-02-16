/*global describe, it, require*/
'use strict';

var jpsPassbookUtils = require('../lib/jps-passbook-utils.js');
var assert = require('assert');

describe('jps-passbook-utils', function() {
	it('should have a name', function(done) {
		assert.equal(jpsPassbookUtils.awesome(), 'awesome', 'should be awesome.');
		done();
	});
});
