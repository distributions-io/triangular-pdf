'use strict';

// FUNCTIONS //


// PDF //

/**
* FUNCTION: pdf( x, a, b, c )
*	Evaluates the probability density function (PDF) for a Triangular distribution with lower limit `a` and upper limit `b` and mode `c` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} a - lower limit
* @param {Number} b - upper limit
* @param {Number} c - mode
* @returns {Number} evaluated PDF
*/
function pdf( x, a, b, c ) {
	var denom1 =  ( b - a ) * (c - a ),
		denom2 = b - a,
	 	denom3 = ( b - a ) * ( b - c );
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
} // end FUNCTION pdf()


// EXPORTS //

module.exports = pdf;
