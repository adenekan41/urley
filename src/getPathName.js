import isBrowser from './isBrowser';
import { syntaxError, utilityTypeError, INVALID_URL } from './errorDefinitions';
import isValidUrl from './isValidURL';

/**
 * getPathName definition
 * Returns the current URL from the param
 * sets default parameter as the window current location
 * @param {(String | null)} url
 * @returns {String}
 */

const getPathname = (url = isBrowser() && window.location.href) => {
	if (!url || url === '') {
		// Throw new TypeError if user doesnt parses any string
		return utilityTypeError('getPathname');
	}

	if (typeof url !== 'string') {
		// Throw new Syntax if user parses any other type asides String
		return syntaxError();
	}

	if (isValidUrl(url)) {
		// Checks if the URL is a valid URL, if not returns a warning to the engineer.
		INVALID_URL();
	}

	return new RegExp(/.+?\:\/\/.+?(\/.+?)(?:#|\?|$)/).exec(url)[1];
};

export default getPathname;
