import isBrowser from './isBrowser';

/**
 * getBaseUrl definition
 * Returns the current URL without any parameters.
 * @param {String} url
 * @returns {String}
 */

const getBaseUrl = (url = isBrowser() && window.location.href) => {
	// try to check if url is passed
	return url && typeof url === 'string' && url.indexOf('?') > 0
		? url.slice(0, url.indexOf('?'))
		: url;
};

export default getBaseUrl;
