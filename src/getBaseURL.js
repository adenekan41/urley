/**
 * @function
 * @param {String} url
 */

// Returns the current URL without any parameters.
// sets default parameter as the window current location
const getBaseURL = (
	url = typeof window === "object" && window.location.href
) => {
	// try to check if url is passed
	return url && typeof url === "string" && url.indexOf("?") > 0
		? url.slice(0, url.indexOf("?"))
		: url;
};

export default getBaseURL;
