/**
 * @function
 * @param {String} str
 * @returns {Boolean}
 */

// Returns Boolean if the given string is an absolute URL. https://seoclarity.net/resources/knowledgebase/difference-relative-absolute-url-15325/
const isAbsoluteURL = str =>
	typeof str === 'string' && new RegExp('^[a-z][a-z0-9+.-]*:').test(str);

export default isAbsoluteURL;
