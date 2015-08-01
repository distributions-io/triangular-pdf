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

	/**
	* FUNCTION: pdf( x )
	*	Evaluates the probability density function (PDF) for a Triangular distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated PDF
	*/
	return function pdf( x ) {

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
