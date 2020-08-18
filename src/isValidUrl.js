/**
 * check whether a string is a valid HTTP URL
 * @param {String} string
 * @returns {Boolean}
 */
const isValidUrl = string => {
	try {
		new URL(string);
	} catch (_) {
		return false;
	}

	return true;
};

export default isValidUrl;
