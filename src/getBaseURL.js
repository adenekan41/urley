import isBrowser from './isBrowser';

/**
 * getBaseUrl definition
 * @typedef {getBaseUrl} getBaseUrl
 * @function
 * @param {String} url
 * @property {String}
 * @returns {String}
 */

// Returns the current URL without any parameters.
// sets default parameter as the window current location

const getBaseUrl = (url = isBrowser() && window.location.href) => {
	// try to check if url is passed
	return url && typeof url === 'string' && url.indexOf('?') > 0
		? url.slice(0, url.indexOf('?'))
		: url;
};

export default getBaseUrl;
