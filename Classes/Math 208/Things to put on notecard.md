Matrices
	Rows x Columns
	2 x 3 matrix has two rows
Reducing a matrix
	Use row operators
		Add rows together
		Multiply rows by a constant
		Switch the order of rows
Properties of a matrix
	We can say that a matrix's columns are linearly independent by looking at the vector set of its columns
	We can say that a matrix spans some space by looking at the span of its columns
Multiplying matrices
	Take the dot product
	Multiply row by column to work out each output number
	Both the columns and rows of a matrix can be presented as vectors
Inversing matrices
	For a 2d matrix $\begin{bmatrix}a&b\\c&d\end{bmatrix}$ the inverse is $\begin{bmatrix}d&-b\\-c&a\end{bmatrix}$
	For larger matrices, set up the matrix with the identity matrix by its side, then work out the left side to be the identity matrix
$$
\left[\begin{array}{ccc|ccc}
a&b&c&1&0&0 \\
d & e & f & 0 & 1 & 0 \\
g & h & i & 0 & 0 & 1
\end{array}\right]
$$
Transposing matrices
	Just flip the rows and columns
Determinant of a matrix
	$\det$ of a 2d matrix $\begin{bmatrix}a&b\\c&d\end{bmatrix}$ is $ad-bc$
	$\det$ of a larger matrix can be found with the method of cofactors
	Choose a column (the one with the most zeroes)
Vector span
	The span of a vector set is all the vectors that could be made up by combining vectors
Linear independence
	A vector set is linearly independent if all the vectors cannot be made up of combinations of other vectors
Trivial solution
	The solution of the zero vector
Subspaces
	Spans are subspaces and subspaces are spans
	Every matrix has two subspaces
		The column space, which is a subspace of $\mathbb{R}^m$
		The null space
	If some vector is in a subspace and you have another vector, those two vectors are in a subspace if it is closed under addition and scalar multiplication
Basis
	A linearly independent set of vectors that spans another set
		The other set is what this set is a basis for
	Generally found through row reduction
	Dimension is derived from the number of basis vectors
Rank nullity theorem
	$\text{rank}(A)=\text{dim Col}(A)=$ the number of columns with pivots
	$\text{nullity}(A)=\text{dim Nul}(A)=$ the number of free variables = the number of columns without pivots
	$\text{rank}(A)+\text{nullity}(A)=n$ (# of columns)
Matrix Transformations
	A matrix can be thought of as a function that takes some input vector and transforms it
		Matrices can change the dimension of the vector
	The # of rows of a matrix gives the output dimension (codomain)
	The # of columns gives the input dimension (domain)
	For a vector $x$, $T(x)$ is the image of $x$ under $T$
	The set of all images is the $range$ of $T$
		The **span** of the matrix
One-to-One
	AKA injective
	For every vector $b$ in $\mathbb{R}^m$, the equation $T(x)=b$ has $zero$ or $one$ solution $x$ in $\mathbb{R}^n$
	Different inputs of $T$ have different outputs
	If $T(u)=T(v)$ then $u=v$
	Wide matrices are not one-to-one
	The following are equivalent:
		$T$ is one-to-one
		The columns of $A$ are **linearly independent**
		$A$ as a pivot in every column
		The $range$ of $T$ has dimension $n$
		