/**
 * decodeURL definition
 * @typedef {decodeUrl} decodeUrl
 * @function
 * @param {String} str
 * @property {String} decodeURIComponent
 * @returns {String} decodeUrl
 */

// get string to decode and verify that its a type of string
// function to strictly comply with https://tools.ietf.org/html/rfc3986

const decodeUrl = (str = '') =>
	str &&
	typeof str === 'string' &&
	decodeURIComponent(str).replace(/\+/g, '%20');

export default decodeUrl;
