import isBrowser from './isBrowser';

/**
 * @function
 * @param {String} url
 * @returns {String}
 */

// Returns the current URL without any parameters.
// sets default parameter as the window current location
const getUrlPrameters = (url = isBrowser() && window.location.href) => {
	// RegExp pattern from https://stackoverflow.com/a/10687137
	return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
		(acc, val) => (
			(acc[val.slice(0, val.indexOf('='))] = val.slice(val.indexOf('=') + 1)),
			acc
		),
		{}
	);
};

export default getUrlPrameters;
