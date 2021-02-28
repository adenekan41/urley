import isBrowser from './isBrowser';
import { syntaxError, utilityTypeError, INVALID_URL } from './errorDefinitions';
import isValidUrl from './isValidURL';

/**
 * getPathName definition
 * Returns the current URL from the param
 * sets default parameter as the window current location
 */

const getPathname = (url: string | boolean = isBrowser() && window.location.href): string  => {
	if (!url || url === '') {
		// Throw new TypeError if user doesnt parses any string
		return utilityTypeError('getPathname');
	}

	if (typeof url !== 'string') {
		// Throw new Syntax if user parses any other type asides String
		return syntaxError();
	}

	if (!isValidUrl(url)) INVALID_URL();

  const pathname: string[] | null = new RegExp(/.+?\:\/\/.+?(\/.+?)(?:#|\?|$)/).exec(url) ?? []
	return pathname[1] ?? '';
};

export default getPathname;
