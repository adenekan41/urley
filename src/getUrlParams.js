import isBrowser from './isBrowser';

/**
 * getUrlParameters definition
 * @typedef {getUrlParameters} getUrlParameters
 * @function
 * @param {String} url
 * @property {String}
 * @returns {String}
 */

// Returns the current URL
// sets default parameter as the window current location
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
