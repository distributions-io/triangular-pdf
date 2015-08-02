options( digits = 16 )
library( jsonlite )
library( triangle )

a = -3
b = 3
c = 0
x = c( -5, -2.5, 0, 2.5, 5 )
y = dtriangle( x, a,b,c )

cat( y, sep = ",\n" )

data = list(
	a = a,
	b = b,
	c = c,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/number.json" )
