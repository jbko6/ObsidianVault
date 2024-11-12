### Conceptual Problems Ch. 4
5. Find a $3\times 4$ matrix $A$ with nullity $2$ and with column space
$$
col(A)=span\left\{ \begin{bmatrix}
1\\0\\1
\end{bmatrix},\begin{bmatrix}
4\\-3\\7
\end{bmatrix},\begin{bmatrix}
3\\-2\\5
\end{bmatrix} \right\},
$$
or explain why such a matrix cannot exist.

For this matrix to have nullity 2 there must be at most 2 pivots in the matrix formed by the columns of the given span.
I'll reduce this matrix:
$$
\begin{bmatrix}
1 & 4 & 3 \\
0 & -3 & -2 \\
1 & 7 & 5
\end{bmatrix}
$$
$R_{3}-R_{1}\to R_{3}$
$$
\begin{bmatrix}
1 & 4 & 3 \\
0 & -3 & -2 \\
0 & 3 & 2
\end{bmatrix}
$$
$R_{3}+R_{2}\to R_{3}$
$$
\begin{bmatrix}
1 & 4 & 3 \\
0 & -3 & -2 \\
0 & 0 & 0
\end{bmatrix}
$$
There's no pivot in the third row/column, so from this we know the span of the provided columns is actually 2 dimensional, therefore the column space is also 2 dimensional, and therefore via the rank nullity theorem this $3\times 4$ matrix will be possible (since we are looking for a nullity of two and the rank has been found to be two, 2+2=4 which is the number of columns we are looking for).
In regards to finding this matrix, we should be able to extend the set with vector that maintains a lack of a pivot in the third row of the reduced matrix.
An example $3\times 4$ matrix that fulfils these criteria is:
$$
\begin{bmatrix}
1 & 4 & 3 & 1 \\
0 & -3 & -2 & -5 \\
1 & 7 & 5 & 6
\end{bmatrix}
$$
If we were to repeat the row operations performed previously, we would reduce this matrix to:
$$
\begin{bmatrix}
1 & 4 & 3 & 1 \\
0 & -3 & -2 & -5 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$
Which has a row/column space that is 2 dimensional and a nullity of 2 as well.

6. Let $L$ in $\mathbb{R}^3$ be the line through the origin spanned by the vector $v=\begin{bmatrix}1\\1\\3\end{bmatrix}$. Find the linear equations that define $L$, i.e., find a system of linear equations whose solutions are the points in $L$.

We need to find two or more linear equations whose solutions are the points formed by varying that vector's magnitude. I'm going to try and find two planes in 3d space. The intersection of these two planes should be the span of this vector. To find these two planes I'm going to find two orthogonal vectors to $v$. Then I will use these orthogonal vectors as the normal vectors of two planes. These two planes should form an intersection that is equal to the span of $v$.

So one orthogonal vector is $\begin{bmatrix}2\\1\\-1\end{bmatrix}$ (found by setting the dot product of this vector and $v$ equal to 0)
Another orthogonal vector is $\begin{bmatrix}0\\9\\-3\end{bmatrix}$.
These vectors are the normal vectors of the planes defined by $2x+1y-1z=0$ and $9y-3z=0$.

So a system of equations that has a solution space equal to the span of $v$ is:
$$
\begin{align}
2x+1y-1z=0 \\
9y-3z=0
\end{align}
$$

7. Give an example of a linear transformation from $T:\mathbb{R}^2\to \mathbb{R}^3$ with the following two properties:
	(a) $T$ is not one-to-one
	(b) 
$$
range(T)=\left\{ \begin{bmatrix}
x\\y\\z
\end{bmatrix}\in \mathbb{R}^3 : x-y+2z=0 \right\}
$$
	or explain why this is not possible. If you give an example, you must include an explanation for why your linear transformation has the desired properties.