'use strict';

// MODULES //

var isObject = require( 'validate.io-object' ),
	isNumber = require( 'validate.io-number-primitive' ),
	isBoolean = require( 'validate.io-boolean-primitive' ),
	isFunction = require( 'validate.io-function' ),
	isString = require( 'validate.io-string-primitive' );


// VALIDATE //

/**
* FUNCTION: validate( opts, options )
*	Validates function options.
*
* @param {Object} opts - destination for validated options
* @param {Object} options - function options
* @param {Number} [options.a] - lower limit
* @param {Number} [options.b] - upper limit
* @param {Number} [options.c] - mode
* @param {Boolean} [options.copy] - boolean indicating if the function should return a new data structure
* @param {Function} [options.accessor] - accessor function for accessing array values
* @param {String} [options.sep] - deep get/set key path separator
* @param {String} [options.path] - deep get/set key path
* @param {String} [options.dtype] - output data type
* @returns {Null|Error} null or an error
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'pdf()::invalid input argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	if ( options.hasOwnProperty( 'a' ) ) {
		opts.a = options.a;
		if ( !isNumber( opts.a ) ) {
			return new TypeError( 'pdf()::invalid option. `a` parameter must be a number primitive. Option: `' + opts.a + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'b' ) ) {
		opts.b = options.b;
		if ( !isNumber( opts.b ) || opts.b <= ( opts.a || 0 ) ) {
			return new TypeError( 'pdf()::invalid option. `b` parameter must be a number primitive greater than `a`. Option: `' + opts.b + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'c' ) ) {
		opts.c = options.c;
		if ( !isNumber( opts.c ) || opts.c < ( opts.a || 0 ) || opts.c > ( opts.b || 0 ) ) {
			return new TypeError( 'pdf()::invalid option. `c` parameter must be a number primitive in the interval `[a,b]`. Option: `' + opts.c + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'copy' ) ) {
		opts.copy = options.copy;
		if ( !isBoolean( opts.copy ) ) {
			return new TypeError( 'pdf()::invalid option. Copy option must be a boolean primitive. Option: `' + opts.copy + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'accessor' ) ) {
		opts.accessor = options.accessor;
		if ( !isFunction( opts.accessor ) ) {
			return new TypeError( 'pdf()::invalid option. Accessor must be a function. Option: `' + opts.accessor + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'path' ) ) {
		opts.path = options.path;
		if ( !isString( opts.path ) ) {
			return new TypeError( 'pdf()::invalid option. Key path option must be a string primitive. Option: `' + opts.path + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'sep' ) ) {
		opts.sep = options.sep;
		if ( !isString( opts.sep ) ) {
			return new TypeError( 'pdf()::invalid option. Separator option must be a string primitive. Option: `' + opts.sep + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'dtype' ) ) {
		opts.dtype = options.dtype;
		if ( !isString( opts.dtype ) ) {
			return new TypeError( 'pdf()::invalid option. Data type option must be a string primitive. Option: `' + opts.dtype + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
