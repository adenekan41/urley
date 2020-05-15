/**
 * decodeURL definition
 * get string to decode and verify that its a type of string
 * function to strictly comply with https://tools.ietf.org/html/rfc3986
 * @param {(String | null)} str
 * @returns {String} decodeUrl
 */

const decodeUrl = str =>
	str &&
	typeof str === 'string' &&
	decodeURIComponent(str).replace(/\+/g, '%20');

export default decodeUrl;
