/**
 * @function
 * @param {String} str
 * @returns {String}
 */

// get string to encode and verify that its a type of string
// function to strictly comply with https://tools.ietf.org/html/rfc3986

const encodeUrl = (str = '') =>
	str &&
	typeof str === 'string' &&
	encodeURIComponent(str).replace(
		/[!'()*]/g,
		char => '%' + char.charCodeAt(0).toString(16)
	);

export default encodeUrl;
