var jpsPassbookUtils = require('../lib/jps-passbook-utils.js');
var assert = require('assert');
var path = require('path');

//var testCert = path.resolve(__dirname, './aps-dev-cert.p12');
//var testKey = path.resolve(__dirname, './aps-dev-key.p12');
var testCert = '/WWW/2015Projects/cordova-apps/io-sjapps-app/config/app-jsapps-io-apns-dev-cert.p12';
var testKey = '/WWW/2015Projects/cordova-apps/io-sjapps-app/config/app-jsapps-io-apns-dev-key.p12';

var steps = {};

steps.step1 = jpsPassbookUtils.createPemCert(testCert);
steps.step2 = jpsPassbookUtils.createPemKey(testKey);
steps.step3 = jpsPassbookUtils.createPemCertKey(testCert, testKey);
steps.step4 = jpsPassbookUtils.checkConnection(testCert.replace('.p12', '.pem'), testKey.replace('.p12', '.pem'));



console.warn(steps);
