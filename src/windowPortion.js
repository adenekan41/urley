import isBrowser from './isBrowser';

/**
 * Get Window Pathname
 * return pathname if parameter is passed
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
