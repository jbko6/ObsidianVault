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

Since we are looking for a linear transformation that goes from $\mathbb{R}^2\to \mathbb{R}^3$, we want its associated matrix to have the dimensions $3 \times 2$. In addition, the range of our linear transformation must contain every vector in 3d space such that $x-y+2z=0$. In other words, the geometry of the span is the plane with the normal vector $\begin{bmatrix}1\\-1\\2\end{bmatrix}$. We need to find two vectors in 3d space that span this plane together. These two vectors will be the columns for our matrix. To find these two vectors, we can simply find two orthogonal vectors to the normal vector of the given plane.
Two such orthogonal vectors are:
$$
\begin{bmatrix}
0\\2\\1
\end{bmatrix},\begin{bmatrix}
10\\0\\-5
\end{bmatrix}
$$
Found by setting the dot product of this unknown vector with the normal vector equal to 0.
These orthogonal vectors form the columns of our new matrix:
$$
\begin{bmatrix}
10 & 0 \\
0 & 2 \\
-5 & 1
\end{bmatrix}
$$
Now note that it's not possible for this matrix, or this linear transformation in general, to be not be one-to-one. As found earlier, the dimension of this matrix must be $3 \times 2$. In addition, since the range restriction forms the geometry of a plane, a 2 dimensional shape, then the span of the matrix must also be 2 dimensional. Therefore, for the range requirement and dimensional requirement to be satisfied, there must be pivots in all two columns and in two rows. However, for the linear transformation to not be one-to-one, the column space must be linearly dependent. In other words, there must be a column without a pivot. Considering all this, it's evident such a linear transformation is not possible.

8. Consider the following row equivalent matricies:
$A=\begin{bmatrix}a_{1}&a_{2}&a_{3}&a_{4}\end{bmatrix}\sim \begin{bmatrix}3&0&-1&5\\0&0&2&-1\\0&0&0&0\end{bmatrix}=B=\begin{bmatrix}b_{1}&b_{2}&b_{3}&b_{4}\end{bmatrix}$
Let $col(A)$ be the column space of $A$. Answer the following with reasons.
(a) Is $\left\{ a_{1},a_{3} \right\}$ a basis for $col(A)$

Yes, since in the row reduced version of $A$ only $a_{1}$ and $a_{3}$ have pivots.

(b) Is $\left\{ a_{1}+a_{2},a_{3}+a_{4} \right\}$ a basis for $col(A)$?

Yes, since adding those columns still maintains linear independence.

$(c)$ Is $\left\{ a_{1}-\frac{1}{3}a_{3}, a_{4} \right\}$ a basis for $col(A)$?

That set would look like $\left\{ \begin{bmatrix}\left( \frac{10}{3} \right)\\\left( -\frac{2}{3} \right)\\0\end{bmatrix},\begin{bmatrix}5\\-1\\0\end{bmatrix} \right\}$ if formed with columns from $B$.

Since these vectors are not linearly independent, this is not a valid basis for $col(A)$.

(d) Is $\left\{ a_{1}+a_{3},a_{4} \right\}$ a basis for $col(A)$?

That set would look like $\left\{ \begin{bmatrix}2\\2\\0\end{bmatrix},\begin{bmatrix}5\\-1\\0\end{bmatrix} \right\}$ if formed with columns from $B$. Since these vectors are linearly independent, this is a valid basis for $col(A)$.

10. Let $B=\begin{bmatrix}1&0&0\\0&1&0\\0&0&0\end{bmatrix}$. Note that $null(B)=span(\begin{bmatrix}0\\0\\1\end{bmatrix})$.
	(a) Find, if possible, a $3 \times 3$ matrix $A$, where $BA$ has nullity 2. If you find an example, what is the nullity of the matrix $A$ that you found? Can you find an example with a different nullity?

$$
A=\begin{bmatrix}
1 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}, BA=\begin{bmatrix}
1 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}
$$
Matrix $A$ has nullity 2. Matrix $BA$ has nullity 2 as well. Another example with a different nullity would be:
$$
A=\begin{bmatrix}
1 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 1
\end{bmatrix},BA=\begin{bmatrix}
1 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}
$$
This new matrix $A$ has nullity 1, while $BA$ still has nullity 2.

(b) Find, if possible, a $3 \times 3$ matrix $A$, where $BA$ has nullity 1. If you find an example, what is the nullity of the matrix $A$ that you found? Can you find an example with a different nullity?

$$
A=\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix},BA=\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 0
\end{bmatrix}
$$
Matrix $A$ has nullity 0, while $BA$ has nullity 1. Another example:
$$
A=\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 0
\end{bmatrix},BA=\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 0
\end{bmatrix}
$$
Matrix $A$ has nullity 1, while $BA$ has nullity $1$.

(c) Find, if possible, a $3 \times 3$ matrix $A$, where $BA$ has nullity 0. If you find an example, what is the nullity of the matrix $A$ that you found? Can you find an example with a different nullity?

This is not possible. Since the entire third row of $B$ is zero, there's no matrix that can be multiplied with $B$ to make that third row non-zero. Therefore, there will never be a pivot in the third row.

### Holt 4.4

3. Given the basis
$$
B=\left\{ \begin{bmatrix}
4\\3
\end{bmatrix}, \begin{bmatrix}
2\\1
\end{bmatrix} \right\}
$$
	convert the vector $[x]_{B}=\begin{bmatrix}2\\4\end{bmatrix}$ to the standard basis.

To convert from the given basis to the standard basis, we just need to multiply the vector by the basis given. So,
$$
\begin{bmatrix}
4&2\\3&1
\end{bmatrix}\begin{bmatrix}
2\\4
\end{bmatrix}=\begin{bmatrix}
16\\10
\end{bmatrix}
$$
5. Given the basis
$$
B=\left\{ \begin{bmatrix}
1\\-2\\-1
\end{bmatrix},\begin{bmatrix}
1\\-2\\0
\end{bmatrix},\begin{bmatrix}
2\\-1\\3
\end{bmatrix} \right\}
$$
	convert the vector $[x]_{B}=\begin{bmatrix}1\\2\\1\end{bmatrix}$ to the standard basis.

Same thing as before.
$$
\begin{bmatrix}
1 & 1 & 2 \\
-2 & -2 & -1 \\
-1 & 0 & 3
\end{bmatrix}\begin{bmatrix}
1\\2\\1
\end{bmatrix}=\begin{bmatrix}
5\\-7\\2
\end{bmatrix}
$$
9. Find the change of basis matrix to convert $I$ to $B$. Then represent the vector $x$ in the basis $B$.
$$
B=\left\{ \begin{bmatrix}
4\\3
\end{bmatrix},\begin{bmatrix}
2\\1
\end{bmatrix} \right\},[x]=\begin{bmatrix}
1\\1
\end{bmatrix}
$$
The change of basis matrix from $B$ to $I$ is
$$
\begin{bmatrix}
4&2\\3&1
\end{bmatrix}
$$
The inverse (from $I$ to $B$) is:
$$
\begin{bmatrix}
-\frac{1}{2} & 1 \\
\frac{3}{2} & -2
\end{bmatrix}
$$
So $[x]_{B}$ is
$$
\begin{bmatrix}
-\frac{1}{2} & 1 \\
\frac{3}{2} & -2
\end{bmatrix}\begin{bmatrix}
1 \\
1
\end{bmatrix}=\begin{bmatrix}
\frac{1}{2} \\
-\frac{1}{2}
\end{bmatrix}
$$
11. Find the change of basis matrix to convert $I$ to $B$. Then represent the vector $x$ in the basis $B$.
$$
B=\left\{ \begin{bmatrix}
1\\0\\0
\end{bmatrix},\begin{bmatrix}
-1\\-2\\1
\end{bmatrix},\begin{bmatrix}
1\\-1\\1
\end{bmatrix} \right\},[x]=\begin{bmatrix}
1\\2\\-1
\end{bmatrix}
$$
The change of basis matrix from $B$ to $I$ is
$$
\begin{bmatrix}
1 & -1 & 1 \\
0 & 2 & -1 \\
0 & 1 & 1
\end{bmatrix}
$$
The inverse of this matrix (from $I$ to $B$ now) is
$$
\begin{bmatrix}
1 & \frac{2}{3} & -\frac{1}{3} \\
0 & \frac{1}{3} & \frac{1}{3} \\
0 & -\frac{1}{3} & \frac{2}{3}
\end{bmatrix}
$$
So the vector $x$ in the basis $B$ is:
$$
\begin{bmatrix}
1 & \frac{2}{3} & -\frac{1}{3} \\
0 & \frac{1}{3} & \frac{1}{3} \\
0 & -\frac{1}{3} & \frac{2}{3}
\end{bmatrix}\begin{bmatrix}
1\\2\\-1
\end{bmatrix}=\begin{bmatrix}
\frac{8}{3} \\
\frac{1}{3} \\
-\frac{4}{3}
\end{bmatrix}
$$
