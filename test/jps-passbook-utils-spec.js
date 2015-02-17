/*global describe, it, require*/
'use strict';

var jpsPassbookUtils = require('../lib/jps-passbook-utils.js');
var assert = require('assert');
var path = require('path');

var testCert = path.resolve(__dirname, '../example/aps-dev-cert.p12');
var testKey = path.resolve(__dirname, '../example/aps-dev-key.p12');


describe('jps-passbook-utils', function() {

	/**
	 * openssl pkcs12 -clcerts -nokeys -out __cert__.pem -in __cert__.p12
	 * openssl pkcs12 -nocerts -out __key__.pem -in __key__.p12
	 * cat __cert__.pem __key__.pem > __name__.pem
	 */
	
	it('CERT - should create correct .pem from .p12', function(done){
		assert.ok(jpsPassbookUtils.createPemCert(testCert), 'returns correct .pem path');
		done();
	});
	it('KEY - should create correct .pem from .p12', function(done){
		assert.ok(jpsPassbookUtils.createPemKey(testKey), 'returns correct .pem path');
		done();
	});
	it('CERTKEY - should create correct cert + key .pem from cert.pem and key.pem', function(done){
		assert.ok(jpsPassbookUtils.createPemCertKey(testCert, testKey), 'returns correct .pem path');
		done();
	});
});
