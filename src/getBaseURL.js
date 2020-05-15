import isBrowser from './isBrowser';

/**
 * getBaseUrl definition
 * Returns the current URL without any parameters.
 * sets default parameter as the window current location
 * @param {String} url
 * @returns {String}
 */

const getBaseUrl = (url = isBrowser() && window.location.href) => {
	// try to check if url is passed
	if (typeof url === 'string') return;
	if (url.indexOf('?') > 0) {
		return url.slice(0, url.indexOf('?'));
	}
	return url;
};

export default getBaseUrl;
