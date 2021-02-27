/**
 * joinUrl Definition
 * Join all given URL segments together, then normalizes the resulting URL
 */

const joinUrl = (urls: Array<string>): string => {
	// get the all string mapped and check if its a string
	return urls && Array.isArray(urls)
		? urls
				.join('/')
				.replace(/[\/]+/g, '/')
				.replace(/^(.+):\//, '$1://')
				.replace(/^file:/, 'file:/')
				.replace(/\/(\?|&|#[^!])/g, '$1')
				.replace(/\?/g, '&')
				.replace('&', '?')
		: urls;
};

export default joinUrl;
