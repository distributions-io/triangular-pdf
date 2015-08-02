options( digits = 16 )
library( jsonlite )
library( triangle )


a = -2
b = 2
c = 1
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

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/partial.json" )
