'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( a, b, c )
*	Partially applies lower limit `a` and upper limit `b` and mode `c` and returns a function for evaluating the probability density function (PDF) for a Triangular distribution.
*
* @param {Number} a - lower limit
* @param {Number} b - upper limit
* @param {Number} c - mode
* @returns {Function} PDF
*/
function partial( a, b, c ) {
	var denom1 =  ( b - a ) * (c - a ),
		denom2 = b - a,
		denom3 = ( b - a ) * ( b - c );

	/**
	* FUNCTION: pdf( x )
	*	Evaluates the probability density function (PDF) for a Triangular distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated PDF
	*/
	return function pdf( x ) {
		if ( x !== x ) {
			return NaN;
		}
		if ( x < a ) {
			return 0;
		}
		// Case: x >= a
		if ( x <  c) {
			return 2 * ( x - a ) / denom1;
		}
		if ( x === c ) {
			return 2 / denom2;
		}
		// Case: x > c
		if ( x <= b ) {
			return 2 * ( b - x ) /  denom3;
		}
		// Case: x > b
		return 0;
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
