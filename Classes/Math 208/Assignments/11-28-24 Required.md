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
0 & 0 & 0 & 4 & 0 & 1 & 0 & 0 & 1 & 0 \\
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
0 & 0 & 0 & 4 & 0 & 1 & 0 & 0 & 1 & 0 \\
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
1*2*3*4*(5(5*4*3*2*1)-6)
$$