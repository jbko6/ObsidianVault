### Conceptual Problems, ch.2

5. *Let $a_{1}=\begin{bmatrix}1\\1\\-1\end{bmatrix}, a_{2}=\begin{bmatrix}0\\2\\3\end{bmatrix},a_{3}=\begin{bmatrix}t\\-3\\-7\end{bmatrix}$*
*(a) Find all values of $t$ for which there will be a unique solution to $a_{1}x_{1}+a_{2}x_{2}+a_{3}x_{3}=b$ for every vector $b$ in $\mathbb{R}^3$. Explain your answer.*

Convert to matrix form
$$
\left[\begin{array}{ccc|c}
1 & 0 & t & 0 \\
1 & 2 & -3 & 0 \\
-1 & 3 & -7 & 0
\end{array}\right]
$$
Reduce to echelon form
$R_{2}-R_{1}\to R_{2}$
$R_{3}+R_{1}\to R_{3}$
$$
\left[\begin{array}{ccc|c}
1 & 0 & t & 0 \\
0 & 2 & -3-t & 0 \\
0 & 3 & -7+t & 0
\end{array}\right]
$$
$2R_{3}-3R_{2}\to R_{3}$
$$
\left[\begin{array}{ccc|c}
1 & 0 & t & 0 \\
0 & 2 & -3-t & 0 \\
0 & 0 & 5+5t & 0
\end{array}\right]
$$
A unique solution means a pivot in every column so the third pivot $(5+5t)$ must not be equal to 0.
$5+5t\neq 0 \therefore t\neq -1$

(b) *Are the vectors $a_{1}$ and $a_{2}$ from part (a) linearly independent? Explain your answer*

Yes, they are linearly independent. If one pairing of vectors within a set are linearly independent, then the whole set is linearly independent. The set $a_{1},a_{2},a_{3}$ from part (a) must be linearly independent because it spans all $\mathbb{R}^3$ (when $t\neq -1$). Therefore $a_{1}$ and $a_{2}$ must also be linearly independent.

(c) *Let $a_{1},a_{2},a_{3}$ be as in (a). Let $a_{4}=\begin{bmatrix}1\\4\\-5\end{bmatrix}$. Without doing any further calculations, find all values of $t$ for which there will be a unique solution to $a_{1}y_{1}+a_{2}y_{2}+a_{3}y_{3}+a_{4}y_{4}=c$ for every vector of $c$ in $\mathbb{R}^3$. Explain your answer*

For there to be a unique solution to every vector c in $\mathbb{R}^3$, the vectors must span $\mathbb{R}^3$. This occurs when $t\neq-1$, as found in previous problems.

6. *Consider the infinite system of linear equations in two variables given by $ax+by=0$ where $(a,b)$ moves along the unit circle in the plane.*
*(a) How many solutions does this system have?*

For all the equations at once, there will only be one solution, x=0, y=0, because each equation is a line with differing slope but all with origin (0,0).

(b) *What is the smallest number of equations in the above system that have the same solution set? Write down two separate such linear systems, in vector form.*

You would just need two equations with the solution set (0,0).
Some examples:
$$
\begin{pmatrix}
1 \\
0
\end{pmatrix}x+\begin{pmatrix}
0 \\
1
\end{pmatrix}y=\begin{pmatrix}
0 \\
0
\end{pmatrix}
$$
$$
\begin{pmatrix}
-1 \\
0
\end{pmatrix}x+\begin{pmatrix}
0 \\
-1
\end{pmatrix}y=\begin{pmatrix}
0 \\
0
\end{pmatrix}
$$
(c) *What happens to the infinite linear system if you add the equation $0x+0y=0$ to it?*

Nothing happens, because $0x+0y=0$ has infinite solutions and therefore won't constrain the system.

(d) *What happens to the infinite linear system if by accident one of the equations was recorded as $ax+by=0.000001$?*

The system would become inconsistent. The single solution x=0, y=0 will not satisfy this new equation.

7.  *For each of the situations described below, give an example (if it’s possible) or explain why it’s not possible*
*(a)  A set of vectors that does not span $\mathbb{R}^3$. After adding one more vector, the set does span $\mathbb{R}^3$.*

This is possible.
Start with vectors $\begin{pmatrix}0\\1\\0\end{pmatrix}$ and $\begin{pmatrix}1\\0\\0\end{pmatrix}$. These vectors span a plane in $\mathbb{R}^3$. Now we add vector $\begin{pmatrix}0\\0\\1\end{pmatrix}$. With this third vector, the z component can be represented in the span and now the set of vectors spans $\mathbb{R}^3$.

(b) *A set of vectors that are linearly dependent. After adding one more vector, the set becomes linearly independent.*

This is not possible. In a set of vectors, if any vectors are linearly dependent, then the entire set is considered linearly dependent. Therefore you cannot add vectors to a linearly dependent set to make it linearly independent.

(c) *A set of vectors in R3 with the following properties (four possibilities)*
- *spans $\mathbb{R}^3$, linearly independent*
- *spans $\mathbb{R}^3$, linearly dependent*
- *doesn't span $\mathbb{R}^3$, linearly independent*
- *doesn't span $\mathbb{R}^3$, linearly dependent*
*For each case that is possible, how many vectors could be in the set? State any constraints.*

They are all possible. In order:
 - There must be exactly 3 non-zero vectors
 - There must be at least 3 non-zero vectors, but there can be infinitely more
 - There must be less than 3 vectors. 
 - There must be at least 2 vectors for dependence, but otherwise there can be infinitely more.

(d) *A system of equations with a unique solution. After adding another equation to the system, the new system has infinitely-many solutions.*

This is possible. For example, if you have two 2-dimensional vectors that span $\mathbb{R}^2$ and have one solution (and thus is linearly independent), then add another 2-dimensional vector, the set will now have infinitely-many solutions, because the new vector must be dependent on an existing vector as the span did not increase when it was added.

(e) *A system of equations without any solutions. After deleting an equation, the system has infinitely-many solutions.*

This is possible. A system has no solutions when, after reducing to echelon form, the equation of the form $0=c$ is present, $c$ being a constant.  If you delete that equation, then the system could have either no solutions or infinitely many solutions if there is a free variable based on the other equations. So, this is possible. For example:
$$
\left[\begin{array}{ccc|c}
1 & 0 & 0 & 3 \\
0 & 2 & 2 & 10 \\
0 & 1 & 1 & 5 \\
0 & 0 & 0 & 8
\end{array}\right]
$$
This system is inconsistent. Delete the fourth row equation and the inconsistency will be removed and the system will have infinitely many solutions

8. *In each of the following cases, either find an example that contradicts the statement showing that it is false, or explain why the statement is always true.*
*(a) If $\{u_{1},u_{2},u_{3}\}$ is a spanning set for $\mathbb{R}^n$, then $\{u_{1},u_{2},u_{3},u_{4}\}$ is also a spanning set for $\mathbb{R}^n$. What are all possible values of $n$ for which three vectors $u_{1},u_{2},u_{3}$ can span $\mathbb{R}^n$?*

Three vectors can span $\mathbb{R}^1$, $\mathbb{R}^2$, or $\mathbb{R}^3$.

(b) *If $\{u_{1},u_{2},u_{3}\}$ is a spanning set for $\mathbb{R}^n$ then $\{u_{1},u_{1}+u_{2},u_{1}-u_{3}\}$ also spans $\mathbb{R}^n$.*

This is always true. For the three vectors to span $\mathbb{R}^3$, they must be each have their own pivots in a matrix. For example:
$$
\left[\begin{array}{ccc}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{array}\right]
$$
If we perform $C_{1}+C_{2}\to C_{2}$ and $C_{1}-C_{3}\to C_{3}$ like in the problem
$$
\left[\begin{array}{ccc}
1 & 1 & 1 \\
0 & 1 & 0 \\
0 & 0 & -1
\end{array}\right]
$$
the set of vectors retains linear independence and thus spans $\mathbb{R}^3$. This is because linearly independent vectors can't affect each other's pivots when added together.

(c)  *If $u_{1},u_{2},u_{3}$ are linearly independent, then $u_{1},u_{2},u_{3},u_{4}$ are also linearly independent*

This is not true. For example,
$$
\left[\begin{array}{ccc}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{array}\right]
$$
is linearly independent. The following is no longer:
$$
\left[\begin{array}{ccc}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 3 \\
0 & 0 & 1 & 2
\end{array}\right]
$$
(d) *If $u_{1},u_{2},u_{3}$ are linearly independent, then $u_{1},u_{1}+u_{2},u_{1}-u_{3}$ are also linearly independent.*

This is true. Based on the definition of linear independence, you can't eliminate a linearly independent vector by adding other linearly independent vectors.

(e) *If $u_{1},u_{2},u_{3}$ do not span $\mathbb{R}^3$, then there is a plane $P$ in $\mathbb{R}^3$ that contain all of them.*

This is always true

9. *Suppose we are given the following matrix $B$:*
$$
\left[\begin{array}{cccc}
3 & 0 & -1 & 5 \\
0 & 0 & 2 & -1 \\
0 & 0 & 0 & 0
\end{array}\right]
$$
(a) *What is n?*

3

(b) *What is m?*

4

(c) *Are $u_{1},\dots,u_{m}$ linearly independent?*

No because m > n therefore the vectors cannot be linearly independent.

(d) *Does $\{u_{1},\dots,u_{m}\}$ span $\mathbb{R}^n$?*

No, because the third row does not have a pivot.

(e) *Looking at B can you write down a subset of the original set {u1, . . . , um} that would be guaranteed to be linearly independent?*

Yes,
$$
\left[\begin{array}{ccc}
3 & -1 \\
0 & 2 \\
0 & 0
\end{array}\right]
$$
is one example.

(f) *Is there a subset of the original set $\{u_{1},\dots,u_{m}\}$ that would be guaranteed to span $\mathbb{R}^n$?*

No, because we cannot remove vectors to increase span.

(g) *Write down a $b\in \mathbb{R}^n$ for which $Bx=b$ does not have a solution.*

$b=\begin{bmatrix}0\\0\\1\end{bmatrix}$ since B does not have a pivot in the third row

(h) *Write down a $b\in \mathbb{R}^3$ for which $Bx=b$ has a solution.*

$b=\begin{bmatrix}1\\1\\0\end{bmatrix}$ since B has pivots in the first and third rows

(i) *Write down a $b\in \mathbb{R}^3$ for which $Bx=b$ has a unique solution*

This is not possible because B has free variables.

(k) *Is there a column of $B$ that is in the span of the rest? If so, find it.*

Column 2 is in the span of all the rest because it is a zero vector and by definition all spans contain the zero vector.

(l) *Looking at $B$ do you see a $u_{i}$ that is in the span of the others? How can you identify it?*

Same as before, $u_{2}$ is in the span of the others. I identified it by the fact it is the zero vector and all spans contain the zero vector.

(m) *Put $B$ into reduced echelon form.*

$\frac{1}{3}R_{1}\to R_{1}$
$\frac{1}{2}R_{2}\to R_{2}$
$$
\left[\begin{array}{cccc}
1 & 0 & -\frac{1}{3} & \frac{5}{3} \\
0 & 0 & 1 & -\frac{1}{2} \\
0 & 0 & 0 & 0
\end{array}\right]
$$
$R_{1}+\frac{R_{2}}{3}\to R_{1}$
$$
\left[\begin{array}{cccc}
1 & 0 & 0 & \frac{3}{2} \\
0 & 0 & 1 & -\frac{1}{2} \\
0 & 0 & 0 & 0
\end{array}\right]
$$
$B$ is now in reduced echelon form.

(n) *Write down a non-zero solution of $Ax=0$, if you can*

Solving reduced echelon form gives
$$
\begin{align}
x_{1}=-\frac{3}{2}x_{4} \\
x_{3}=\frac{1}{2}x_{4}
\end{align}
$$
Setting $x_{4}=1$ we find
$$
\begin{align}
x_{1}=-\frac{3}{2} \\
x_{2}=0 \\
x_{3}=\frac{1}{2} \\
x_{4}=1
\end{align}
$$
(o) *How many free variables are there in the set of solution to $Ax=b$ when there is a solution?*

There are two. In $B$ we can see that two columns have no pivot and therefore are free variables.

(p) *If you erased the last row of zeroes in $B$ then would the columns of the resulting matrix be linearly independent?*

No, because the linear dependence of $B$ stems from its extra columns, not rows.

(q) *Can you add rows to $B$ to make the columns of the new matrix linearly independent? If yes, give an example of the new matrix you would create.*

Yes:
$$
\left[\begin{array}{cccc|c}
3 & 0 & -1 & 5 \\
0 & 0 & 2 & -1 \\
0 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 0 & 1
\end{array}\right]
$$

### Holt 2.3

5. *Determine if the following vectors are linearly independent.*
$$
u=\begin{bmatrix}
-4\\0\\-3
\end{bmatrix},v=\begin{bmatrix}
-2\\-1\\5
\end{bmatrix},w=\begin{bmatrix}
2\\4\\7
\end{bmatrix}
$$
I will put them into a matrix and reduce to echelon form.
$$
\begin{bmatrix}
-4 & -2 & 2 \\
0 & -1 & 4 \\
-3 & 5 & 7
\end{bmatrix}
$$
$4R_{3}-3R_{1}\to R_{3}$
$$
\begin{bmatrix}
-4 & -2 & 2 \\
0 & -1 & 4 \\
0 & 26 & 22
\end{bmatrix}
$$
$R_{3}+26R_{2}\to R_{3}$
$$
\begin{bmatrix}
-4 & -2 & 2 \\
0 & -1 & 4 \\
0 & 0 & 126
\end{bmatrix}
$$
There is a pivot in every column, therefore these vectors are linearly independent.

17. *Determine if the columns of the following matrix are linearly independent.*
$$
B=\begin{bmatrix}
-1 & 3 & 1 \\
4 & -3 & -1 \\
3 & 0 & 5
\end{bmatrix}
$$
I'll reduce to echelon form.
$R_{2}+4R_{1}\to R_{2}$
$R_{3}+3R_{1}\to R_{3}$
$$
\begin{bmatrix}
-1 & 3 & 1 \\
0 & 9 & 3 \\
0 & 3 & 8
\end{bmatrix}
$$
$R_{3}-\frac{1}{3}R_{2}\to R_{3}$
$$
\begin{bmatrix}
-1 & 3 & 1 \\
0 & 9 & 3 \\
0 & 0 & 7
\end{bmatrix}
$$
Because there is a pivot in every column, the columns are linearly independent.

##### *On the two problems below use only minimal calculations to determine if the following vectors are linearly independent.*

21. $u=\begin{bmatrix}3\\-1\end{bmatrix},v=\begin{bmatrix}6\\-5\end{bmatrix},w=\begin{bmatrix}1\\4\end{bmatrix}$

These vectors are not linearly independent because this is a set of three two-dimensional vectors and therefore there are not enough pivots to go around.

23. $u=\begin{bmatrix}1\\-8\\3\end{bmatrix},v=\begin{bmatrix}0\\0\\0\end{bmatrix},w=\begin{bmatrix}-7\\1\\12\end{bmatrix}$

These vectors are not linearly independent because the set contains the zero vector and all vectors are dependent with the zero vector.

27. *Determine if one of the vectors is in the span of the other vectors*
$$
u=\begin{bmatrix}
4 \\
-1 \\
3
\end{bmatrix}, v=\begin{bmatrix}
3 \\
5 \\
-2
\end{bmatrix}, w=\begin{bmatrix}
-5 \\
7 \\
-7
\end{bmatrix}
$$
I'll put them into a matrix and reduce them.
$$
\begin{bmatrix}
4 & 3 & -5 \\
-1 & 5 & 7 \\
3 & -2 & -7
\end{bmatrix}
$$
$4R_{2}+R_{1}\to R_{2}$
$4R_{3}-3R_{1}\to R_{3}$
$$
\begin{bmatrix}
4 & 3 & -5 \\
0 & 23 & 23 \\
0 & -17 & -23
\end{bmatrix}
$$
$23R_{3}+17R_{2}\to R_{3}$
$$
\begin{bmatrix}
4 & 3 & -5 \\
0 & 23 & 23 \\
0 & 0 & -138
\end{bmatrix}
$$
There is a pivot in every column therefore the vectors are linearly independent therefore none of the vectors are in the span of the others.