var assert = require('assert'),
	sizeof = require('../lib/sizeof')
describe('sizeof', function(){
	it('basic', function(){
		assert.equal(6, sizeof.sizeof('abc'));
		assert.equal(8, sizeof.sizeof(123));
		assert.equal(4, sizeof.sizeof(false));
	})
	it('array', function(){
		assert.equal(12, sizeof.sizeof(['abc', 'abc']));
		assert.equal(16, sizeof.sizeof([123, 123]));
		assert.equal(8, sizeof.sizeof([false, true]));
	})
	it('object', function(){
		assert.equal(12, sizeof.sizeof({'abc': 'abc'}));
		assert.equal(14, sizeof.sizeof({123: 123}));
		assert.equal(14, sizeof.sizeof({false: true}));
	})
	it('nested', function(){
		assert.equal(50, sizeof.sizeof({'key': {name: 'abc', age: 123, active: true}}));
		assert.equal(24, sizeof.sizeof({'key': ['abc', 123, true]}));
	})
	it('pretty format', function(){
		assert.equal('8B', sizeof.sizeof(123, true));
		assert.equal('50B', sizeof.sizeof({'key': {name: 'abc', age: 123, active: true}}, true));
	})
})
