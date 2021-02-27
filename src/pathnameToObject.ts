import isBrowser from './isBrowser';
import getPathname from './getPathName';
import getBaseUrl from './getBaseUrl';
import { syntaxError, INVALID_URL, utilityTypeError } from './errorDefinitions';
import isValidUrl from './isValidURL';

/**
 * pathnameToObject definition
 * returns the current URL
 * sets default parameter as the window current location
 */

const pathnameToObject = (url: string | boolean = isBrowser() && window.location.href): Function | object  => {
	if (!url || url === '') {
		// Throw new TypeError if user doesnt parses any string.
		return utilityTypeError('pathnameToObject');
	}

	if (typeof url !== 'string') {
		// Throw new Syntax if user parses any other type asides String
		return syntaxError();
	}

	if (isValidUrl(url)) {
		// Checks if the URL is a valid URL, if not returns a warning to the engineer.
		INVALID_URL();
	}

	// set the new URL
	let newUrl: string;
	// check if the current runtime environment supports URL https://developer.mozilla.org/en-US/docs/Web/API/URL
	if (typeof URL !== 'undefined') {
		newUrl = new URL(url).pathname.slice(1);
	} else {
		// if the current runtime environment doesnt support URL we then split and get the pathname values
		newUrl = getPathname(getBaseUrl(url)).slice(1);
	}
	return newUrl.split('/').reduce((acc: object, value: string, index: number) => ({ ...acc, [index]: value }), {});
};

export default pathnameToObject;
