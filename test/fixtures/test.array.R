options( digits = 16 )
library( jsonlite )
library( triangle )

a = 10
b = 20
c = 13
x = seq( -1000, 1000, 0.5 )
y = dtriangle( x, a,b,c )

cat( y, sep = ",\n" )

data = list(
	a = a,
	b = b,
	c = c,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/array.json" )
