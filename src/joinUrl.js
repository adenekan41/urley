import { syntaxError } from './errorDefinitions';

/**
 * joinUrl Definition
 * Join all given URL segments together, then normalizes the resulting URL
 * @param {(String | null)} urls
 * @returns {String | Array}
 */

const joinUrl = (...urls) => {
	if (typeof urls !== 'string') {
		// Throw new Syntax if user parses any other type asides String
		return syntaxError();
	}

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
