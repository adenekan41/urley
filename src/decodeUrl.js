import { syntaxError, utilityTypeError } from './errorDefinitions';

/**
 * decodeURL definition
 * get string to decode and verify that its a type of string
 * function to strictly comply with https://tools.ietf.org/html/rfc3986
 * @param {String} str
 * @returns {String} decodeUrl
 */

const decodeUrl = str => {
	if (!str || str === '') {
		// Throw new TypeError if user doesnt parses any string
		return utilityTypeError('decodeUrl');
	}

	if (typeof str !== 'string') {
		// Throw new Syntax if user parses any other type asides String
		return syntaxError();
	}

	return decodeURIComponent(str).replace(/\+/g, '%20');
};

export default decodeUrl;
