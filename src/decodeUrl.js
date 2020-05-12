/**
 * @function
 * @param {String} str
 * @returns {String}
 */

// get string to encode and verify that its a type of string
// function to strictly comply with https://tools.ietf.org/html/rfc3986
const decodeUrl = (str = '') =>
	str &&
	typeof str === 'string' &&
	decodeURIComponent(str).replace(/\+/g, '%20');

export default decodeUrl;
