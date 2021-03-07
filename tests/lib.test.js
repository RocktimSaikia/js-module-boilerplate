const unicornFun = require('../lib');

describe('main', () => {
	it('should throw an TypeError', () => {
		expect(() => unicornFun(123)).toThrowError(TypeError);
		expect(() => unicornFun(123)).toThrowError(/expected a string, got number/i);
	});

	it('should return the expected string', () => {
		expect(unicornFun('unicorns')).toBe('unicorns & rainbows');
	})
});
