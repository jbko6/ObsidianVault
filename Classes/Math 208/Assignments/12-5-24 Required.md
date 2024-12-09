### Conceptual Problems Ch. 6

3. Let $A=\begin{bmatrix}4&1\\3&2\end{bmatrix}$

(a) Compute the eigenvalues and eigenvectors of $A$.

To find the eigenvalues:
$$
A-\lambda \text{Id}=\begin{bmatrix}
4-\lambda & 1 \\
3 & 2-\lambda
\end{bmatrix}
$$
$\det(A-\lambda \text{Id})=(4-\lambda)(2-\lambda)-3=\lambda^2-6\lambda+5=(\lambda-1)(\lambda-5)$
The eigenvalues are 1 and 5.
Now to find the eigenvectors
For $\lambda=1$
$$
A-\text{Id}=\begin{bmatrix}
3 & 1 \\
3 & 1
\end{bmatrix}\to^{GE}\begin{bmatrix}
3 & 1 \\
0 & 0
\end{bmatrix}
$$
$x_{2}=s$
$x_{1}=-\frac{1}{3}s$
The eigenvectors here will look like $\begin{pmatrix}\left( -\frac{1}{3} s\right)\\s\end{pmatrix}$
A valid basis for the eigenspace is $\begin{pmatrix}1\\-3\end{pmatrix}$
For $\lambda=5$
$$
A-5\text{Id}=\begin{bmatrix}
-1 & 1 \\
3 & -3
\end{bmatrix}\to^{GE}\begin{bmatrix}
-1 & 1 \\
0 & 0
\end{bmatrix}
$$
$x_{2}=s$
$x_{1}=s$
The eigenvectors here will look like $\begin{pmatrix}s\\s\end{pmatrix}$
A valid basis for the eigenspace is $\begin{pmatrix}1\\1\end{pmatrix}$

(b) If $\lambda$ is an eigenvalue of $A$ then there is a vector $v$ such that $Av=\lambda v$. Using this equation, show that $\lambda^2$ is an eigenvalue of $A^2$. What is an eigenvalue of $A^{-1}$? Now compute all eigenvalues and eigenvectors of $A^2$ and $A^{-1}$.

$(Av)^2=(\lambda v)^2$
$A^2v^2=\lambda^2v^2$
divide both sides by $v$
$A^2v=\lambda^2v$
So $\lambda^2$ is an eigenvalue of $A^2$

$(Av)^{-1}=(\lambda v)^{-1}$
$A^{-1}v^{-1}=\lambda^{-1}v^{-1}$
Multiply by $v^2$ on both sides
$A^{-1}v=\lambda^{-1}v$
$\lambda^{-1}$ is an eigenvalue for $A^{-1}$

The eigenvalues for $A^2$ are 1 and 25
The eigenvalues for $A^{-1}$ are $1$ and $\frac{1}{5}$
The eigenvectors for $A^2$ are $\begin{pmatrix}s\\s\end{pmatrix}^2$ and $\begin{pmatrix}\left( -\frac{1}{3}s \right)\\s\end{pmatrix}^2$
The eigenvectors for $A^{-1}$ are $\begin{pmatrix}s\\s\end{pmatrix}^{-1}$ and $\begin{pmatrix}\left( -\frac{1}{3}s \right)\\s\end{pmatrix}^{-1}$

(c) Find a matrix $B$ that shares an eigenvector with $A$ but has different eigenvalues.

We can form a matrix defined by the basis of the eigenspaces of $A$.
$$
P=\begin{bmatrix}
-1 & 1 \\
3 & 1
\end{bmatrix}
$$
Now we can form a new diagonalized matrix made from our new eigenvalues. I'll use the values 2 and 6.
$$
D=\begin{bmatrix}
2 & 0 \\
0 & 6
\end{bmatrix}
$$
Now I'll treat $P$ as a change of basis matrix for the diagonalized matrix
$$
PDP^{-1}=\begin{bmatrix}
5 & 1 \\
3 & 3
\end{bmatrix}=B
$$
This new matrix should have the eigenvalues $2$ and $6$ but the same eigenspaces as $A$.

(d) Find an invertible matrix ${P}$ and a diagonal matrix $D$ so that $A=PDP^{-1}$. Then compute $A^{1000}$

From the eigenvalues and eigenvectors computed earlier:
$$
\begin{align}
D=\begin{bmatrix}
1&0\\0&5
\end{bmatrix} \\
P=\begin{bmatrix}
-1 & 1\\3&1
\end{bmatrix} \\
P^{-1}=\begin{bmatrix}
-\frac{1}{4} & \frac{1}{4} \\
\frac{3}{4} & \frac{1}{4}
\end{bmatrix}
\end{align}
$$
$$
PDP^{-1}=\begin{bmatrix}
4 & 1 \\
3 & 2
\end{bmatrix}=A
$$
$A^{1000}=PD^{1000}P^{-1}=\begin{bmatrix}-1&5^{1000}\\3&5^{1000}\end{bmatrix}P^{-1}=\begin{bmatrix}\frac{1}{4}+\frac{3*5^{1000}}{4}& -\frac{1}{4}+\frac{5^{1000}}{4}\\ -\frac{3}{4}+\frac{3*5^{1000}}{4}& \frac{3}{4}+\frac{5^{1000}}{4}\end{bmatrix}$
(e) Suppose $v$ is an eigenvector of an arbitrary matrix $M$ with eigenvalue $\lambda$. Show (using matrix algebra) that $v$ is also an eigenvector of $M + I$, but with a different eigenvalue. What eigenvalue is it?

When we solve for the characteristic polynomial, we use the equation $\det(M-\lambda \text{Id})=0$. If $M$ is replaced with $M+\text{Id}$, then we could rewrite this equation as $\det(M-(\lambda+1)\text{Id})$. So, the eigenvalue is replaced with the original eigenvalue plus one. As for the eigenvector remaining the same, I think that makes sense if we look at the defining equation for eigenvectors and eigenvalues, $Mv=\lambda v$, which becomes $(M+\text{Id})v=(\lambda+1)v$ under this situation. The eigenvector $v$ is not touched and therefore remains the same.

4. (Reflections and projections)

(a) Let $T:\mathbb{R}^3\to \mathbb{R}^3$ be the transformation from the conceptual problems for Chapter 4:
$$
T(x)=\frac{1}{3}\begin{bmatrix}
-1 & -2 & 2 \\
-2 & 2 & 1 \\
2 & 1 & 2
\end{bmatrix}x
$$
Determine the eigenvalues of $T$ and find a basis for each eigenspace.

Let's call $A$ the matrix associated with $T$.
$$
A-\lambda \text{Id}=\frac{1}{3}\begin{bmatrix}
-1-3\lambda & -2 & 2 \\
-2 & 2-3\lambda & 1 \\
2 & 1 & 2-3\lambda
\end{bmatrix}
$$
$\det(A-\lambda \text{Id})=\left( -\frac{1}{3}-\lambda \right)\left( \left( \frac{2}{3}-\lambda \right)^2-\frac{1}{9} \right)+\frac{2}{3}\left( -\frac{2}{3}\left( \frac{2}{3}-\lambda \right)-\frac{2}{9} \right)+\frac{2}{3}\left( -\frac{2}{9}-\frac{2}{3}\left( \frac{2}{3}-\lambda \right) \right)$
$\det(A-\lambda \text{Id})=-(x-1)^2(x+1)$
The eigenvalue are -1 and 1

Solving eigenspace for -1:
$$
A+\text{Id}=\begin{bmatrix}
\frac{2}{3} & -\frac{2}{3} &  \frac{2}{3} \\
-\frac{2}{3} & \frac{5}{3} & \frac{1}{3} \\
\frac{2}{3} & \frac{1}{3} & \frac{5}{3}
\end{bmatrix}\to^{GE} \begin{bmatrix}
1&0&2\\0&1&1\\0&0&0
\end{bmatrix}
$$
$$
\begin{align}
x_{3}=s \\
x_{2}=-s \\
x_{1}=-2s
\end{align}
$$
$\begin{pmatrix}-2\\-1\\1\end{pmatrix}$ is a basis for this eigenspace.

Solving eigenspace for 1:
$$
A-\text{Id}=\begin{bmatrix}
-\frac{4}{3} & -\frac{2}{3} & \frac{2}{3} \\
-\frac{2}{3} & -\frac{1}{3} & \frac{1}{3} \\
\frac{2}{3} & \frac{1}{3} & -\frac{1}{3}
\end{bmatrix}\to^{GE}\begin{bmatrix}
2 & 1 & -1 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}
$$
$$
\begin{align}
x_{3}=s_{1} \\
x_{2}=s_{2} \\
2x_{3}+s_{2}-s_{1}\to x_{3}=\frac{s_{1}}{2}-\frac{s_{2}}{2}
\end{align}
$$
$\left\{ \begin{pmatrix}\left( \frac{1}{2} \right)\\0\\1\end{pmatrix},\begin{pmatrix}\left( -\frac{1}{2} \right)\\1\\0\end{pmatrix} \right\}$ is a basis for this eigenspace.

(b) Remember that $T$ is supposed to be 'reflection across a plane $S$'. Explain what the eigenvalues and eigenvectors from $A$ mean geometrically. What is their relationship to $S$? Why does it make sense for the eigenvalues to be 1 and -1?

When the vector is normal to the plane, it should be reflected, which is seen in the -1 eigenvalue. The eigenvector associated with the -1 eigenvalue is the normal of the plane $S$. When a vector is parallel to the plane, it should be untouched by the transformation, which is reflection in the eigenvalue 1. The eigenvectors associated with the 1 eigenvalue compose the span of the plane $S$.

(c) Let $T:\mathbb{R}^3\to \mathbb{R}^3$ be the "averaging transformation":
$$
T\left(\begin{bmatrix}
x_{1}\\x_{2}\\x_{3}
\end{bmatrix}\right)=\begin{bmatrix}
\frac{1}{3}(x_{1}+x_{2}+x_{3})\\\left( \frac{1}{3} \right)(x_{1}+x_{2}+x_{3})\\\left( \frac{1}{3} \right)(x_{1}+x_{2}+x_{3})
\end{bmatrix}
$$
Find all eigenvalue and eigenspaces for $T$. Explain your answer (what does it mean in terms of averaging?)

Let's look at the matrix $A$ associated with $T$.
$$
A=\begin{bmatrix}
\frac{1}{3} & \frac{1}{3} & \frac{1}{3} \\
\frac{1}{3} & \frac{1}{3} & \frac{1}{3} \\
\frac{1}{3} & \frac{1}{3} & \frac{1}{3}
\end{bmatrix}
$$
$$
A-\lambda \text{Id}=\begin{bmatrix}
\frac{1}{3}-\lambda & \frac{1}{3} & \frac{1}{3} \\
\frac{1}{3} & \frac{1}{3}-\lambda & \frac{1}{3} \\
\frac{1}{3} & \frac{1}{3} & \frac{1}{3}-\lambda
\end{bmatrix}
$$
$\det(A-\lambda \text{Id})=\left( \frac{1}{3}-\lambda \right)\left( \left( \frac{1}{3}-\lambda \right)^2-\frac{1}{9} \right)-\frac{1}{3}\left( \frac{1}{3}\left( \frac{1}{3}-\lambda \right)-\frac{1}{9} \right)+\frac{1}{3}\left( \frac{1}{9}-\frac{1}{3}\left( \frac{1}{3}-\lambda \right) \right)$
$\det(A-\lambda \text{Id})=(1-\lambda)\lambda^2$
The eigenvalues are 1 and 0
Solving for the eigenspace of the 1 eigenvalue:
$$
A-\text{Id}=\begin{bmatrix}
-\frac{2}{3} & \frac{1}{3} & \frac{1}{3} \\
\frac{1}{3} & -\frac{2}{3} & \frac{1}{3} \\
\frac{1}{3} & \frac{1}{3} & -\frac{2}{3}
\end{bmatrix}
$$
Reducing this...
$2R_{2}+R_{1}\to R_{2}$
$2R_{3}+R_{1}\to R_{3}$
$$
\begin{bmatrix}
-\frac{2}{3} & \frac{1}{3} & \frac{1}{3} \\
0 & -1 & 1 \\
0 & 1 & -1
\end{bmatrix}
$$
$R_{2}+R_{3}\to R_{3}$
$$
\begin{bmatrix}
-\frac{2}{3} & \frac{1}{3} & \frac{1}{3} \\
0 & -1 & 1 \\
0 & 0 & 0
\end{bmatrix}
$$
$3R_{1}\to R_{1}$
$$
\begin{bmatrix}
-2 & 1 & 1 \\
0 & -1 & 1 \\
0 & 0 & 0
\end{bmatrix}
$$
$$
\begin{align}
x_{3}=s \\
x_{2}=s \\
-2x_{1}+2s=0\to x_{1}=s
\end{align}
$$
$\begin{pmatrix}s\\s\\s\end{pmatrix}\to \begin{pmatrix}1\\1\\1\end{pmatrix}$
Solving for the eigenspace of eigenvalue 0:
We need to reduce our original matrix
$R_{2}-R_{1}\to R_{2}$
$R_{3}-R_{1}\to R_{3}$
$3R_{1}\to R_{1}$
$$
\begin{bmatrix}
1 & 1 & 1 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}
$$
$$
\begin{align}
x_{3}=s_{1} \\
x_{2}=s_{2} \\
x_{3}+s_{1}+s_{2}=0\to x_{3}=-s_{1}-s_{2}
\end{align}
$$
$\left\{ \begin{pmatrix}-1\\1\\0\end{pmatrix},\begin{pmatrix}-1\\0\\1\end{pmatrix} \right\}$ is a basis for this eigenspace

The 0 eigenspace makes sense because if the three components of the vector add up to one (in other words, if the magnitude of the vector = 1), then the matrix will always return 0. The 1 eigenspace also makes sense because if all the components of the vector are the same, then the component $\frac{1}{3}$s will add up to the original vector. This matrix essentially averages the three components of the vector and returns it. It should have the same magnitude as the original vector. If the vector is already averaged, then this matrix doesn't do anything.

5. (Rotations)

(a) Let $T:\mathbb{R}^2\to \mathbb{R}^2$ be rotation by $\frac{\pi}{3}$. Compute the characteristic polynomial of $T$, and find any eigenvalues and eigenvectors.

The associated rotation matrix, which I'll call $A$. would look like this:
$$
\begin{bmatrix}
\cos\left( \frac{\pi}{3} \right) & -\sin\left( \frac{\pi}{3} \right) \\
\sin\left( \frac{\pi}{3} \right) & \cos\left( \frac{\pi}{3} \right)
\end{bmatrix}
$$
Assuming the rotation is counterclockwise. Which works out to
$$
\begin{bmatrix}
\frac{1}{2} & -\frac{\sqrt{ 3 }}{2} \\
\frac{\sqrt{ 3 }}{2} & \frac{1}{2}
\end{bmatrix}
$$
Now to compute the eigenvalues. I'm going to try computing them a different way, using the equation $\lambda=m\pm \sqrt{ m^2-p }$ where $m$ is the mean of the trace and $p$ is the determinant of the matrix, since the mean is easily worked out to be $\frac{1}{2}$.
$$
\det(A)=\frac{1}{4}+\frac{3}{2}=\frac{7}{4}
$$
$$
\begin{align}
\lambda=\frac{1}{2}\pm \sqrt{ \frac{1}{4}-\frac{7}{4} } \\
\lambda=\frac{1}{2}\pm \sqrt{ -\frac{3}{2} }
\end{align}
$$
The eigenvalues, $\lambda_{1}=\frac{1+i\sqrt{ 3 }}{2}$ and $\lambda_{2}=\frac{1-i\sqrt{ 3 }}{2}$ are imaginary. I really don't want to work out the eigenvectors mathematically because that would be painful 😭😭

(b) Let $T:\mathbb{R}^3\to \mathbb{R}^3$ be a rotation in $\mathbb{R}^3$ by $\frac{\pi}{3}$ around some chosen axis $L$, a line through the origin in $\mathbb{R}^3$. Without computing any matrices, explain why $\lambda=1$ is always an eigenvalue of $T$. What is the corresponding eigenspace?

For a 3d rotation, there will always be a rotation of axis and some associated degree movement that can completely describe the rotation. That axis is the only "part" of the rotation that is unaffected, by the definition of a 3d rotation. So, the span of that axis is the eigenspace of the $\lambda=1$ eigenvalue of $T$. 

6. Find a $3\times 3$ matrix $A$ with eigenvectors $v_{1}=\begin{bmatrix}1\\2\\3\end{bmatrix}$ with $\lambda=1$, $v_{2}=\begin{bmatrix}0\\-1\\1\end{bmatrix}$ with $\lambda=2$ and $v_{3}=\begin{bmatrix}1\\1\\1\end{bmatrix}$ with $\lambda=10$.

We can form a diagonal matrix with those eigenvalues.
$$
D=\begin{bmatrix}
1 & 0 & 0 \\
0 & 2 & 0 \\
0 & 0 & 10
\end{bmatrix}
$$
Then another matrix composed of the eigenvectors associated with the eigenvalues.
$$
P=\begin{bmatrix}
1 & 0 & 1 \\
2 & -1 & 1 \\
3 & 1 & 1
\end{bmatrix}
$$
Then $A=PDP^{-1}$
We must first find $P^{-1}$
$$
\left[\begin{array}{ccc|ccc}
1 & 0 & 1 & 1 & 0 & 0 \\
2 & -1 & 1 & 0 & 1 & 0 \\
3 & 1 & 1 & 0 & 0 & 1
\end{array}\right]
$$
$R_{2}-2R_{1}\to R_{2}$
$R_{3}-3R_{1}\to R_{3}$
$$
\left[\begin{array}{ccc|ccc}
1 & 0 & 1 & 1 & 0 & 0 \\
0 & -1 & -1 & -2 & 1 & 0 \\
0 & 1 & -2 & -3 & 0 & 1
\end{array}\right]
$$
$R_{3}+R_{2}\to R_{3}$
$$
\left[\begin{array}{ccc|ccc}
1 & 0 & 1  & 1 & 0 & 0 \\
0 & -1 & -1 & -2 & 1 & 0 \\
0 & 0 & -3 & -5 & 1 & 1
\end{array}\right]
$$
$3R_{2}-R_{3}\to R_{2}$
$3R_{1}+R_{3}\to R_{1}$
$$
\left[\begin{array}{ccc|ccc}
3 & 0 & 0 & -2 & 1 & 1 \\
0 & -3 & 0 & -1 & 2 & -1 \\
0 & 0 & -3 & -5 & 1 & 1
\end{array}\right]
$$
$-\frac{1}{3}R_{3}\to R_{3}$
$-\frac{1}{3}R_{2}\to R_{2}$
$\frac{1}{3}R_{1}\to R_{1}$
$$
\left[\begin{array}{ccc|ccc}
1 & 0 & 0 & -\frac{2}{3} & \frac{1}{3} & \frac{1}{3} \\
0 & 1 & 0 & \frac{1}{3} & -\frac{2}{3} & \frac{1}{3} \\
0 & 0 & 1 & \frac{5}{3} & -\frac{1}{3} & -\frac{1}{3}
\end{array}\right]
$$
Now I can compute $PDP^{-1}$
$$
PDP^{-1}=\begin{bmatrix}
16 & -3 & -3 \\
\frac{44}{3} & -\frac{4}{3} & -\frac{10}{3} \\
\frac{46}{3} & -\frac{11}{3} & -\frac{5}{3}
\end{bmatrix}
$$

8. Suppose $T:\mathbb{R}^4\to \mathbb{R}^4$ with $T(x)=Ax$ is a linear transformation such that
- (0,0,1,0) and (0,0,0,1) lie in the kernel of $T$, and
- all vectors of the form $(x_{1},x_{2},0,0)$ are reflected about the line $2x_{1}-x_{2}=0$

(a) Compute all the eigenvalues of $A$ and a basis for each eigenspace.

Since non zero vectors lie in the kernel of $T$, we could say 0 is an eigenvalue with the basis for its eigenspace being:
$$
\left\{ \begin{pmatrix}
0\\0\\1\\0
\end{pmatrix},\begin{pmatrix}
0\\0\\0\\1
\end{pmatrix} \right\}
$$
Next, we know vectors of the form $(x_{1},x_{2},0,0)$ are reflected, so we can say there are eigenvalues of 1 and -1, 1 where the input vector is in the span of the reflecting vector, and -1 where the input vector is perpendicular to the reflection vector.
For the eigenspace of 1, the span is
$$
\left\{ \begin{pmatrix}
1\\2\\0\\0
\end{pmatrix} \right\}
$$
And for the eigenspace of -1, the span is
$$
\left\{ \begin{pmatrix}
2\\-1\\0\\0
\end{pmatrix} \right\}
$$
(b) Is $A$ invertible? Explain.

As found when we saw the basis of the 0 eigenvalue eigenspace is 2 dimensional, $A$ has a nullity of 2. For a matrix to be invertible, it must have a nullity of 0, therefore ,$A$ is not invertible.

(c) Is $A$ diagonalizable? If yes, write down its diagonalization. If no, why not?

$A$ is diagonalizable since the eigenvectors are linearly independent and there are four of them, equal to the dimension of $A$. The diagonalization is:
$$
A=\begin{bmatrix}
2 & 1 & 0 & 0 \\
-1 & 2 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}\begin{bmatrix}
-1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix}\begin{bmatrix}
2 & 1 & 0 & 0 \\
-1 & 2 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}^{-1}
$$
