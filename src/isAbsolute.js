import { utilityTypeError, syntaxError } from './errorDefinitions';

/**
 * isAbsoluteURL Definition
 * Returns Boolean if the given string is an absolute URL. https://seoclarity.net/resources/knowledgebase/difference-relative-absolute-url-15325/
 * @param {String} str
 * @returns {Boolean}
 */

const isAbsoluteURL = str => {
	if (!str || str === '') {
		// Throw new TypeError if user doesnt parses any string
		return utilityTypeError('isAbsoluteURL');
	}

	if (typeof str !== 'string') {
		// Throw new Syntax if user parses any other type asides String
		return syntaxError();
	}

	return new RegExp('^[a-z][a-z0-9+.-]*:').test(str);
};

export default isAbsoluteURL;
