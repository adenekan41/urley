import isBrowser from './isBrowser';

/**
 * Get Window Pathname
 * return pathname if parameter is passed
 */

export const getWindowPathname = (url: string): Boolean | string => {
	if (url && typeof url === 'string' && typeof URL != 'undefined') {
		const newUrl = new URL(url);
		return newUrl.pathname;
	}
	return (isBrowser() && window.location.pathname) || '';
};

/**
 * Get Window Host
 * return host if url parameter is passed
 */
export const getWindowHost = (url: string): Boolean | string => {
	if (url && typeof url === 'string' && typeof URL != 'undefined') {
		const newUrl = new URL(url);
		return newUrl.host;
	}
	return (isBrowser() && window.location.host) || '';
};

/**
 * Get Window Host Name
 */
export const getWindowHostName = (url: string): Boolean | string => {
	if (url && typeof url === 'string' && typeof URL != 'undefined') {
		const newUrl = new URL(url);
		return newUrl.hostname;
	}
	return (isBrowser() && window.location.hostname) || '';
};

/**
 * Get Window Hash
 */
export const getWindowHash = (url: string): Boolean | string => {
	if (url && typeof url === 'string' && typeof URL != 'undefined') {
		const newUrl = new URL(url);
		return newUrl.hash;
	}
	return (isBrowser() && window.location.hash) || '';
};

/**
 * Get Window href
 */
export const getWindowHref = (url: string): Boolean | string => {
	if (url && typeof url === 'string' && typeof URL != 'undefined') {
		const newUrl = new URL(url);
		return newUrl.href;
	}
	return (isBrowser() && window.location.href) || '';
};

/**
 * Get Window Port
 */
export const getWindowPort = (url: string): Boolean | string => {
	if (url && typeof url === 'string' && typeof URL != 'undefined') {
		const newUrl = new URL(url);
		return newUrl.port;
	}
	return (isBrowser() && window.location.port) || '';
};

/**
 * Get Window Protocol
 */
export const getWindowProtocol = (url: string): Boolean | string => {
	if (url && typeof url === 'string' && typeof URL != 'undefined') {
		const newUrl = new URL(url);
		return newUrl.protocol;
	}
	return (isBrowser() && window.location.protocol) || '';
};

/**
 * Get Window Search Params
 */
export const getWindowSearch = (url: string): Boolean | string => {
	if (url && typeof url === 'string' && typeof URL != 'undefined') {
		const newUrl = new URL(url);
		return newUrl.search;
	}
	return (isBrowser() && window.location.search) || '';
};
