/**
 * @function
 * @returns {Boolean}
 */

// Determines if the current runtime environment is a browser
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

export default isBrowser();
