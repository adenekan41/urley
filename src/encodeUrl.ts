import { syntaxError, utilityTypeError } from './errorDefinitions';

/**
 * EncodeURL definition
 * get string to encode and verify that its a type of string
 * function to strictly comply with https://tools.ietf.org/html/rfc3986
 */

const encodeUrl = (str: string): Function | string => {
	if (!str || str === '') {
		// Throw new TypeError if user doesnt parses any string
		return utilityTypeError('encodeUrl');
	}

	if (typeof str !== 'string') {
		// Throw new Syntax if user parses any other type asides String
		return syntaxError();
	}

	return encodeURIComponent(str).replace(
		/[!'()*]/g,
		char => '%' + char.charCodeAt(0).toString(16)
	);
};

export default encodeUrl;
