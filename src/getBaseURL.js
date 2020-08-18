import isBrowser from './isBrowser';
import { syntaxError, utilityTypeError, INVALID_URL } from './errorDefinitions';
import isValidUrl from './isValidURL';

/**
 * getBaseUrl definition
 * Returns the current URL without any parameters.
 * @param {(String | null)} url
 * @returns {String}
 */

const getBaseUrl = (url = isBrowser() && window.location.href) => {
	if (!url || url === '') {
		// Throw new TypeError if user doesnt parses any string.
		return utilityTypeError('getBaseUrl');
	}

	if (typeof url !== 'string') {
		// Throw new Syntax if user parses any other type asides String.
		return syntaxError();
	}

	if (isValidUrl(url)) {
		// Checks if the URL is a valid URL, if not returns a warning to the engineer.
		INVALID_URL();
	}

	// Check the index of the param in the Url and return the base URL
	return url.indexOf('?') > 0 ? url.slice(0, url.indexOf('?')) : url;
};

export default getBaseUrl;
