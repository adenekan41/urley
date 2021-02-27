/**
 * Check if a string is a valid HTTP or HTTPS URL 
 */

 interface URLProtocol {
   protocol: string
 }

const isValidUrl = (string: string): boolean => {
	let url: URLProtocol ;

	try {
		url = new URL(string);
	} catch (_) {
		return false;
	}

	return url.protocol === 'http:' || url.protocol === 'https:';
};

export default isValidUrl;
