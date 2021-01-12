/**
 * @author Rocktim Saikia
 * @copyright Copyright (c) 2021 Rocktim Saikia
 * @license MIT
 * @description A simple Node.js module boilerplate
 */
'use strict';

module.exports = (input, {postfix = 'rainbows'} = {}) => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	return `${input} & ${postfix}`;
};
