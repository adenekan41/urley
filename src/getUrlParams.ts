import isBrowser from './isBrowser';
import { syntaxError, utilityTypeError, INVALID_URL } from './errorDefinitions';
import isValidUrl from './isValidURL';

/**
 * getUrlParameters definition
 * Returns the current URL
 * sets default parameter as the window current location
 */

const getUrlParameters = (url: string | boolean = isBrowser() && window.location.href): object  => {
	if (!url || url === '') {
		// Throw new TypeError if user doesnt parses any string
		return utilityTypeError('getUrlParameters');
	}

	if (typeof url !== 'string') {
		// Throw new Syntax if user parses any other type asides String
		return syntaxError();
	}

	if (isValidUrl(url)) {
		// Checks if the URL is a valid URL, if not returns a warning to the engineer.
		INVALID_URL();
	}

	// RegExp pattern from modified (https://stackoverflow.com/a/10687137)
	return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
		(acc: object | any, val: string) => (
			(acc[val.slice(0, val.indexOf('='))] = val.slice(val.indexOf('=') + 1)),
			acc
		),
		{}
	);
};

export default getUrlParameters;
