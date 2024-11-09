#### Problems from Holt Section 3.3
3. Use the formula for the inverse of a $2*2$ matrix to find the matrix $A^{-1}$ if it exists.
$$
A=\begin{bmatrix}
-3 & 2 \\
5 & -4
\end{bmatrix}
$$
First I'll find the determinant.
$(-3*-4)-(2*5)=2\neq 0$ therefore the matrix will have an inverse,
$$
\frac{1}{2}\begin{bmatrix}
-4 & -2 \\
-5 & -3
\end{bmatrix}=\begin{bmatrix}
-2 & -1 \\
-\frac{5}{2} & -\frac{3}{2}
\end{bmatrix}
$$
$$
A^{-1}=\begin{bmatrix}
-2 & -1 \\
-\frac{5}{2} & -\frac{3}{2}
\end{bmatrix}
$$
11. Write an augmented matrix containing $A$ and put it in reduced echelon form. Use it to find $A^{-1}$
$$
A=\begin{bmatrix}
1 & -3 & 1 \\
2 & -5 & 4 \\
2 & 3 & 8
\end{bmatrix}
$$
$$
\left[\begin{array}{ccc|ccc}
1 & -3 & 1 & 1 & 0 & 0 \\
2 & -5 & 4 & 0 & 1 & 0 \\
2 & 3 & 8 & 0 & 0 & 1
\end{array}\right]
$$
$R_{2}-2R_{1}\to R_{2}$
$R_{3}-2R_{1}\to R_{3}$
$$
\left[\begin{array}{ccc|ccc}
1 & -3 & 1 & 1 & 0 & 0 \\
0 & 1 & 2 & -2 & 1 & 0 \\
0 & 9 & 6 & -2 & 0 & 1
\end{array}\right]
$$
$R_{3}+3R_{1}\to R_{3}$
$$
\left[\begin{array}{ccc|ccc}
1 & -3 & 1 & 1 & 0 & 0 \\
0 & 1 & 2 & -2 & 1 & 0 \\
0 & 0 & 9 & 1 & 0 & 1
\end{array}\right]
$$
$\frac{1}{9}R_{3}\to R_{3}$
$$
\left[\begin{array}{ccc|ccc}
1 & -3 & 1 & 1 & 0 & 0 \\
0 & 1 & 2 & -2 & 1 & 0 \\
0 & 0 & 1 & \frac{1}{9} & 0 & \frac{1}{9}
\end{array}\right]
$$
$R_{2}-2R_{3}\to R_{2}$
$R_{1}-R_{3}\to R_{1}$
$$
\left[\begin{array}{ccc|ccc}
1 & -3 & 0 & -\frac{8}{9} & 0 & -\frac{1}{9} \\
0 & 1 & 0 & -\frac{20}{9} & 1 & -\frac{1}{9} \\
0 & 0 & 1 & \frac{1}{9} & 0 & \frac{1}{9}
\end{array}\right]
$$
$R_{1}+3R_{2}\to R_{1}$
$$
\left[\begin{array}{ccc|ccc}
1 & 0 & 0 & -\frac{68}{9} & 3 & -\frac{4}{9} \\
0 & 1 & 0 & -\frac{20}{9} & 1 & -\frac{1}{9} \\
0 & 0 & 1 & \frac{1}{9} & 0 & \frac{1}{9}
\end{array}\right]
$$
$$A^{-1}=\begin{bmatrix}
-\frac{68}{9} & 3 & -\frac{4}{9} \\
-\frac{20}{9} & 1 & -\frac{1}{9} \\
\frac{1}{9} & 0 & \frac{1}{9}
\end{bmatrix}$$
25. Is the following linear transformation invertible? If so find $T^{-1}$
$$
T\left(\begin{bmatrix}
x_{1} \\
x_{2} \\
x_{3}
\end{bmatrix}\right)=\begin{bmatrix}
x_{1}+2x_{2}-x_{3} \\
x_{1}+x_{2}-x_{3}
\end{bmatrix}
$$
$$
T=\begin{bmatrix}
1 & 2 & -1 \\
1 & 1 & -1
\end{bmatrix}
$$
Since T is not 1-1, it is not invertible.

27. $T_{1}$ and $T_{2}$ are defined below.
$$
T_{1}\left(\begin{bmatrix}
x_{1} \\
x_{2}
\end{bmatrix}\right)=\begin{bmatrix}
2x_{1}+x_{2} \\
x_{1}+x_{2}
\end{bmatrix}
$$
$$
T_{2}\left(\begin{bmatrix}
x_{1} \\
x_{2}
\end{bmatrix}\right)=\begin{bmatrix}
3x_{1}+2x_{2} \\
x_{1}+x_{2}
\end{bmatrix}
$$
Find the matrix $A$ such that
1. $T_{1}^{-1}(T_{2}(x))=Ax$
2. $T_{1}(T_{2}^{-1}(x))=Ax$
3. $T_{2}^{-1}(T_{1}(x))=Ax$
4. $T_{2}(T_{1}^{-1}(x))=Ax$
$$
T_{1}=\begin{bmatrix}
2 & 1 \\
1 & 1
\end{bmatrix}
$$
$$
T_{2}=\begin{bmatrix}
3 & 2 \\
1 & 1
\end{bmatrix}
$$
$$
T_{1}^{-1}=\begin{bmatrix}
1 & -1 \\
-1 & 2
\end{bmatrix}
$$
$$
T_{2}^{-1}=\begin{bmatrix}
1 & -2 \\
-1 & 3
\end{bmatrix}
$$
	1. 
$$
\begin{bmatrix}
1 & -1 \\
-1 & 2
\end{bmatrix}\begin{bmatrix}
3 & 2 \\
1 & 1
\end{bmatrix}=\begin{bmatrix}
2 & 1 \\
-1 & 0
\end{bmatrix}
$$
	2. 
$$
\begin{bmatrix}
2 & 1 \\
1 & 1
\end{bmatrix}\begin{bmatrix}
1 & -2 \\
-1 & 3
\end{bmatrix}=\begin{bmatrix}
1 & -1 \\
0 & 1
\end{bmatrix}
$$
	3. 
$$
\begin{bmatrix}
1 & -2 \\
-1 & 3
\end{bmatrix}\begin{bmatrix}
2 & 1 \\
1 & 1
\end{bmatrix}=\begin{bmatrix}
0 & -1 \\
1 & 2
\end{bmatrix}
$$
	4. 
$$
\begin{bmatrix}
3 & 2 \\
1 & 1
\end{bmatrix}\begin{bmatrix}
1 & -1 \\
-1 & 2
\end{bmatrix}=\begin{bmatrix}
1 & 1 \\
0 & 1
\end{bmatrix}
$$
1. Find the matrix X (in terms of $A$, $B$, and $C$) if 
$$
B(X+A)^{-1}=C
$$
$BC^{-1}=X+A$
$X=BC^{-1}-A$

59. For what values of $c$ is the matrix $A=\begin{bmatrix}1&1\\c&c^2\end{bmatrix}$ invertible?
Put into Reduced Echelon form
$$
\left[\begin{array}{cc|cc}
1 & 1 & 1 & 0 \\
c & c^2 & 0 & 1
\end{array}\right]
$$
$\frac{1}{c}R_{2}\to R_{2}$
$$
\left[\begin{array}{cc|cc}
1 & 1 & 1 & 0 \\
1 & c & 0 & \frac{1}{c}
\end{array}\right]
$$
$R_{2}-R_{1}\to R_{2}$
$$
\left[\begin{array}{cc|cc}
1 & 1 & 1 & 0 \\
0 & c-1 & -1 & \frac{1}{c}
\end{array}\right]
$$
We need full rank, so $c\neq 1$. In addition I think $c\neq 0$ because then the right side cannot be found.

9. Is the following subset a subspace? The subset of $\mathbb{R}^3$ of all vectors of the form, where $abc=0$.
No, this subset is still $\mathbb{R}^3$. For example, take three vectors
$$
\begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix},\begin{bmatrix}
0 \\
1 \\
0
\end{bmatrix},\begin{bmatrix}
0 \\
0 \\
1
\end{bmatrix}
$$
These vectors, when combined into a matrix, are the identity matrix and thus must span $\mathbb{R}^3$, while at the same time fulfilling the $abc=0$ requirement.

25. Find the null space of the following matrix.
$$
A=\begin{bmatrix}
1 & -2 & 2 \\
-2 & 5 & 7
\end{bmatrix}
$$
First we'll reduce to reduced echelon form.
$2R_{1}+R_{2}\to R_{2}$
$$
\begin{bmatrix}
1 & -2 & 2 \\
0 & 1 & 11
\end{bmatrix}
$$
$2R_{2}+R_{1}\to R_{1}$
$$
\begin{bmatrix}
1 & 0 & 24 \\
0 & 1 & 11
\end{bmatrix}
$$
Write as equations with free variable $s$
$$
\begin{align}
1x_{1}+0x_{2}+24x_{3}=0 \\
0x_{1}+1x_{2}+11x_{3}=0
\end{align}
$$
$x_{3}=s$
$$
\begin{align}
x_{1}=-24s \\
x_{2}=-11s
\end{align}
$$
Therefore the null space is
$$\begin{bmatrix}
-24 \\
-11 \\
1
\end{bmatrix}
$$
27. Find the null space of the following matrix.
$$
\begin{bmatrix}
1 & 3 \\
-2 & 1 \\
3 & 2
\end{bmatrix}
$$
Row reduce to reduced echelon.
$2R_{1}+R_{2}\to R_{2}$
$3R_{1}-R_{3}\to R_{3}$
$$
\begin{bmatrix}
1 & 3 \\
0 & 7 \\
0 & 7
\end{bmatrix}
$$
$R_{3}-R_{2}\to R_{2}$
$$
\begin{bmatrix}
1 & 3 \\
0 & 0 \\
0 & 7
\end{bmatrix}
$$
These vectors are linearly independent, therefore the null space is just the zero vector.

35. The following matrix defines a linear transformation $T$. Determine if the vector $b$ is in the kernel of $T$ and if the vector $c$ is in the range of $T$
$$
A=\begin{bmatrix}
4 & -2 \\
1 & 3 \\
2 & 7
\end{bmatrix}, b=\begin{bmatrix}
-5 \\
2
\end{bmatrix}, c=\begin{bmatrix}
1 \\
3
\end{bmatrix}
$$
First let's reduce $A$
$R_{1}-4R_{2}\to R_{2}$
$R_{1}-2R_{3}\to R_{3}$
$$
\begin{bmatrix}
4 & -2 \\
0 & -14 \\
0 & -16
\end{bmatrix}
$$
$16R_{2}-14R_{3}\to R_{3}$
$$
\begin{bmatrix}
4 & -2 \\
0 & -14 \\
0 & 0
\end{bmatrix}
$$
$$
\begin{bmatrix}
4 & 0 \\
0 & -14 \\
0 & 0
\end{bmatrix}
$$
The columns are linearly independent, therefore the null space of $A$ is just the zero vector, and $b$ is not within the kernel of $T$.

Next, to determine if $c$ is in the range of $T$. Since the reduced linear transformation above came out to span 2 dimensions, and since the vector $c$ is also 2 dimensional, the vector $c$ is in the range of $T$.

60. Let $A=\begin{bmatrix}a_{1}&a_{2}&a_{3}&a_{4}\end{bmatrix}$. Suppose that $x=(2,-5,4,1)$ is in $null(A)$. Then write $a_{4}$ as a linear combination of the vectors $a_{1},a_{2},a_{3}$

Since $x$ is in $null(A)$, we know that $2a_{1}-5a_{2}+4a_{3}+1a_{4}=0$
$\therefore a_{4}=-2a_{1}+5a_{2}-4a_{3}$

### Conceptual Problems Ch. 2

2. For each of the shaded regions below, find a linear transformation that takes the unit square to the given region or explain why it's impossible to do so. 

a. ![[Pasted image 20241030135232.png|200]]

$T(\vec{x})=\begin{bmatrix}1&-1\\1&1\end{bmatrix}\vec{x}$

b. ![[Pasted image 20241030135906.png|200]]

This is not possible. A linear transformation cannot move the origin.

c. ![[Pasted image 20241030140002.png|200]]

$T(\vec{x})=\begin{bmatrix}1&0\\0&-1\end{bmatrix}\vec{x}$

d. ![[Pasted image 20241030140344.png|200]]

$T(\vec{x})=\begin{bmatrix}2&2\\1&1\end{bmatrix}\vec{x}$

3. Assume $T:\mathbb{R}^m\to \mathbb{R}^n$ is a linear transformation

a. Suppose that there is a nonzero vector $x \in \mathbb{R}^m$ such that $T(x)=0$. Is it possible that $T$ is one-to-one?

It is not possible, because every linear transformation must map the origin to the origin (i.e. $T(0)=0$). Therefore if there is a nonzero vector that also maps to the origin, the transformation cannot be one-to-one.

b. Suppose that there is a nonzero vector $x\in \mathbb{R}^m$ such that $T(x)=0$. Is it possible that $T$ is onto? 

Yes, it is possible. For example if
$$
A=\begin{bmatrix}
1 & 1 & 0 \\
0 & 1 & 1
\end{bmatrix}
$$
and $T(x)=Ax$, then
$$
x=\begin{pmatrix}
1 \\
-1 \\
1
\end{pmatrix}
$$
$T(x)=\begin{pmatrix}0\\0\end{pmatrix}$
$T$ is onto because the reduce row form of $A$ is
$$
\begin{bmatrix}
1 & 0 & -1 \\
0 & 1 & 1
\end{bmatrix}
$$
There is a pivot in every row, so $T$ is onto. 

c. Suppose that $u$ and $v$ are linearly dependent vectors in $\mathbb{R}^m$. Show that $T(u)$ and $T(v)$ are linearly dependent.

If $u$ and $v$ are linearly dependent vectors, then that means that there is some nonzero combination $a_{1}u+a_{2}v=0$. Because linear transformations are linear, linear dependence will be preserved. The scalars $a_{1},a_{2}$ may change their values after the transformation, but there will still be some nonzero combination that results in a zero vector.

d. Suppose that $u$ and $v$ are linearly independent vectors in $\mathbb{R}^m$. Is it guaranteed that $T(u)$ and $T(v)$ are also linearly independent?

No, for example if the linear transformation maps all input vectors to the origin.

Take $T(x)=0x$. This is a valid linear transformation. Any linearly independent vectors passed through this transformation will be transformed to the origin and will therefore no longer be linearly independent.

4. Let $w\in \mathbb{R}^n$ and suppose that $T:\mathbb{R}^n\to \mathbb{R}^n$ is given by $T(v)=v+w$. Determine the coordinates on $w$ that make $T$ a linear transformation.

$T$ is only a linear transformation if $w$ is the zero vector. A linear transformation is valid if it satisfies the rules
$$
\begin{align}
T(u+v)=T(u)+T(v) \\
T(cu)=cT(u)
\end{align}
$$
If $w$ is the zero vector, then
$$
\begin{align}
T(v)=v \\
\therefore T(u+v)=(u+v)=T(u)+T(v)=u+v \\
\therefore T(cu)=(cu)=cT(u)=cu
\end{align}
$$
Therefore $T$ is a valid linear transformation if $w$ is the zero vector.
However, if $w$ is anything else, then
$$
\begin{align}
T(v)=v+w \\
\therefore T(u+v)=(u+v)+w\neq T(u)+T(v)=u+v+2w \\
\therefore T(cu)=(cu)+w\neq cT(u)=cu+cw
\end{align}
$$
Therefore in that case $T$ is not a valid linear transformation.

5. Suppose we are given the unit square $A$ in the plane with corners $(0,0), (1,0),(1,1),(0,1)$.

a. Find a linear transformation $T$ that sends $A$ to the parallelogram $B$ with corners $(0,0),(1,2),(2,2),(1,0)$.

$T(x)=Ax$
$A=\begin{bmatrix}1&1\\2&0\end{bmatrix}$

b. Is the linear transformation $T$ unique? Why or why not?

$T$ is not unique. If we flip the columns of $A$ as in $A=\begin{bmatrix}1&1\\0&2\end{bmatrix}$, $T$ maintains the same image.

c. What linear transformation $S$, other than the identity, would send $A$ to itself?

We can just flip the columns of the identity matrix, obtaining
$T(x)=Ax,A=\begin{bmatrix}0&1\\1&0\end{bmatrix}$

d. Is there a linear transformation whose overall effect would be to send $A$ to $B$ and then translate $B$ in the horizontal direction by one unit? Explain.

We cannot translate using linear transformations, so overall this is not possible. However, in the case of $B$, since the parallelogram contains the vector $(1,0)$ we could "translate" $B$ one unit to the left. However, this would not be done with translation properly, and instead just another matrix multiplication, however the end effect would be the same.

e. Find a linear transformation that will send $A$ to a parallelogram $C$ of area 4 while still keeping $(0,0)$ and $(1,0)$ as two of its corners.

We could just stretch the unit square 4 units up. For example the unit square
```desmos-graph
left=-5;right=5;
bottom=-5;top=5;
width=100;height=100;
---
\polygon((0,0),(1,0),(1,1),(0,1))
```
would become
```desmos-graph
left=-5;right=5;
bottom=-5;top=5;
width=100;height=100;
---
\polygon((0,0),(1,0),(1,4),(0,4))
```
This transformation can be represented by a matrix multiplication:
$T(x)=Ax$
$A=\begin{bmatrix}1&0\\0&4\end{bmatrix}$

f. What is the general formula for the linear transformation that sends $A$ to a parallelogram of area $k$ while still keeping $(0,0)$ and $(1,0)$ as its corners?

$T(x)=Ax$
$A=\begin{bmatrix}1&0\\0&k\end{bmatrix}$

7. Say we have linear transformations $T:\mathbb{R}^3\to \mathbb{R}^2$ and $S:\mathbb{R}^2\to \mathbb{R}^4$. Let $S \circ T:\mathbb{R}^3\to \mathbb{R}^4$ be the composition. Can $S \circ T$ be one-to-one?

Because the transformation $S \circ T$ maps $\mathbb{R}^3$ to $\mathbb{R}^4$, which represents a 4x3 matrix if written as a matrix multiplication, $S \circ T$ is only one-to-one if every column has a pivot. So if it so happens that the matrix form of the transformation $S \circ T$ has linearly independent columns, then it will be one-to-one. 

However, it is worth noting that $S \circ T$ can never be onto, because there will always be at least one row without a pivot. In addition, if $S \circ T$ is not one-to-one, then there must be at least two rows without a pivot.