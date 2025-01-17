We use quantifiers to talk about collections of data

$\forall$xP(x)
	P(x) is true for every x in the domain
		read as "for all x, P of x"
$\exists$xP(x)
	There is an x in the domain for which P(x) is true
		read as "there exists x, P of x"

Requires a [[Domain of Discourse]]

Examples:
	$\forall x\text{Odd(x)}$
		True for odd numbers, false for integers, false for multiples of 5
	$\forall x\text{LessThan4(x)}$
		False for all categories
	$\exists x\text{Odd(x)}$
		True for all categories
	$\exists x\text{LessThan4(x)}$
		True for odd numbers and integers, false for multiples of 5

#### Translating into English and vice versa

$\forall x\exists y\text{ Greater(y, x)}$
	For all positive integers x, there exists a positive integer y such that y is greater than x

$\exists y\forall x\text{ Greater(y,x)}$
	There is a positive integer y such that, for every pos. int x, we have y>x

$\forall x\exists y\text{ (Prime(y)}\land \text{Greater(y,x))}$
	For every positive integer x, there is a positive integer y such that y > x and y is prime

We can sound more natural by removing integer names
	For every positive integer, there is some larger positive integer
	There is a positive integer that is larger than every other positive integer
	For every positive integer, there is a prime that is larger

#### Negating Quantifiers
For $\forall$ (for all), the statement becomes $\exists$ (exists) and the inside is also negated
For $\exists$ (exists), the statement becomes $\forall$ (for all) and the inside is also negate

#### Scope
Quantifiers can have scope like local variables in Java.
Only variables within the same parenthesis are the same
When a variable is created within the scope of a quantifier, it is considered a bound variable and can be changed freely
	Other variables are considered "free variables" and we shouldn't change their names
