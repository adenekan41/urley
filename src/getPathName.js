import isBrowser from './isBrowser';

/**
 * getPathName definition
 * @typedef {getPathname} getPathname
 * @function
 * @param {String} url
 * @property {String}
 * @returns {String}
 */

// Returns the current URL
const getPathname = (url = isBrowser() && window.location.href) =>
	new RegExp(/.+?\:\/\/.+?(\/.+?)(?:#|\?|$)/).exec(url)[1];

export default getPathname;
