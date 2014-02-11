var assert = require('assert');
var ssha256 = require("../lib/ssha256.js");
describe('SSHA256 Library', function() {
	var message = "blafoo",
	    hash = "{SSHA256}9FGK5qkNOG0Tf4cvZBrdeAEEG0Sa6/hFTeotLlydBJA5NmNl";
	    describe('check', function() {
	    	it('should return false for wrong message', function() {
			assert.equal(false, ssha256.check(hash, "foobar"));
		});
		it('should return true with the right message', function() {
	                assert.equal(true, ssha256.check(hash, message));
                });
	    });
	    describe('create', function() {
	    	it('should return a string which starts with {SSHA256}', function() {
			assert.equal("{SSHA256}", ssha256.create("sad").substr(0,9));
		});
		it('should create a valid hash, which can be checked with check', function() {
			var hash = ssha256.create('blafoo');

			assert.equal(true, ssha256.check(hash, "blafoo"));
		});
	    });
});
