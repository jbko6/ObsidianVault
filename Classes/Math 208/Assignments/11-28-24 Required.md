### Conceptual Problems Ch. 5

1. Find the determinant of this matrix
$$
\begin{bmatrix}
1 & 3 & 2 \\
0 & 1 & 1 \\
-2 & 0 & 4
\end{bmatrix}^3\begin{bmatrix}
8 & 0 & 3 \\
-1 & 1 & 1 \\
0 & 2 & 4
\end{bmatrix}^{-1}
$$
First, it's important to note that because of the properties of the determinant, we can rewrite
$$
\det\left(\begin{bmatrix}
1 & 3 & 2 \\
0 & 1 & 1 \\
-2 & 0 & 4
\end{bmatrix}^3\begin{bmatrix}
8 & 0 & 3 \\
-1 & 1 & 1 \\
0 & 2 & 4
\end{bmatrix}^{-1}\right)
$$
as
$$
\det\left(\begin{bmatrix}
1 & 3 & 2 \\
0 & 1 & 1 \\
-2 & 0 & 4
\end{bmatrix}\right)^3\det\left(\begin{bmatrix}
8 & 0 & 3 \\
-1 & 1 & 1 \\
0 & 2 & 4
\end{bmatrix}\right)^{-1}
$$
So we only need to find the determinants of the matrices as they are without multiplying them first.
Finding the determinant of the first matrix:
$$
1(4-0)-3(0+2)+2(0+2)=4-6+4=2
$$
For the second matrix:
$$
8(4-2)-0+3(-2-0)=16-6=10
$$
So,
$$
2^3*10^{-1}=\frac{4}{5}
$$
And there's the final determinant.

2. Compute $\det(5A^3)$ for the matrix $A$ below.
$$
A=\begin{bmatrix}
0 & 2 & 0 & 1 & 0 & 1 & 0 & 1 & 0 & 1 \\
0 & 0 & 3 & 0 & 1 & 0 & 1 & 0 & 1 & 0 \\
0 & 0 & 0 & 4 & 0 & 1 & 0 & 1 & 0 & 1 \\
0 & 0 & 0 & 0 & 5 & 6 & 1 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & 6 & 5 & 0 & 1 & 0 & 1 \\
0 & 0 & 0 & 0 & 0 & 0 & 4 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 3 & 0 & 1 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 2 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 \\
1 & 0 & 1 & 0 & 1 & 0 & 1 & 0 & 1 & 0
\end{bmatrix}
$$
I'll rearrange the rows
$$
A=\begin{bmatrix}
1 & 0 & 1 & 0 & 1 & 0 & 1 & 0 & 1 & 0 \\
0 & 2 & 0 & 1 & 0 & 1 & 0 & 1 & 0 & 1 \\
0 & 0 & 3 & 0 & 1 & 0 & 1 & 0 & 1 & 0 \\
0 & 0 & 0 & 4 & 0 & 1 & 0 & 1 & 0 & 1 \\
0 & 0 & 0 & 0 & 5 & 6 & 1 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & 6 & 5 & 0 & 1 & 0 & 1 \\
0 & 0 & 0 & 0 & 0 & 0 & 4 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 3 & 0 & 1 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 2 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1
\end{bmatrix}
$$
Now I'll start finding the determinant starting from the leftmost column
Using the method of cofactors:
$$
1*2*3*4*(5(5*4*3*2*1)-6(6*4*3*2*1))=-6336
$$

3. This exercise uses the notion of *cofactors* of a matrix defined in Section 5.1. Recall that if $A$ is an $n \times n$ matrix, then $M_{ij}$ denotes the matrix obtained from $A$ by deleting the *i*th row and *j*th column of $A$.
$$
\text{Let } A=\begin{bmatrix}
-2 & 0 & 2 \\
1 & 1 & 1 \\
3 & -1 & 5
\end{bmatrix}
$$
(a) Compute all nine cofactors of $A$ as well as $\det(A)$. Let $B$ be the $3 \times 3$ matrix containing the cofactors, with each entry multiplied by the appropriate $\pm$ sign. So the $ij$-entry of $B$ is $(-1)^{i+j}\det(M_{ij})$.

$$
B=\begin{bmatrix}
6 & -2 & -4 \\
-2 & -16 & -2 \\
-2 & 4 & -2
\end{bmatrix}
$$
$$\det(A)=-20$$
(b) Compute $AB^T$. You should get a diagonal matrix with the same number in every diagonal entry, in other words, a multiple of the identity matrix. What multiple is it?
$$
B^T=\begin{bmatrix}
6 & -2 & -2 \\
-2 & -16 & 4 \\
-4 & -2 & -2
\end{bmatrix}
$$
$$
AB^T=\begin{bmatrix}
-20 & 0 & 0 \\
0 & -20 & 0 \\
0 & 0 & -20
\end{bmatrix}
$$
This is the identity matrix multiplied by the determinant of $A$.

(c) Fill in the blank to make this equation true:
$$
AB^T=(?)*I, \text{ therefore } A^{-1}=\frac{1}{(?)}*B^T
$$
The blank is $\det(A)$.

(d) Compute the matrix $B^T$ when $A$ is the $2\times 2$ matrix
$$
A=\begin{bmatrix}
a&b \\
c&d
\end{bmatrix}
$$
and then use it to compute a formula for $A^{-1}$. Does this agree with the formula for $A^{-1}$ given in the textbook?

$$
B=\begin{bmatrix}
d & -c \\
-b & a
\end{bmatrix}
$$
$$
B^T=\begin{bmatrix}
d & -b \\
-c & a
\end{bmatrix}
$$
$$
A^{-1}=\frac{1}{\det(A)}B^T=\frac{1}{ad-bc}\begin{bmatrix}
d&-b\\-c&a
\end{bmatrix}
$$
Yes it agrees with the textbook formula.
I think this method for computing the inverse is not efficient because it is a recursive definition. In other words, you work downwards from a large from recursively down to a small problem, then work back up to the large problem with the solution. Doing so you end up working with a lot of new matrices that you have to manipulate. Whereas with finding the inverse with G.E. you just work with one matrix at one scale.

4. Consider the plane $P$ in $\mathbb{R}^3$ spanned by the vectors $(1,0,1)$ and $(2,-1,0)$.

(a) Express $P$ as the solution set of a linear system in the variables $x,y,z$.

First we'll find the normal vector of the plane $P$. To do so we'll take the cross product of the two vectors that form its span.

$\text{cross product } =(1,2,-1)$

So one such linear system is
$$
\begin{align}
1x+2y-1z=0
\end{align}
$$
(b) Compute the following determinant:
$$
\det \begin{bmatrix}
x & 1 & 2 \\
y & 0 & -1 \\
z & 1 & 0
\end{bmatrix}
$$
$=x(1)-1(0+1z)+2(y)=1x+2y-1z=0$

(c) Check that the equation obtained by setting the determinant you just compute to zero has the same solutions as the linear system from (1). Why does this happen?

This is the same. Both the cross product and the determinant are linked in that they give you the area from by two vectors. For the cross product, that's the magnitude, while for the determinant that's just what it gives.

(d) Can you now explain the formula for compute the cross product of two vectors in $\mathbb{R}^3$?

You take your two vectors and form a $3\times 3$ vector with the third vector being the basis vectors $(i,j,k)$. Then you find the determinant of that matrix and there's your cross product.

(e) Generalize the process described in this example to $\mathbb{R}^4$. Take 3 linearly independent vectors (of your choice) and express the plane they span as the set of solutions to a linear equation by computing a determinant as above.

I'll use
$$
\begin{align}
\begin{pmatrix}
1 \\
0 \\
0 \\
0
\end{pmatrix},\begin{pmatrix}
0 \\
1 \\
0 \\
0
\end{pmatrix},\begin{pmatrix}
0 \\
0 \\
1 \\
0
\end{pmatrix}
\end{align}
$$
The matrix I'll form will be
$$
\begin{bmatrix}
i & 1 & 0 & 0 \\
j & 0 & 1 & 0 \\
k & 0 & 0 & 1 \\
w & 0 & 0 & 0
\end{bmatrix}
$$
Computing the determinant:
$$
i*0-j*0+k*0-w*-1=-w
$$
So the linear equation would be
$$
w=0
$$
5. (Determinants and Geometry)
(a) Let $T:\mathbb{R}^2\to \mathbb{R}^2$ be counter clockwise rotation by $\frac{\pi}{3}$, i.e. $T(x)$ is the vector obtained by rotating $x$ counter clockwise by $\frac{\pi}{3}$ around 0. Without computing any matrices, what would you expect $\det(T)$ to be? Then check your answer by using the fact that the matrix for counterclockwise rotation by $\theta$ is 
$$
A=\begin{bmatrix}
\cos \theta & -\sin \theta \\
\sin \theta & \cos \theta
\end{bmatrix}
$$

I would expect it to be 1 because all it's doing is rotating, not skewing.
$$
\det(A)=\cos^2\theta+\sin^2\theta=1
$$
It is 1.

(b) Same question as $(a)$ only this time let $T$ be the transformation that reflects $\mathbb{R}^2$ over the line $y=x$. That is $T(\begin{bmatrix}x\\y\end{bmatrix})=\begin{bmatrix}y\\x\end{bmatrix}$. Guess what $\det(T)$ should be, then check by finding the matrix for $T$ and computing its determinant.

I would guess -1 because it is reflecting but not skewing.

The matrix for $T$ is $\begin{bmatrix}0&1\\1&0\end{bmatrix}$
$\det\left(\begin{bmatrix}0&1\\1&0\end{bmatrix}\right)=-1$

(c) Rotation matrices in $\mathbb{R}^3$ are more complicated in $\mathbb{R}^2$ because you have to specify an axis of rotation, which could be any line through the origin. Nonetheless, what would you expect $\det(T)$ to be? Look up the "basic 3D rotation matrices" and compute $\det(A)$ for each one.

I would expect a determinant of 1.

For
$$
R_{x}(\theta)=\begin{bmatrix}
1 & 0 & 0 \\
0 & \cos \theta & -\sin \theta \\
0 & \sin \theta & \cos \theta
\end{bmatrix}, \det (R_{x}(\theta))=1
$$
Then
$$
R_{y}(\theta)=\begin{bmatrix}
\cos \theta & 0 & \sin \theta \\
0 & 1 & 0 \\
-\sin \theta & 0 & \cos \theta
\end{bmatrix}, \det(R_{y}(\theta))=1
$$
Finally,
$$
R_{z}(\theta)=\begin{bmatrix}
\cos \theta & -\sin \theta & 0 \\
\sin \theta & \cos \theta & 0 \\
0 & 0 & 1
\end{bmatrix},\det (R_{z}(\theta))=1
$$

(d) Let $T:\mathbb{R}^3\to \mathbb{R}^3$ be projection onto the xy-plane so $T(\begin{bmatrix}x\\y\\z\end{bmatrix})=\begin{bmatrix}x\\y\\0\end{bmatrix}$. What is $\det(T)?$ Guess first and then check using a matrix

I would expect $\det(T)$ to be 0 because it is flattening space. One valid matrix is
$$
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 0
\end{bmatrix}
$$
The determinant of this matrix is 0.

6. Suppose we want to make a quadratic polynomial
$$
y=f(x)=a_{0}+a_{1}x+a_{2}x^2
$$
	that passes through three specified points $p_{1}=(p_{1},q_{1})$, $p_{2}=(p_{2},q_{1})$, and $p_{3}=(p_{3},q_{3})$. Consider the equation
$$
0=\det \begin{bmatrix}
1 & x & x^2 & y \\
1 & p_{1} & p_{1}^2 & q_{1} \\
1 & p_{2} & p_{2}^2 & q_{2} \\
1 & p_{3} & p_{3}^2 & q_{3}
\end{bmatrix}
$$
	The determinant above implicitly gives an equation $y=f(x)$

(a) Write out the matrix above, using $p_{1}=(0,0),p_{2}=(1,1),p_{3}=(3,5)$ for the constants $p_{i},q_{i}$ but leaving $x$ and $y$ as variables. Solve the equation $\det(A)=0$ to get $y=a$ quadratic polynomial in $x$. Check directly that the parabola passes through $p_{1},p_{2}$ and $p_{3}$.

$$
A=\begin{bmatrix}
1 & x & x^2 & y \\
1 & 0 & 0 & 0 \\
1 & 1 & 1 & 1 \\
1 & 3 & 9 & 5
\end{bmatrix}
$$
$$
\det(A)=0-(-4x-2x^2+6y)+0-0=2x^2+4x-6y
$$
I'll graph it to verify it.
```desmos-graph
(0,0)
(1,1)
(3,5)
2x^2+4x-6y=0
```
It works!! 🥳🥳

(b) Why does part (a) succeed? Examine the matrix $A$ from part $(a)$. If you plug in $(x,y)=p_{1}=(0,0)$ for the first row of $A$, the first two rows will become the same. So, by the 'repeated rows' rule, the equation $\det(A)=0$ must be true for those specific $x,y$ values. What does this mean about the polynomial $y=f(x)$? What about if you plug in $(x,y)=(1,1)$ or $(3,5)$? Why (in terms of determinants) must be equation $y=f(x)$ be satisfied by those points?

For whatever value of $(x,y)$ the graph is at, if that value is equal to one of our constraining points, then the rows (taken as vectors) will no longer be linearly independent. Since they are no longer linearly independent, the determinant will be equal to 0. In other words, the top row, $\begin{bmatrix}1&x&x^2&y\end{bmatrix}$ is constrained such that by adjusting the values of $x$ and $y$ all the other rows can be formed. This is done by setting the determinant to 0.

(c) How could you use the determinant to make a cubic polynomial that passes through 4 given points?

This would look like
$$
\begin{bmatrix}
1 & x & x^2 & x^3 & y \\
1 & p_{1} & p_{1}^2 & p_{1}^3 & q_{1} \\
1 & p_{2} & p_{2}^2 & p_{2}^3 & q_{2} \\
1 & p_{3} & p_{3}^2 & p_{3}^3 & q_{3} \\
1 & p_{4} & p_{4}^2 & p_{4}^3 & q_{4}
\end{bmatrix}
$$

### Holt Section 6.1

3. Determine which of $x_{1},x_{2},x_{3}$ are eigenvectors of the given matrix. For those that are eigenvectors, find the corresponding eigenvalues.
$$
A=\begin{bmatrix}
2 & 7 & 2 \\
0 & -1 & 0 \\
0 & -2 & 1
\end{bmatrix},x_{1}=\begin{bmatrix}
-3\\1\\1
\end{bmatrix},x_{2}=\begin{bmatrix}
-2\\0\\1
\end{bmatrix},x_{3}=\begin{bmatrix}
1\\0\\0
\end{bmatrix}
$$

I just need to multiply each vector by the matrix.
$$
Ax_{1}=\begin{bmatrix}
3\\-1\\-1
\end{bmatrix}
$$
This is an eigenvector with eigenvalue $-1$.
$$
Ax_{2}=\begin{bmatrix}
-2\\0\\1
\end{bmatrix}
$$
This is an eigenvector with eigenvalue $1$.
$$
Ax_{3}=\begin{bmatrix}
2\\0\\0
\end{bmatrix}
$$
This is an eigenvector with eigenvalue $2$.

15. For the given $\lambda$ find a basis of the corresponding eigenspace of the following matrix.
$$
A=\begin{bmatrix}
6 & -3 & 7 \\
4 & 1 & 5 \\
4 & -3 & 9
\end{bmatrix},\lambda=4
$$
To find the eigenspace we need to find the null space of the set of eigenvectors formed by this eigenvalue. To find those:
$$
A-4\text{Id}=\begin{bmatrix}
2 & -3 & 7 \\
4 & -3 & 5 \\
4 & -3 & 5
\end{bmatrix}
$$
Finding the null space by G.E:
$R_{2}-2R_{1}\to R_{2}$
$R_{3}-2R_{1}\to R_{3}$
$$
\begin{bmatrix}
2 & -3 & 7 \\
0 & 3 & -9 \\
0 & 3 & -9
\end{bmatrix}
$$
$R_{3}-2R_{2}\to R_{3}$
$$
\begin{bmatrix}
2 & -3 & 7 \\
0 & 3 & -9 \\
0 & 0 & 0
\end{bmatrix}
$$
Finding the null space:
$$
\begin{align}
x_{3}=s_{1} \\
3x_{2}=9s_{1},x_{2}=3s_{1} \\
2x_{1}=3x_{2}-7s_{1},2x_{1}=9s_{1}-7s_{1},x_{1}=s_{1}
\end{align}
$$
By setting $s_{1}$ = 1 we find a valid basis for the eigenspace
$$
\begin{pmatrix}
1 \\
3 \\
1
\end{pmatrix}
$$
**For the next two problems for the matrix $A$, find the characteristic polynomial, the eigenvalues and a basis for each eigenspace.**

25. $$
A=\begin{bmatrix}
3 & 0 & 0 \\
1 & 2 & 0 \\
-4 & 5 & -1
\end{bmatrix}
$$
$$
A-\lambda \text{Id}=\begin{bmatrix}
3-\lambda & 0 & 0 \\
1 & 2-\lambda & 0 \\
-4 & 5 & -1-\lambda
\end{bmatrix}
$$
$\det(A-\lambda \text{Id})=(3-\lambda)((2-\lambda)(-1-\lambda))$
$=(3-\lambda)(-2-2\lambda+\lambda+\lambda^2)=-6-6\lambda+3\lambda+3\lambda^2+2\lambda+2\lambda^2-\lambda^2-\lambda^3$
$=-\lambda^3+4\lambda^2-\lambda-6$
The eigenvalues are 3, 2, and -1.
$$
\begin{bmatrix}
0 & 0 & 0 \\
1 & -1 & 0 \\
-4 & 5 & -4
\end{bmatrix}
$$

1. $$
A=\begin{bmatrix}
2 & 5 & 1 \\
0 & -3 & -1 \\
2 & 14 & 4
\end{bmatrix}
$$
$$A-\lambda \text{Id}=\begin{bmatrix}2-\lambda & 5 & 1 \\
0 & -3-\lambda & -1 \\
2 & 14 & 4-\lambda\end{bmatrix}$$
$\det(A-\lambda \text{Id})=(2-\lambda)((-3-\lambda)(4-\lambda)+14)-5(2)+1(-(-3-\lambda)(2))$
$=-x^3+3x^2-2x$
$=-x(x^2-3x+2)$
The eigenvalues are 1 and 2

47. Suppose that $A$ is a square matrix with characteristic polynomial
$$
(\lambda-3)^3(\lambda-2)^2(\lambda+1)
$$

(a) What are the dimensions of the matrix $A$?

I think 3 dimensional because this polynomial has degree 3.

(b) What are its eigenvalues?

3, 2, and -1

(c) Is the matrix $A$ invertible?

Because this matrix does not have a zero eigenvalue, this matrix is invertible.

(d) What is the largest possible dimension for an eigenspace of $A$?

3, because $(\lambda-3)$ is raised to the third power.

### Holt Section 6.2

3. Let $A=PDP^{-1}$. Find $A^5$
$$
P=\begin{bmatrix}
1 & 3 & 1 \\
0 & -1 & 2 \\
0 & 0 & -1
\end{bmatrix},D=\begin{bmatrix}
1 & 0 & 0 \\
0 & 2 & 0 \\
0 & 0 & -1
\end{bmatrix}
$$
$$
A=\begin{bmatrix}
1 & -3 & -4 \\
0 & 2 & 6 \\
0 & 0 & -1
\end{bmatrix}
$$
$$
A^5=\begin{bmatrix}
1 & -93 & -184 \\
0 & 32 & 66 \\
0 & 0 & -1
\end{bmatrix}
$$
7. Find a matrix $A$ with the given eigenvalues and eigenvectors.
$$
\lambda_{1}=-1\to \left\{ \begin{bmatrix}
1\\1\\0
\end{bmatrix} \right\},\lambda_{2}=0\to \left\{ \begin{bmatrix}
1\\2\\1
\end{bmatrix} \right\},\lambda_{3}=1\to \left\{ \begin{bmatrix}
-1\\1\\1
\end{bmatrix} \right\}
$$
Start with a matrix defined by the eigenvalues.
$$
E=\begin{bmatrix}
1 & 0 & 0 \\
0 & -2 & 0 \\
0 & 0 & 2
\end{bmatrix}
$$Now use the change of basis matrix
$$
S=\begin{bmatrix}
1 & 1 & -1 \\
1 & 2 & 1 \\
0 & 1 & 1
\end{bmatrix}
$$
Compute $SES^-1$
$$
SES^{-1}=\begin{bmatrix}
-1 & 2 & -35 \\
-97 & 98 & -163 \\
-64 & 64 & -96
\end{bmatrix}
$$
This matrix fits the requirements.

11. Diagonalize the matrix $A$, if it is possible to do so.
$$
A=\begin{bmatrix}
7 & -8 \\
4 & -5
\end{bmatrix}
$$
First we need to find the eigenvalues
$$
A-\lambda \text{Id}=\begin{bmatrix}
7-\lambda & -8 \\
4 & -5-\lambda
\end{bmatrix}
$$
$\det(A-\lambda)=(7-\lambda)(-5-\lambda)+32$
The eigenvalues are -1 and 3
Now we find the eigenvectors for each of these
$$
A+1\text{Id}=\begin{bmatrix}
8 & -8 \\
4 & -4
\end{bmatrix}\to^{GE}\begin{bmatrix}
8 & -8 \\
0 & 0
\end{bmatrix}
$$

$x_{2}=s_{1}$
$8x_{1}=8x_{2},x_{1}=s_{1}$
The eigenvector is $\begin{bmatrix}s_{1}\\s_{1}\end{bmatrix}$
For the other eigenvector:
$$
A-3\text{Id}=\begin{bmatrix}
4 & -8 \\
4 & -8
\end{bmatrix}\to^{GE}\begin{bmatrix}
4 & -8 \\
0 & 0
\end{bmatrix}
$$
$x_{2}=s_{1}$
$4x_{1}=8x_{2},x_{1}=2s_{1}$
The eigenvector is $\begin{bmatrix}2s_{1}\\s_{1}\end{bmatrix}$
Now our matrix $P$ is
$$
P=\begin{bmatrix}
1 & 2 \\
1 & 1
\end{bmatrix}
$$
By finding $PAP^{-1}$ we find the diagonalization of $A$
$$
PAP^{-1}=\begin{bmatrix}
-1 & 6 \\
-1 & 3
\end{bmatrix}
$$
Compute $A^{1000}$ for the matrix $A$ given below
