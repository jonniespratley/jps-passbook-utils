/*
 * jps-passbook-utils
 * https://github.com/jonniespratley/jps-passbook-utils
 *
 * Copyright (c) 2015 Jonnie Spratley
 * Licensed under the MIT license.
 */

'use strict';

//var exec = require('child_process').exec;
//var spawn = require('child_process').spawn;
var jpsPassbookUtils = {};

//Step 1
jpsPassbookUtils.createPemCert = function(cert) {
	var certIn = cert;
	var certOut = certIn.replace('.p12', '.pem');
	var cmd = 'openssl pkcs12 -clcerts -nokeys -out ' + certOut + ' -in ' + certIn;
	/*
	 exec(cmd, function(error, stdout, stderr) {
	 console.log('stdout: ' + stdout);
	 console.log('stderr: ' + stderr);
	 if (error !== null) {
	 console.log('exec error: ' + error);
	 }
	 return certOut;
	 });*/
	return cmd;
};

//Step 2
jpsPassbookUtils.createPemKey = function(key) {
	var keyIn = key;
	var keyOut = keyIn.replace('.p12', '.pem');
	var cmd = 'openssl pkcs12 -nocerts -out ' + keyOut + ' -in ' + keyIn;
	return cmd;
	/*
	 exec(cmd, function(error, stdout, stderr) {
	 console.log('stdout: ' + stdout);
	 console.log('stderr: ' + stderr);
	 if (error !== null) {
	 console.log('exec error: ' + error);
	 }
	 return keyOut;
	 });
	 */
};

/**
 *
 * I take a .pem cert and .pem key, combine them both for use in APS
 * @param string $cert - Path to the certificate file
 * @param string $key - Path to the key file
 * cat $cert $key > $dev_certkey_ou
 */
//Step 3
jpsPassbookUtils.createPemCertKey = function(cert, key){
	var fileOut = cert.replace('-cert', '-certkey');
	var cmd = 'cat ' + cert + ' ' + key + ' > ' + fileOut;
	return cmd;
};

//Step 4
jpsPassbookUtils.checkConnection = function(cert, key){
	//openssl s_client -connect gateway.sandbox.push.apple.com:2195 -cert apns-dev-cert-my.pem -key apns-dev-key-my.pem
	var cmd = 'openssl s_client -connect gateway.sandbox.push.apple.com:2195 -cert '+ cert +' -key '+ key;

	return cmd;
};


module.exports = jpsPassbookUtils;
