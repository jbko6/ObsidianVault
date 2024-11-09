### Conceptual Problems Ch. 3
12. 
a. Find a linear transformation $T:\mathbb{R}^2\to \mathbb{R}^2$ such that $T(x)=Ax$ that reflects a vector $(x_{1},x_{2})$ about the $x_{2}$ axis
$$
T(x)=\begin{bmatrix}
-1 & 0 \\
0 & 1
\end{bmatrix}x
$$
b. Find a linear transformation $S:\mathbb{R}^2\to \mathbb{R}^2$ such that $S(x)=Bx$ that rotates a vector $(x_{1},x_{2})$ counterclockwise by 135 degrees
$$
S(x)=\begin{bmatrix}
-\frac{\sqrt{ 2 }}{2}& -\frac{\sqrt{ 2 }}{2} \\
\frac{\sqrt{ 2 }}{2}& -\frac{\sqrt{ 2 }}{2}
\end{bmatrix}x
$$
c. Find a linear transformation (with domain and codomain) that has the effect of first reflecting as in (a) and then rotating as in (b). Give the matrix of this transformation explicitly. How is this transformation related to $T$ and $S$?
$$
A=\begin{bmatrix}
-\frac{\sqrt{ 2 }}{2} & -\frac{\sqrt{ 2 }}{2} \\
\frac{\sqrt{ 2 }}{2} & -\frac{\sqrt{ 2 }}{2}
\end{bmatrix}\begin{bmatrix}
-1 & 0 \\
0 & 1
\end{bmatrix}=\begin{bmatrix}
\frac{\sqrt{ 2 }}{2} & -\frac{\sqrt{ 2 }}{2} \\
-\frac{\sqrt{ 2 }}{2} & -\frac{\sqrt{ 2 }}{2}
\end{bmatrix}
$$

This transformation is $S(T(x))$ or $S(x)*T(x)$

d. Find the matrix representing the linear transformation that first rotates as in (b), then reflects as in (a), and then rotates backwards.

Let's call the matrix from (a) $A$
then the matrix from (b) $B$
and this backward rotation matrix $C$
$$
C=\begin{bmatrix}
\frac{\sqrt{ 2}}{2} & \frac{\sqrt{ 2 }}{2} \\
-\frac{\sqrt{ 2 }}{2} & \frac{\sqrt{ 2 }}{2}
\end{bmatrix}
$$
The composition of these (we'll call it $D$) will be
$$
D=C*A*B
$$
Computing that gives
$$
AB=\begin{bmatrix}
\frac{\sqrt{ 2 }}{2} & \frac{\sqrt{ 2 }}{2} \\
\frac{\sqrt{ 2 }}{2} & -\frac{\sqrt{ 2 }}{2}
\end{bmatrix}
$$
$$
C=\begin{bmatrix}
1 & 0 \\
0 & -1
\end{bmatrix}
$$

e. What matrix do you get if you repeat the sequence in (d) ten times? Write this matrix in terms of $A$ and $B$. Can you write this matrix explicitly?

You get
$$
\begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}
$$
Written in terms of $A$ and $B$ this is
$$
(AB)(AB)(AB)(AB)(AB)(AB)(AB)(AB)(AB)(AB)
$$
or
$$
(AB)(AB)
$$
14. Find all values of $x$ for which the following matrix does not have an inverse
$$
\begin{bmatrix}
1 & 0 & 3 \\
-2 & x & 1 \\
4 & -1 & 2
\end{bmatrix}
$$
First I'll reduce
$2R_{1}+R_{2}\to R_{2}$
$-4R_{1}+R_{3}\to R_{3}$
$$
\begin{bmatrix}
1 & 0 & 3 \\
0 & x & 7 \\
0 & -1 & -10
\end{bmatrix}
$$
We need a pivot in every column and row. As long as $x\neq 0$ there should be some combination of the second and third row that eliminates the $-1$ below $x$. However, if this combination eliminates the third row completely then the matrix will not be invertible. This would happen if the row operation $\frac{10}{7}R_{2}+R_{3}\to R_{3}$ is performed. This row operation would be needed when $x=0.7$. If $x=0$ then the rows can be rearranged to get them into echelon form. Therefore the matrix is not invertible at $x=0.7$.

### Conceptual Problems Ch. 4

1. Let $S$ be a plane in $\mathbb{R}^3$ passing through the origin, so that $S$ is a two-dimensional subspace of $\mathbb{R}^3$. Say that a linear transformation $T:\mathbb{R}^3\to \mathbb{R}^3$ is a reflection about $S$ if $T(v)=v$ for any vector $v$ in $S$ and $T(n)=-n$ whenever $n$ is perpendicular to $S$. Let $T$ be the linear transformation given by $T(x)=Ax$, where $A$ is the matrix
$$
\frac{1}{3}\begin{bmatrix}
-1 & -2 & 2 \\
-2 & 2 & 1 \\
2 & 1 & 2
\end{bmatrix}
$$
	This linear transformation is the reflection about a plane $S$. Find a basis for $S$.

We know $T(v)=v$ if $v$ is a vector in $S$. Therefore $T(v)-v=0$. Since in order to be able to subtract a matrix by another matrix the dimension must match, we can transform $v$ by multiplying it by the 3d identity matrix. So, $T(v)-id_{3}(v)=0$. Now we can discard the $(v)$ components by dividing them away, leaving us with $T-id_{3}=0$. Solving that:
$$
\frac{1}{3}\begin{bmatrix}
-1 & -2 & 2 \\
-2 & 2 & 1 \\
2 & 1 & 2
\end{bmatrix}-\frac{1}{3}\begin{bmatrix}
3 & 0 & 0 \\
0 & 3 & 0 \\
0 & 0 & 3
\end{bmatrix}=\frac{1}{3}\begin{bmatrix}
-4 & -2 & 2 \\
-2 & -1 & 1 \\
2 & 1 & -1
\end{bmatrix}
$$
I'll reduce this
$-\frac{1}{2}R_{1}+R_{2}\to R_{2}$
$\frac{1}{2}R_{1}+R_{3}\to R_{3}$
$$
\frac{1}{3}\begin{bmatrix}
-4 & -2 & 2 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}
$$
$$
\begin{align}
-\frac{4}{3}x-\frac{2}{3}y+\frac{2}{3}z=0
\end{align}
$$
This is the equation for our plane $S$. Now we must find the basis vectors.
We can observe that $y=-2x+z$.
Therefore one set of valid basis vectors would be
$$
\begin{pmatrix}
1 \\
-2 \\
0
\end{pmatrix},\begin{pmatrix}
0 \\
1 \\
1
\end{pmatrix}
$$
2. Define $T:\mathbb{R}^3\to \mathbb{R}^3$ by 
$$
T(\begin{bmatrix}
x\\y\\z
\end{bmatrix})=\begin{bmatrix}
0 & 3 & -2 \\
1 & -2 & 2 \\
2 & -6 & 5
\end{bmatrix}\begin{bmatrix}
x \\
y \\
z
\end{bmatrix}.
$$
Let $\nu$ be the set of all vectors that are fixed by $T$, which means that $\nu=\{ v\in \mathbb{R}^3:T(v)=v \}$.

(a) Show, using the definition of subspace, that $\nu$ is a subspace of $\mathbb{R}^3$.

$\nu$ is a subspace of $\mathbb{R}^3$ restricted by $T(v)=v$. 
The first criteria of the subspace definition is satisfied because $T(0)=0.$ Therefore $\nu$ contains the zero vector.
For the second criteria we must show that for $u,v\in \mathbb{R}^3$, $u+v\in \mathbb{R}^3$ ($T(u+v)=T(u)+T(v)$). Let's take two vectors $u$ and $v$. Since $T(v)=v$, then $T(u)=u$. So $T(u+v)=T(u)+T(v)=u+v$, therefore this requirement is satisfied.
For the third criteria, we must show that for a vector $v\in \nu$, that $cv\in \nu$ where $c\in \mathbb{R}^3$. So since $cT(v)=T(cv)=cv$, $cv\in \nu$ and this requirement is satisfied.

(b) Come up with an equation that also defines $\nu$.

We need to solve $T(v)=v$.
$$
T\left(\begin{bmatrix}
x\\y\\z
\end{bmatrix}\right)=\begin{bmatrix}
0 & 3 & -2 \\
1 & -2 & 2 \\
2 & -6 & 5
\end{bmatrix}\begin{bmatrix}
x\\y\\z
\end{bmatrix}
$$
Since $T(v)=v$, this becomes
$$
\begin{bmatrix}
x\\y\\z
\end{bmatrix}=\begin{bmatrix}
0 & 3 & -2 \\
1 & -2 & 2 \\
2 & -6 & 5
\end{bmatrix}\begin{bmatrix}
x\\y\\z
\end{bmatrix}
$$
We'll multiply out the right side
$$
\begin{bmatrix}
x\\y\\z
\end{bmatrix}=\begin{bmatrix}
0x+3y-2z \\
1x-2y+2z \\
2x-6y+5z
\end{bmatrix}
$$
Now transform this to an augmented matrix
$$
\left[\begin{array}{c|c}
0x+3y-2z & x \\
1x-2y+2z & y \\
2x-6y+5z & z
\end{array}\right]
$$
Move over to the left
$$
\left[\begin{array}{c|c}
-1x+3y-2z & 0 \\
1x-3y+2z & 0 \\
2x-6y-4z & 0
\end{array}\right]
$$
Noticing that the second and third rows are composed of the first row, we can simplify this to $x-3y+2z=0$. This is another equation that defines $\nu$. In more exact terms:
$$\nu=\left\{ \begin{bmatrix}x\\y\\z\end{bmatrix}\in \mathbb{R}^3:x-3y+2z=0 \right\}$$
(c) Geometrically, what kind of object is $\nu$?

$\nu$ is a line.

(d) Find a basis for $v$.

Starting with the matrix found at the end of (b).
$$
\left[\begin{array}{c}
-1x+3y-2z \\
1x-3y+2z \\
2x-6y-4z
\end{array}\right]=\begin{bmatrix}
-1 & 3 & -2 \\
1 & -3 & 2 \\
2 & -6 & -4
\end{bmatrix}\begin{bmatrix}
x \\
y \\
z
\end{bmatrix}
$$
All three columns of the matrix are linearly dependent, so the basis set will just be any one of them. I'll pick
$$
\left\{ \begin{bmatrix}
-1\\1\\2
\end{bmatrix} \right\}
$$
This is a valid basis for $\nu$ since it is linearly independent and spans $\nu$.

4. Let $V$ be the subspace of $\mathbb{R}^4$ defined as
$$
V=\{ (w,x,y,z)\in \mathbb{R}^4:w+x+y+z=0 \}
$$
Check that the vectors $\begin{bmatrix}-1\\0\\1\\0\end{bmatrix}$ and $\begin{bmatrix}0\\-1\\0\\1\end{bmatrix}$ can be part of a basis for $V$. Then expand the set consisting of these two vectors to a basis of $V$.

For the vectors to be able to be part of the basis, they must be linearly independent. We know this is true because the matrix
$$
\begin{bmatrix}
-1 & 0 \\
0 & -1 \\
1 & 0 \\
0 & 1
\end{bmatrix}
$$
which is composed of the two vectors has two pivots and is 2 dimensional, and so therefore must be linearly independent.

Now to expand the vectors, we need to find the span of the original subspace $V$ to know what span our basis needs. The equation $w+x+y+z=0$ can be rewritten as
$$
\left[\begin{array}{cccc|c}
1 & 0 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 1 & 0
\end{array}\right]
$$
We see this matrix has pivots in every row, and therefore spans $\mathbb{R}^4$. Then, our basis also needs to span $\mathbb{R}^4$. We set our two provided vectors have pivots in the third and fourth row, so we just need two more vectors to provide pivots in the first and second row. So the full set of expanded basis vectors could be:
$$
\left\{ \begin{bmatrix}
1\\0\\0\\0
\end{bmatrix},\begin{bmatrix}
0\\1\\0\\0
\end{bmatrix},\begin{bmatrix}
-1\\0\\1\\0
\end{bmatrix},\begin{bmatrix}
0\\-1\\0 \\1
\end{bmatrix} \right\}
$$
These basis vectors are linearly independent as if we were to put them into a matrix we would see all columns have pivots and they span $V$ because $V$ spans $\mathbb{R}^4$ and this matrix has four pivots so therefore spans $\mathbb{R}^4$ as well. Therefore this set of vectors is a valid basis for $V$.

### Holt 4.2

For the following subspaces find a basis for $S$ by removing linearly dependent vectors. Give the dimension.
17. 
$$
S=span\{ \begin{bmatrix}
2\\6
\end{bmatrix},\begin{bmatrix}
-3\\-9
\end{bmatrix} \}
$$
$\begin{bmatrix}-3\\-9\end{bmatrix}$ can be formed by $-\frac{3}{2}*\begin{bmatrix}2\\6\end{bmatrix}$, so it is linearly dependent. Therefore a basis could be
$$
\left\{ \begin{bmatrix}
2\\6
\end{bmatrix} \right\}
$$
This is a 1 dimensional basis.

21. 
$$
S=span\left\{ \begin{bmatrix}
0\\0\\0
\end{bmatrix},\begin{bmatrix}
3\\0\\0
\end{bmatrix},\begin{bmatrix}
2\\1\\0
\end{bmatrix},\begin{bmatrix}
1\\2\\3
\end{bmatrix} \right\}
$$
$\begin{bmatrix}0\\0\\0\end{bmatrix}$ is the issue here as it always makes a set linearly dependent. Removing it, we find the basis:
$$
\left\{ \begin{bmatrix}
3\\0\\0
\end{bmatrix},\begin{bmatrix}
2\\1\\0
\end{bmatrix},\begin{bmatrix}
1\\2\\3
\end{bmatrix} \right\}
$$
which is 3 dimensional.

25. Find a basis for $\mathbb{R}^3$ that includes the vector $v$.
$$
v=\begin{bmatrix}
-1\\2\\1
\end{bmatrix}
$$
$$
\left\{ \begin{bmatrix}
1\\0\\0
\end{bmatrix},\begin{bmatrix}
0\\1\\0
\end{bmatrix},\begin{bmatrix}
-1\\2\\1
\end{bmatrix} \right\}
$$
is a valid basis. It is linearly independent and has 3 pivots when put into a matrix so it spans $\mathbb{R}^3$.

31. For the matrix below find a basis for its null space. Also find its nullity.
$$
A=\begin{bmatrix}
1 & 1 & 2 & 1 \\
0 & 0 & 1 & -3
\end{bmatrix}
$$
$$
\begin{align}
x_{2}=s_{1} \\
x_{4}=s_{2} \\
x_{3}-3x_{4}=0, x_{3}=3s_{2} \\
x_{1}=-s_{1}-7s_{2}
\end{align}
$$
So the null space is
$$
\begin{bmatrix}
-s_{1}-7s_{2} \\
3s_{2} \\
s_{2} \\
s_{1}
\end{bmatrix}
$$
A basis for the null space is
$$
\left\{ \begin{bmatrix}
-1 \\
0 \\
0 \\
1
\end{bmatrix},\begin{bmatrix}
-7 \\
3 \\
1 \\
0
\end{bmatrix} \right\}
$$
This null space or nullity is 2 dimensional and is in $\mathbb{R}^4$.

60. If the set $\left\{ u_{1},u_{2},u_{3} \right\}$ is a basis for $\mathbb{R}^3$ then what is the nullity of $A=\left\{ u_{1},u_{2},u_{3} \right\}$?

The nullity of $\left\{ u_{1},u_{2},u_{3} \right\}$ is just the zero vector. This is because since the set spans $\mathbb{R}^3$ (as a basis) its row space must be 3 dimensional. Since the dimension of the row space plus the dimension of nullity equals the # of columns in a matrix by the rank nullity theorem, the nullity must just be a single point, which must be $(0,0,0)$ since a basis must be linearly independent and so the vectors multiplied by 0 must equal $(0,0,0)$.

### Holt 4.3

1. For the matrix $A$ find a basis for the row space of $A$, the column space of $A$ and the null space of $A$. Check that the rank nullity theorem holds. (Matrix $B$ is the reduced form of $A$)
$$
A=\begin{bmatrix}
1 & -3 & 2 \\
-2 & 5 & 0 \\
-3 & 8 & -2
\end{bmatrix}\sim \begin{bmatrix}
1 & 0 & -10 \\
0 & 1 & -4 \\
0 & 0 & 0
\end{bmatrix}=B
$$
To find a basis for the null space I will consider which rows have pivots in $B$, which are rows 1 and 2. I will form a set from these
$$
\left\{ \begin{bmatrix}
1\\0\\-10
\end{bmatrix},\begin{bmatrix}
0\\1\\-4
\end{bmatrix} \right\}
$$
These two vectors are linearly independent and span the row space of $A$, so they are valid basis.

Next, for the column space, I see that columns 1 and 2 have pivots, so I'll grab the columns from $A$ and form a set.
$$
\left\{ \begin{bmatrix}
1\\-2\\-3
\end{bmatrix},\begin{bmatrix}
-3\\5\\8
\end{bmatrix} \right\}
$$
Finally, for the null space of $A$, I need to solve in terms of $x_{1},x_{2},x_{3}$.
$$
\begin{align}
x_{3}=s_{1} \\
x_{2}=4x_{3},x_{2}=4s_{1} \\
x_{1}=-10x_{3},x_{1}=-10s_{1}
\end{align}
$$
Then the null space is
$$
\begin{bmatrix}
-10s_{1} \\
4s_{1} \\
s_{1}
\end{bmatrix}
$$
And a valid basis would be:
$$
\left\{ \begin{bmatrix}
-10 \\
4 \\
1
\end{bmatrix} \right\}
$$
Finally, to verify the rank nullity theorem, we see that both the dimension of the row space and column space is 2 and that the dimension or nullity of the null space is 1. Adding these equals 3, which is the number of columns of $A$, so the theorem holds true.

7. For the matrix $A$ find a basis for the row space of $A$, the column space of $A$ and the null space of $A$. Check that the rank nullity theorem holds. 
$$
A=\begin{bmatrix}
1 & 3 & 2 & 0 \\
3 & 11 & 7 & 1 \\
1 & 1 & 4 & 0
\end{bmatrix}
$$
I'll reduce $A$ first.
$R_{2}-3R_{1}\to R_{2}$
$R_{3}-R_{1}\to R_{2}$
$$
\begin{bmatrix}
1 & 3 & 2 & 0 \\
0 & 2 & 1 & 1 \\
0 & -2 & 2 & 0
\end{bmatrix}
$$
$3R_{3}+2R_{1}\to R_{3}$
$$
\begin{bmatrix}
1 & 3 & 2 & 0 \\
0 & 2 & 1 & 1 \\
0 & 0 & 10 & 0
\end{bmatrix}
$$
$R_{2}-\frac{1}{10}R_{3}\to R_{2}$
$R_{1}-\frac{1}{5}R_{3}\to R_{1}$
$$
\begin{bmatrix}
1 & 3 & 0 & 0 \\
0 & 2 & 0 & 1 \\
0 & 0 & 10 & 0
\end{bmatrix}
$$
$2R_{1}-3R_{2}\to R_{1}$
$$
\begin{bmatrix}
2 & 0 & 0 & -3 \\
0 & 2 & 0 & 1 \\
0 & 0 & 10 & 0
\end{bmatrix}
$$
For row space a basis would be:
$$
\left\{ \begin{bmatrix}
2\\0\\0\\-3
\end{bmatrix},\begin{bmatrix}
0\\2\\0\\1
\end{bmatrix},\begin{bmatrix}
0\\0\\10\\0
\end{bmatrix} \right\}
$$
For column space a basis would be:
$$
\left\{ \begin{bmatrix}
1\\3\\1
\end{bmatrix},\begin{bmatrix}
3\\11\\1
\end{bmatrix},\begin{bmatrix}
2\\7\\4
\end{bmatrix} \right\}
$$
For null space:
$$
\begin{align}
x_{4}=s_{1} \\
x_{3}=0 \\
x_{2}=-s_{1} \\
x_{1}=3s_{1}
\end{align}
$$
$$
\begin{bmatrix}
3s_{1} \\
s_{1} \\
0 \\
s_{1}
\end{bmatrix}
$$
A basis would be:
$$
\left\{ \begin{bmatrix}
3 \\
1 \\
0 \\
1
\end{bmatrix} \right\}
$$
Now to verify the rank nullity theorem, we see that the dimension of both the row and column spaces are 3 and that the nullity is 1, and that the # of columns was 4, so the rank nullity theorem holds because 3+1=4.

**Find all values of $x$ so that $rank(A)=2$**
9. 
$$
A=\begin{bmatrix}
1 & -4 \\
-2 & x
\end{bmatrix}
$$
We need a pivot where $x$ is. When we row-reduce we'll perform $R_{2}+2R_{1}\to R_{2}$ to get rid of the -2, which leads to $x-8$. We want to keep the $x$ pivot, so $x\neq 8$. 

11. 
$$
A=\begin{bmatrix}
-1 & 2 & 1 \\
3 & 1 & 11 \\
4 & 3 & x
\end{bmatrix}
$$
I'll row reduce this.
$R_{3}+4R_{1}\to R_{3}$
$R_{2}+3R_{1}\to R_{2}$
$$
\begin{bmatrix}
-1 & 2 & 1 \\
0 & 7 & 14 \\
0 & 11 & x+3
\end{bmatrix}
$$
We don't want a pivot where $x$ is, so $x=-3$ so $rank(A)=2$.

23. Let $A$ be a $5\times13$ matrix and that $T(x)=Ax$. If $T$ is one to one then what is the dimension of the row space of $A$?

$T$ cannot be one to one if it has more columns than pivots.

34. Let A by a n ⇥ m matrix such that rank(A)=4, nullity(A)=3. Also col(A) is a 5 dimensional subspace. What are the dimensions of A?

$5\times 7$
By rank nullity theorem