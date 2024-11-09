
#### Holt 1.1

8. $$
\begin{align}
3x_{1}+8x_{2}-14x_{3}=6  \\
x_{1}+3x_{2}-4x_{3}=1
\end{align}
$$
Convert to matrix
$$
\left[\begin{array}{ccc|c}
3 & 8 & -14 & 6 \\
1 & 3 & -4 & 1
\end{array}\right]
$$
$3R_{2}\to R_{2}$
$$
\left[\begin{array}{ccc|c}
3 & 8 & -14 & 6 \\
3 & 9 & -12 & 3
\end{array}\right]
$$
$R_{2}-R_{1}\to R_{2}$
$$
\left[\begin{array}{ccc|c}
3 & 8 & -14 &6 \\
0 & 1 & 2 & -3
\end{array}\right]
$$
$$
\begin{align}
x_{3}=s_{1} \\
x_{2}=-3-2x_{3}, x_{2}=-3-2s_{1} \\
3x_{1}=6-8x_{2}+14x_{3}, 3x_{1}=30+30s_{1}, x_{1}=10+10s_{1}
\end{align}
$$
18. The system is not in echelon form. Although each leading variable appears in at most one equation, and each equation has a unique leading variable, the equations are not organized in a "start step" fashion, where the number of variables in each equation decreases downward. 
29. $$
\begin{align}
-2x_{1}+x_{2}+2x_{3}=1 \\
-3x_{3}+x_{4}=-4
\end{align}
$$
Convert to matrix
$$
\left[\begin{array}{cccc|c}
-2 & 1 & 2 & 0 & 1 \\
0 & 0 & -3 & 1 & -4
\end{array}\right]
$$
$-R_{1}\to R_{1}$, $-R_{2}\to R_{2}$ for convenience
$$
\left[\begin{array}{cccc|c}
2 & -1 & -2 & 0 & -1 \\
0 & 0 & 3 & -1 & 4
\end{array}\right]
$$
Already in echelon form so can solve now
$$
\begin{align}
2x_{1}-x_{2}-x_{3}=-1 \\
x_{2}=s_{1} \\
3x_{3}-x_{4}=4 \\
x_{4}=s_{2} \\
 \\
2x_{1}=-1+x_{2}+x_{3}, x_{1}=-\frac{1}{2}+\frac{s_{1}}{2}+\frac{x_{3}}{2} \\
x_{2}=s_{1} \\
3x_{3}=4+x_{4}, x_{3}=\frac{4}{3}+\frac{s_{2}}{3} \\
x_{4}=s_{2} \\
\end{align}
$$
Low-key don't want to solve further but I got it right.

37. Find value(s) of k so that the system is consistent.
a.
$$
\begin{align}
6x_{1}-5x_{2}=4 \\
9x_{1}+kx_{2}=-1
\end{align}
$$
Convert to matrix
$$
\left[\begin{array}{cc|c}
6 & -5 & 4 \\
9 & k & -1
\end{array}\right]
$$
$-\frac{3R_{1}}{2}+R_{2}\to R_{2}$
$$
\left[\begin{array}{cc|c}
6 & -5 & 4 \\
0 & \frac{15}{2}+k & -7
\end{array}\right]
$$
$k\neq-\frac{15}{2}$

b.
$$
\begin{align}
6x_{1}-8x_{2}=k \\
-9x_{1}+12x_{2}=-1
\end{align}
$$
Convert to matrix
$$
\left[\begin{array}{cc|c}
6 & -8 & k \\
-9 & 12 & -1
\end{array}\right]
$$
Swap $R_{1}\leftrightarrow R_{2}$
$$
\left[\begin{array}{cc|c}
-9 & 12 & -1 \\
6 & -8 & k
\end{array}\right]
$$
$\frac{2R_{1}}{3}+R_{2}\to R_{2}$
$$
\left[\begin{array}{cc|c}
-9 & 12 & -1 \\
0 & 0 & -\frac{2}{3}+k
\end{array}\right]
$$
$k=\frac{2}{3}$

38. Find values of h and k so that the linear system has no solutions
a.
$$
\begin{align}
2x_{1}+5x_{2}=-1 \\
hx_{1}+5x_{2}=k
\end{align}
$$
Convert to matrix
$$
\left[\begin{array}{cc|c}
2 & 5 & -1 \\
h & 5 & k
\end{array}\right]
$$
$-R_{1}+R_{2}\to R_{2}$
$$
\left[\begin{array}{cc|c}
2 & 5 & -1 \\
h-2 & 0 & k+1
\end{array}\right]
$$
$h=2$
$k\neq-1$

b.
$$
\begin{align}
2x_{1}+5x_{2}=-1 \\
hx_{1}+kx_{2}=3
\end{align}
$$
Convert to matrix.
$$
\left[\begin{array}{cc|c}
2 & 5 & -1 \\
h & k & 3
\end{array}\right]
$$
$R_{1}+R_{2}\to R_{2}$
$$
\left[\begin{array}{cc|c}
2 & 5 &-1 \\
h+2 & k+5 & 2
\end{array}\right]
$$
$h=-2$
$k=-5$
$$
\left[\begin{array}{cc|c}
2 & 5 & -1 \\
0 & 0 & 2
\end{array}\right]
$$
#### Holt 1.2

1. $$
\begin{align}
4x_{1}+2x_{2}-1x_{3}=2 \\
-x_{1}+5x_{3}=7
\end{align}
$$
7. This matrix is not in echelon form.
9. This matrix is in echelon form.
21. Convert the system to an augmented matrix and then find all solutions by reducing the system to echelon form and back substituting.
$$
\begin{align}
-2x_{1}+5x_{2}-10x_{3}=4 \\
x_{1}-2x_{2}+3x_{3}=-1 \\
7x_{1}-17x_{2}+34x_{3}=-16
\end{align}
$$
Convert to matrix.
$$
\left[\begin{array}{ccc|c}
-2 & 5 & -10 & 4 \\
1 & -2 & 3 & -1 \\
7 & -17 & 34 & -16
\end{array}\right]
$$
$R_{1}\leftrightarrow R_{2}$
$$
\left[\begin{array}{ccc|c}
1 & -2 & 3 & -1 \\
-2 & 5 & -10 & 4 \\
7 & -17 & 34 & -16
\end{array}\right]
$$
$-2R_{1}+R_{2}\to R_{2}$
$$
\left[\begin{array}{ccc|c}
1 & -2 & 3 & -1 \\
0 & 9 & -16 & 6 \\
7 & -17 & 34 & -16
\end{array}\right]
$$
$-7R_{1}+R_{3}\to R_{3}$
$$
\left[\begin{array}{ccc|c}
1 & -2 & 3 & -1 \\
0 & 9 & -16 & 6 \\
0 & -3 & 13 & -9
\end{array}\right]
$$
$R_{2}\leftrightarrow R_{3}$
$$
\left[\begin{array}{ccc|c}
1 & -2 & 3 & -1 \\
0 & -3 & 13 & -9 \\
0 & 9 & -16 & 6
\end{array}\right]
$$
$3R_{2}+R_{3}\to R_{3}$
$$
\left[\begin{array}{ccc|c}
1 & -2 & 3 & -1 \\
0 & -3 & 13 & -9 \\
0 & 0 & 23 & -21
\end{array}\right]
$$
Read off answers
$$
\begin{align}
x_{3}=-\frac{21}{23}
\end{align}
$$
No idea where I went wrong.