import isBrowser from './isBrowser';

/**
 * getPathName definition
 * @typedef {getPathname} getPathname
 * @function
 * @param {String} url
 * @property {String}
 * @returns {String}
 */

// Returns the current URL from the param
// sets default parameter as the window current location
const getPathname = (url = isBrowser() && window.location.href) =>
	new RegExp(/.+?\:\/\/.+?(\/.+?)(?:#|\?|$)/).exec(url)[1];

export default getPathname;
