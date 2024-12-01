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
First, let's find the inverse of the second matrix in this composition.
$$
\left[\begin{array}{ccc|ccc}
8 & 0 & 3 & 1 & 0 & 0 \\
-1 & 1 & 1 & 0 & 1 & 0 \\
0 & 2 & 4 & 0 & 0 & 1
\end{array}\right]
$$
$R_{1}+8R_{2}\to R_{2}$
$$
\left[\begin{array}{ccc|ccc}
8 & 0 & 3 & 1 & 0 & 0 \\
0 & 8 & 11 & 1 & 8 & 0 \\
0 & 2 & 4 & 0 & 0 & 1
\end{array}\right]
$$
$R_{2}-4R_{3}\to R_{3}$
$$
\left[\begin{array}{ccc|ccc}
8 & 0 & 3 & 1 & 0 & 0 \\
0 & 8 & 11 & 1 & 8 & 0 \\
0 & 0 & -5 & 1 & 8 & -4
\end{array}\right]
$$
$5R_{1}+3R_{3}\to R_{1}$
$5R_{2}+11R_{3}\to R_{2}$
$$
\left[\begin{array}{ccc|ccc}
40 & 0 & 0 & 8 & 24 & -12 \\
0 & 40 & 0 & 16 & 128 & -44 \\
0 & 0 & -5 & 1 & 8 & -4
\end{array}\right]
$$
$\frac{1}{40}R_{1}\to R_{1}$
$\frac{1}{40}R_{2}\to R_{2}$
$-\frac{1}{5}R_{3}\to R_{3}$
$$
\left[\begin{array}{ccc|ccc}
1 & 0 & 0 & \frac{4}{20} & \frac{24}{40} & -\frac{12}{40} \\
0 & 1 & 0 & \frac{16}{40} & \frac{128}{40} & -\frac{44}{40} \\
0 & 0 & 1 & -\frac{1}{5} & -\frac{8}{5} & \frac{4}{5}
\end{array}\right]
$$$$
\therefore\begin{bmatrix}
8 & 0 & 3 \\
-1 & 1 & 1 \\
0 & 2 & 4
\end{bmatrix}^{-1}=\begin{bmatrix}
\frac{4}{20} & \frac{24}{40} & -\frac{12}{40} \\
\frac{16}{40} & \frac{128}{40} & -\frac{44}{40} \\
-\frac{1}{5} & -\frac{8}{5} & \frac{4}{5}
\end{bmatrix}
$$
Then
$$
\begin{bmatrix}
1 & 3 & 2 \\
0 & 1 & 1 \\
-2 & 0 & 4
\end{bmatrix}^3=
\begin{bmatrix}
1 & 3 & 2 \\
0 & 1 & 1 \\
-2 & 0 & 4
\end{bmatrix}\begin{bmatrix}
1 & 3 & 2 \\
0 & 1 & 1 \\
-2 & 0 & 4
\end{bmatrix}\begin{bmatrix}
1 & 3 & 2 \\
0 & 1 & 1 \\
-2 & 0 & 4
\end{bmatrix}
$$
$$
=\begin{bmatrix}
64 & 6 & 36 \\
-9 & 3 & 2 \\
-2 & 10 & 18
\end{bmatrix}\begin{bmatrix}
1 & 3 & 2 \\
0 & 1 & 1 \\
-2 & 0 & 4
\end{bmatrix}=\begin{bmatrix}
506 & 78 & 342 \\
-75 & 7 & -16 \\
-26 & 46 & 76
\end{bmatrix}
$$
So,
$$
\begin{bmatrix}
506 & 78 & 342 \\
-75 & 7 & -16 \\
-26 & 46 & 76
\end{bmatrix}\begin{bmatrix}
\frac{4}{20} & \frac{24}{40} & -\frac{12}{40} \\
\frac{16}{40} & \frac{128}{40} & -\frac{44}{40} \\
-\frac{1}{5} & -\frac{8}{5} & \frac{4}{5}
\end{bmatrix}=\begin{bmatrix}
-\frac{87}{5} & -\frac{551}{5} & \frac{268}{5} \\
-\frac{39}{5} & -\frac{252}{5} & \frac{227}{10} \\
-\frac{128}{5} & -\frac{854}{5} & \frac{337}{5}
\end{bmatrix}
$$
still need to find the determinant 😭