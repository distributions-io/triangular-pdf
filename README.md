Probability Density Function
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Triangular](https://en.wikipedia.org/wiki/Triangular_distribution) distribution probability density function (PDF).

The [probability density function](https://en.wikipedia.org/wiki/Probability_density_function) (PDF) for a [Triangular](https://en.wikipedia.org/wiki/Triangular_distribution) random variable is

<div class="equation" align="center" data-raw-text="f(x;a,b,c)=\begin{cases} 0 &amp; \text{for } x < a \\ \frac{2(x-a)}{(b-a)(c-a)} &amp; \text{for } a \le x < c \\ \frac{2}{b-a} &amp; \text{for } x = c \\ \frac{2(b-x)}{(b-a)(b-c)} &amp; \text{for } c < x \le b \\ 0 & \text{for } b < x \end{cases} " data-equation="eq:pdf_function">
	<img src="https://cdn.rawgit.com/distributions-io/triangular-pdf/7110a4d870a846c6c4daebb3834fae20d1b8d88a/docs/img/eqn.svg" alt="Probability density function (PDF) for a Triangular distribution.">
	<br>
</div>

where `a` is the lower limit and `b` is the upper limit and `c` is the mode.

## Installation

``` bash
$ npm install distributions-triangular-pdf
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var pdf = require( 'distributions-triangular-pdf' );
```

#### pdf( x[, options] )

Evaluates the [probability density function](https://en.wikipedia.org/wiki/Probability_density_function) (PDF) for the [Triangular](https://en.wikipedia.org/wiki/Triangular_distribution) distribution. `x` may be either a [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), an [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), or a [`matrix`](https://github.com/dstructs/matrix).

``` javascript
var matrix = require( 'dstructs-matrix' ),
	mat,
	out,
	x,
	i;

out = pdf( 0.5 );
// returns 2

out = pdf( -1 );
// returns 0

out = pdf( -1 );
// returns 0

x = [ 0, 0.2, 0.4, 0.6, 0.8, 1 ];
out = pdf( x );
// returns [ 0, 0.8, 1.6, 1.6, 0.8, 0 ]

x = new Float64Array( x );
out = pdf( x );
// returns Float64Array( [0,0.8,1.6,1.6,0.8,0] )

x = new Float32Array( 6 );
for ( i = 0; i < 6; i++ ) {
	x[ i ] = i / 6;
}
mat = matrix( x, [3,2], 'float32' );
/*
	[ 0  1/6
	 2/6 3/6
	 4/6 5/6 ]
*/

out = pdf( mat );
/*
	[  0   ~0.667
	  ~1.33 2
	  ~1.33 ~0.667 ]
*/
```

The function accepts the following `options`:

*	__a__: lower limit. Default: `0`.
*	__b__: upper limit. Default: `1`.
*	__c__: mode. Default: `0.5`.
* 	__accessor__: accessor `function` for accessing `array` values.
* 	__dtype__: output [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) or [`matrix`](https://github.com/dstructs/matrix) data type. Default: `float64`.
*	__copy__: `boolean` indicating if the `function` should return a new data structure. Default: `true`.
*	__path__: [deepget](https://github.com/kgryte/utils-deep-get)/[deepset](https://github.com/kgryte/utils-deep-set) key path.
*	__sep__: [deepget](https://github.com/kgryte/utils-deep-get)/[deepset](https://github.com/kgryte/utils-deep-set) key path separator. Default: `'.'`.

A [Triangular](https://en.wikipedia.org/wiki/Triangular_distribution) distribution is a function of 3 parameters: `a`(lower limit), `b`(upper limit) and `c`(mode). By default, `a` is equal to `0` and `b` is equal to `1` and `c` is equal to `0.5`. To adjust either parameter, set the corresponding option.

``` javascript
var x = [ 0, 0.5, 1, 1.5, 2, 2.5 ];

var out = pdf( x, {
	'a': 1,
	'b': 3,
	'c': 2
});
// returns [ 0, 0, 0, 0.5, 1, 0.5 ]
```

For non-numeric `arrays`, provide an accessor `function` for accessing `array` values.

``` javascript
var data = [
	[0,0],
	[1,0.2],
	[2,0.4],
	[3,0.6],
	[4,0.8],
	[5,1]
];

function getValue( d, i ) {
	return d[ 1 ];
}

var out = pdf( data, {
	'accessor': getValue
});
// returns [ 0, 0.8, 1.6, 1.6, 0.8, 0 ]
```


To [deepset](https://github.com/kgryte/utils-deep-set) an object `array`, provide a key path and, optionally, a key path separator.

``` javascript
var data = [
	{'x':[0,0]},
	{'x':[1,0.2]},
	{'x':[2,0.4]},
	{'x':[3,0.6]},
	{'x':[4,0.8]},
	{'x':[5,1]}
];

var out = pdf( data, {
	'path': 'x/1',
	'sep': '/'
});
/*
	[
		{'x':[0,0]},
		{'x':[1,0.8]},
		{'x':[2,1.6]},
		{'x':[3,1.6]},
		{'x':[4,0.8]},
		{'x':[5,0]}
	]
*/

var bool = ( data === out );
// returns true
```

By default, when provided a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) or [`matrix`](https://github.com/dstructs/matrix), the output data structure is `float64` in order to preserve precision. To specify a different data type, set the `dtype` option (see [`matrix`](https://github.com/dstructs/matrix) for a list of acceptable data types).

``` javascript
var x, out;

x = new Float64Array( [0,0.2,0.4,0.6,0.8,1 ] );

out = pdf( x, {
	'dtype': 'int32'
});
// returns Int32Array( [0,0,1,1,0,0] )

// Works for plain arrays, as well...
out = pdf( [ 0, 0.2, 0.4, 0.6, 0.8, 1 ], {
	'dtype': 'uint8'
});
// returns Uint8Array( [0,0,1,1,0,0] )
```

By default, the function returns a new data structure. To mutate the input data structure (e.g., when input values can be discarded or when optimizing memory usage), set the `copy` option to `false`.

``` javascript
var bool,
	mat,
	out,
	x,
	i;

x = [ 0, 0.2, 0.4, 0.6, 0.8, 1 ];

out = pdf( x, {
	'copy': false
});
// returns [ 0, 0.8, 1.6, 1.6, 0.8, 0 ]

bool = ( x === out );
// returns true

x = new Float32Array( 6 );
for ( i = 0; i < 6; i++ ) {
	x[ i ] = i / 6;
}
mat = matrix( x, [3,2], 'float32' );
/*
	[ 0  1/6
	 2/6 3/6
	 4/6 5/6 ]
*/

out = pdf( mat, {
	'copy': false
});
/*
	[  0   ~0.667
	  ~1.33 2
	  ~1.33 ~0.667 ]
*/

bool = ( mat === out );
// returns true
```


## Notes

*	If an element is __not__ a numeric value, the evaluated [PDF](https://en.wikipedia.org/wiki/Triangular_distribution) is `NaN`.

	``` javascript
	var data, out;

	out = pdf( null );
	// returns NaN

	out = pdf( true );
	// returns NaN

	out = pdf( {'a':'b'} );
	// returns NaN

	out = pdf( [ true, null, [] ] );
	// returns [ NaN, NaN, NaN ]

	function getValue( d, i ) {
		return d.x;
	}
	data = [
		{'x':true},
		{'x':[]},
		{'x':{}},
		{'x':null}
	];

	out = pdf( data, {
		'accessor': getValue
	});
	// returns [ NaN, NaN, NaN, NaN ]

	out = pdf( data, {
		'path': 'x'
	});
	/*
		[
			{'x':NaN},
			{'x':NaN},
			{'x':NaN,
			{'x':NaN}
		]
	*/
	```

*	Be careful when providing a data structure which contains non-numeric elements and specifying an `integer` output data type, as `NaN` values are cast to `0`.

	``` javascript
	var out = pdf( [ true, null, [] ], {
		'dtype': 'int8'
	});
	// returns Int8Array( [0,0,0] );
	```


## Examples

``` javascript
var pdf = require( 'distributions-triangular-pdf' ),
	matrix = require( 'dstructs-matrix' );

var data,
	mat,
	out,
	tmp,
	i;

// Plain arrays...
data = new Array( 10 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random();
}
out = pdf( data );

// Object arrays (accessors)...
function getValue( d ) {
	return d.x;
}
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = {
		'x': data[ i ]
	};
}
out = pdf( data, {
	'accessor': getValue
});

// Deep set arrays...
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = {
		'x': [ i, data[ i ].x ]
	};
}
out = pdf( data, {
	'path': 'x/1',
	'sep': '/'
});

// Typed arrays...
data = new Float32Array( 10 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random();
}
out = pdf( data );

// Matrices...
mat = matrix( data, [5,2], 'float32' );
out = pdf( mat );

// Matrices (custom output data type)...
out = pdf( mat, {
	'dtype': 'uint8'
});
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/distributions-triangular-pdf.svg
[npm-url]: https://npmjs.org/package/distributions-triangular-pdf

[travis-image]: http://img.shields.io/travis/distributions-io/triangular-pdf/master.svg
[travis-url]: https://travis-ci.org/distributions-io/triangular-pdf

[codecov-image]: https://img.shields.io/codecov/github/distributions-io/triangular-pdf/master.svg
[codecov-url]: https://codecov.io/github/distributions-io/triangular-pdf?branch=master

[dependencies-image]: http://img.shields.io/david/distributions-io/triangular-pdf.svg
[dependencies-url]: https://david-dm.org/distributions-io/triangular-pdf

[dev-dependencies-image]: http://img.shields.io/david/dev/distributions-io/triangular-pdf.svg
[dev-dependencies-url]: https://david-dm.org/dev/distributions-io/triangular-pdf

[github-issues-image]: http://img.shields.io/github/issues/distributions-io/triangular-pdf.svg
[github-issues-url]: https://github.com/distributions-io/triangular-pdf/issues
