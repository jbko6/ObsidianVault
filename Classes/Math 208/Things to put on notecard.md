Matrices
	Rows x Columns
	2 x 3 matrix has two rows
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
	