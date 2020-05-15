import isBrowser from './isBrowser';

/**
 * getPathName definition
 * Returns the current URL from the param
 * sets default parameter as the window current location
 * @param {(String | null)} url
 * @returns {String}
 */

const getPathname = (url = isBrowser() && window.location.href) =>
	new RegExp(/.+?\:\/\/.+?(\/.+?)(?:#|\?|$)/).exec(url)[1];

export default getPathname;
