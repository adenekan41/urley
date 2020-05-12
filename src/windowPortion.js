import isBrowser from './isBrowser';

/**
 * Get Window Pathname
 * return pathname if parameter is passed
 * @typedef {getWindowPathname} getWindowPathname
 * @function
 * @property {is}
 * @param {(string | null)} url
 * @returns {String}
 */

export const getWindowPathname = (url = null) => {
	if (url && typeof url === 'string' && typeof URL != 'undefined') {
		const newUrl = new URL(url);
		return newUrl.pathname;
	}
	return (isBrowser() && window.location.pathname) || '';
};

/**
 * Get Window Host
 * return host if url parameter is passed
 * @typedef {getWindowHost} getWindowHost
 * @function
 * @param {(string | null)} url
 * @returns {String}
 */
export const getWindowHost = (url = null) => {
	if (url && typeof url === 'string' && typeof URL != 'undefined') {
		const newUrl = new URL(url);
		return newUrl.host;
	}
	return (isBrowser() && window.location.host) || '';
};

/**
 * Get Window Host Name
 * @typedef {getWindowHostName} getWindowHostName
 * @function
 * @param {(string | null)} url
 * @returns {String}
 */
export const getWindowHostName = (url = null) => {
	if (url && typeof url === 'string' && typeof URL != 'undefined') {
		const newUrl = new URL(url);
		return newUrl.hostname;
	}
	return (isBrowser() && window.location.hostname) || '';
};

/**
 * Get Window Hash
 * @typedef {getWindowHash} getWindowHash
 * @function
 * @param {(string | null)} url
 * @returns {String}
 */
export const getWindowHash = (url = null) => {
	if (url && typeof url === 'string' && typeof URL != 'undefined') {
		const newUrl = new URL(url);
		return newUrl.hash;
	}
	return (isBrowser() && window.location.hash) || '';
};

/**
 * Get Window href
 * @typedef {getWindowHref} getWindowHref
 * @function
 * @param {(string | null)} url
 * @returns {String}
 */
export const getWindowHref = (url = null) => {
	if (url && typeof url === 'string' && typeof URL != 'undefined') {
		const newUrl = new URL(url);
		return newUrl.href;
	}
	return (isBrowser() && window.location.href) || '';
};

/**
 * Get Window Port
 * @typedef {getWindowPort} getWindowPort
 * @function
 * @param {(string | null)} url
 * @returns {String}
 */
export const getWindowPort = (url = null) => {
	if (url && typeof url === 'string' && typeof URL != 'undefined') {
		const newUrl = new URL(url);
		return newUrl.port;
	}
	return (isBrowser() && window.location.port) || '';
};

/**
 * Get Window Protocol
 * @typedef {getWindowProtocol} getWindowProtocol
 * @function
 * @param {(string | null)} url
 * @returns {String}
 */
export const getWindowProtocol = (url = null) => {
	if (url && typeof url === 'string' && typeof URL != 'undefined') {
		const newUrl = new URL(url);
		return newUrl.protocol;
	}
	return (isBrowser() && window.location.protocol) || '';
};

/**
 * Get Window Search Params
 * @typedef {getWindowSearch} getWindowSearch
 * @function
 * @param {(string | null)} url
 * @returns {String}
 */
export const getWindowSearch = (url = null) => {
	if (url && typeof url === 'string' && typeof URL != 'undefined') {
		const newUrl = new URL(url);
		return newUrl.search;
	}
	return (isBrowser() && window.location.search) || '';
};
