### Sara Biley, Aut. 23
4. Give an example of a matrix that satisfies the following properties if possible or say "not possible" and give a brief justification.

(a) A $2 \times  2$ matrix that is nonzero in every entry and $A=A^{-1}$

$$
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}=\frac{1}{ad-bc}\begin{bmatrix}
d & -b \\
-c & a
\end{bmatrix}
$$
$\det=-1$
$a=-d$
$ad-bc=-1$
$bc=ad+1$
$$
\begin{bmatrix}
2 & -3 \\
1 & -2
\end{bmatrix}
$$
(b) A $2 \times 2$ matrix that is non-zero at every entry and $A=2A$
$$
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}=\begin{bmatrix}
2a & 2b \\
2c & 2d
\end{bmatrix}
$$
Not possible.

(c) A $2 \times 2$ matrix that is nonzero in every entry and $A$ and $A^2$ have different eigenvalues.

$$
A=\begin{bmatrix}
a & b \\
c & d
\end{bmatrix},A^2=\begin{bmatrix}
a^2+c & ab+ad \\
ac+cd & cb+d^2
\end{bmatrix}
$$
$$
A-\lambda I=\begin{bmatrix}
a-\lambda & b \\
c & d-\lambda
\end{bmatrix},A^2=\begin{bmatrix}
a^2+c-\lambda & ab+ad \\
ac+cd & cd+d^2-\lambda
\end{bmatrix}
$$
$\det(A-\lambda I)=(a-\lambda)(d-\lambda)-bc$
$\det(A-\lambda I)=(a^2+c-\lambda)(cd+d^2-\lambda)-(ab+ad)(ac+cd)$
$$
\begin{bmatrix}
1 & 2 \\
4 & 1
\end{bmatrix}
$$

