import isBrowser from './isBrowser';

/**
 * getUrlParameters definition
 * Returns the current URL
 * sets default parameter as the window current location
 * @param {(String | null)} url
 * @returns {Object}
 */

const getUrlParameters = (url = isBrowser() && window.location.href) => {
	// RegExp pattern from https://stackoverflow.com/a/10687137
	return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
		(acc, val) => (
			(acc[val.slice(0, val.indexOf('='))] = val.slice(val.indexOf('=') + 1)),
			acc
		),
		{}
	);
};

export default getUrlParameters;
