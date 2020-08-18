/**
 * Creates a new SyntaxError
 * @param {String} type
 * @returns {SyntaxError}
 */

export const syntaxError = (type = 'String') => {
	throw new SyntaxError(`Make sure your URL is a ${type} to fix this error.`);
};

/**
 *
 * @param {String} functionName
 * @param {String} type
 * @returns {TypeError}
 */

export const utilityTypeError = (functionName = 'Func', type = 'String') => {
	throw new TypeError(
		`[Error]: You must provide a URL in ${type} to use the ${functionName} utility`
	);
};

/**
 * @returns {Console}
 */
export const INVALID_URL = () => {
	console.warn(
		'⚠️[Warning]: Looks like the current URL is invalid please check and rectify.'
	);
};
