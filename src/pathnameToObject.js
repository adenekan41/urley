import isBrowser from './isBrowser';

/**
 * @function
 * @param {String} url
 * @returns {String}
 */

// Returns the current URL without any parameters.
// sets default parameter as the window current location
const getPathnameToObject = (url = isBrowser() && window.location.href) => {
	let newUrl = new URL(url);
	return newUrl.pathname
		.split('/')
		.reduce((acc, a, i) => ({ ...acc, [i]: a }), {});
};

export default getPathnameToObject;
