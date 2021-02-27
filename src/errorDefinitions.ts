/**
 * Creates a new dynamic SyntaxError 
 * checks for users type and fucntion and returns 
 * an intuitive error
 */

export const syntaxError = (type: string = 'String'): never => {
	throw new SyntaxError(`Make sure your URL is a ${type} to fix this error.`);
};


export const utilityTypeError = (functionName: string = 'Func', type: string = 'String'): never => {
	throw new TypeError(
		`[Error]: You must provide a URL in ${type} to use the ${functionName} utility`
	);
};

export const INVALID_URL = ():void  => {
	console.warn(
		'⚠️[Warning]: Looks like the current URL is invalid please check and rectify.'
	);
};
