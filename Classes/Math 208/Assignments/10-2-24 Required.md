Jonah Kowal, Math 208D
### Conceptual Problems
1) Matt is a software engineer writing a script involving 6 tasks. Each must be done one after the other. Let ti be the time needed to complete the ith task. These times have a certain structure:
	•The total time needed to complete any 3 adjacent tasks is half the total time required to complete the next two tasks.
	•The second task takes 1 second.
	•The fourth task takes 10 seconds.

(a) Write an augmented matrix for the system of equations describing the length of
each task.

$t_{1}+t_{2}+t_{3}=\frac{t_{4}+t_{5}}{2}$
$t_{2}+t_{3}+t_{4}=\frac{t_{5}+t_{6}}{2}$
$t_{2}=1$
$t_{4}=10$

$2t_{1}+2t_{2}+2t_{3}=t_{4}+t_{5}$
$2t_{2}+2t_{3}+2t_{4}=t_{5}+t_{6}$
$t_{2}=1$
$t_{4}=1$

$2t_{1}+2t_{2}+2t_{3}-t_{4}-t_{5}=0$
$2t_{2}+2t_{3}+2t_{4}-t_{5}-t_{6}=0$
$t_{2}=1$
$t_{4}=1$
$$
\left[\begin{array}{cccccc|c}
2 & 2 & 2 & -1 & -1 & 0 & 0 \\
0 & 2 & 2 & 2 & -1 & -1 & 0 \\
0 & 1 & 0 & 0 & 0 & 0 & 1 \\
0 & 0 & 0 & 1 & 0 & 0 & 10
\end{array}\right]
$$
(b) Reduce this augmented matrix to reduced echelon form.
$$
\left[\begin{array}{cccccc|c}
2 & 2 & 2 & -1 & -1 & 0 & 0 \\
0 & 2 & 2 & 2 & -1 & -1 & 0 \\
0 & 1 & 0 & 0 & 0 & 0 & 1 \\
0 & 0 & 0 & 1 & 0 & 0 & 10
\end{array}\right]
$$
Swap $R_{2}$ and $R_{3}$ 
$$
\left[\begin{array}{cccccc|c}
2 & 2 & 2 & -1 & -1 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 & 0 & 1 \\
0 & 2 & 2 & 2 & -1 & -1 & 0 \\
0 & 0 & 0 & 1 & 0 & 0 & 10
\end{array}\right]
$$
Replace $R_{3}$ with $R_{3}-2R_{2}$
$$
\left[\begin{array}{cccccc|c}
2 & 2 & 2 & -1 & -1 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 & 0 & 1 \\
0 & 0 & 2 & 2 & -1 & -1 & -2 \\
0 & 0 & 0 & 1 & 0 & 0 & 10
\end{array}\right]
$$
Clearing column 4 above the pivot position.
Replace $R_{3}$ with $R_{3}-2R4$. Replace $R_{1}$ with $R_{1}+R_{4}$.
$$
\left[\begin{array}{cccccc|c}
2 & 2 & 2 & 0 & -1 & 0 & 10 \\
0 & 1 & 0 & 0 & 0 & 0 & 1 \\
0 & 0 & 2 & 0 & -1 & -1 & -22 \\
0 & 0 & 0 & 1 & 0 & 0 & 10
\end{array}\right]
$$
Clearing column 3 above the pivot position.
Replace $R_{1}$ with $R_{1}-R_{3}$.
$$
\left[\begin{array}{cccccc|c}
2 & 2 & 0 & 0 & 0 & 1 & 32 \\
0 & 1 & 0 & 0 & 0 & 0 & 1 \\
0 & 0 & 2 & 0 & -1 & -1 & -22 \\
0 & 0 & 0 & 1 & 0 & 0 & 10
\end{array}\right]
$$
Clearing column 2 above the pivot position.
Replace $R_{1}$ with $R_{1}-2R_{2}$.
$$
\left[\begin{array}{cccccc|c}
2 & 0 & 0 & 0 & 0 & 1 & 30 \\
0 & 1 & 0 & 0 & 0 & 0 & 1 \\
0 & 0 & 2 & 0 & -1 & -1 & -22 \\
0 & 0 & 0 & 1 & 0 & 0 & 10
\end{array}\right]
$$
Getting pivot positions to 1.
Replace $R_{1}$ with $\frac{R_{1}}{2}$. Replace $R_{3}$ with $\frac{R_{3}}{2}$.
$$
\left[\begin{array}{cccccc|c}
1 & 0 & 0 & 0 & 0 & \frac{1}{2} & 15 \\
0 & 1 & 0 & 0 & 0 & 0 & 1 \\
0 & 0 & 1 & 0 & -\frac{1}{2} & -\frac{1}{2} & -11 \\
0 & 0 & 0 & 1 & 0 & 0 & 10
\end{array}\right]
$$
(c) Suppose he knows additionally that the sixth task will take 20 seconds and the first three tasks together will take 50 seconds. Write the extra rows that you would add to your answer in (b) to take account of this new information.

$t_{1}+t_{2}+t_{3}=\frac{t_{4}+t_{5}}{2}$
$t_{2}+t_{3}+t_{4}=\frac{t_{5}+t_{6}}{2}$
$t_{2}=1$
$t_{4}=10$
$t_{1}+t_{2}+t_{3}=50$
$t_{6}=20$

Write the above info into the matrix.
$$
\left[\begin{array}{cccccc|c}
1 & 1 & 1 & 0 & 0 & 0 & 50 \\
1 & 0 & 0 & 0 & 0 & \frac{1}{2} & 15 \\
0 & 1 & 0 & 0 & 0 & 0 & 1 \\
0 & 0 & 1 & 0 & -\frac{1}{2} & -\frac{1}{2} & -11 \\
0 & 0 & 0 & 1 & 0 & 0 & 10 \\
0 & 0 & 0 & 0 & 0 & 1 & 20
\end{array}\right]
$$
Replace $R_{1}$ with $R_{1}-R_{2}-R_{3}-R_{4}$.
$$
\left[\begin{array}{cccccc|c}
0 & 0 & 0 & 0 & \frac{1}{2} & 0 & 45 \\
1 & 0 & 0 & 0 & 0 & \frac{1}{2} & 15 \\
0 & 1 & 0 & 0 & 0 & 0 & 1 \\
0 & 0 & 1 & 0 & -\frac{1}{2} & -\frac{1}{2} & -11 \\
0 & 0 & 0 & 1 & 0 & 0 & 10 \\
0 & 0 & 0 & 0 & 0 & 1 & 20
\end{array}\right]
$$
Replace $R_{1}$ with $2R_{1}$
$$
\left[\begin{array}{cccccc|c}
0 & 0 & 0 & 0 & 1 & 0 & 90 \\
1 & 0 & 0 & 0 & 0 & \frac{1}{2} & 15 \\
0 & 1 & 0 & 0 & 0 & 0 & 1 \\
0 & 0 & 1 & 0 & -\frac{1}{2} & -\frac{1}{2} & -11 \\
0 & 0 & 0 & 1 & 0 & 0 & 10 \\
0 & 0 & 0 & 0 & 0 & 1 & 20
\end{array}\right]
$$
Swap $R_{1}$ into 5th row
$$
\left[\begin{array}{cccccc|c}
1 & 0 & 0 & 0 & 0 & \frac{1}{2} & 15 \\
0 & 1 & 0 & 0 & 0 & 0 & 1 \\
0 & 0 & 1 & 0 & -\frac{1}{2} & -\frac{1}{2} & -11 \\
0 & 0 & 0 & 1 & 0 & 0 & 10 \\
0 & 0 & 0 & 0 & 1 & 0 & 90 \\
0 & 0 & 0 & 0 & 0 & 1 & 20
\end{array}\right]
$$
(d) Solve the system of equations in (c).

$t_{6}=20$
$t_{5}=90$
$t_{4}=10$
$t_{3}=-11+\frac{90}{2}+\frac{20}{2}=44$
$t_{2}=1$
$t_{1}=15-10=5$

2) Before paying employee bonuses and state and federal taxes, a company earns profits of $103,000. The company pays employees a bonus equal to 5% of after-tax profits. State tax is 5% of profits (after bonuses are paid). Finally, federal tax is 40% of profits (after bonuses and state tax are paid). Calculate the amounts paid in bonuses, state tax and federal tax.

$b=0.05(103000-s-f)$
$s=0.05(103000-b)$
$f=0.4(103000-b-s)$

Expand these equations
$b=5150-0.05s-0.05f$
$s=5150-0.05b$
$f=41200-0.4b-0.4s$

Move variables to one side
$b+0.05s+0.05f=5150$
$s+0.05b=5150$
$f+0.4b+0.4s=41200$

Convert to matrix so that there is already a 0 above the 2nd column pivot position
$$
s, f, b, $
$$
$$
\left[\begin{array}{ccc|c}
1 & 0 & 0.05 & 5150 \\
0.4 & 1 & 0.4 & 41200 \\
0.05 & 0.05 & 1 & 5150
\end{array}\right]
$$

Get rid of first column with $R_{2}$ -> $\left( R_{1}-\left( \frac{5}{2} \right)R_{2} \right)$
$$
\left[\begin{array}{ccc|c}
1 & 0 & 0.05 & 5150 \\
0 & -2.5 & -0.95 & -97850 \\
0.05 & 0.05 & 1 & 5150
\end{array}\right]
$$
Divide $R_{2}$ by -2.5
$$
\left[\begin{array}{ccc|c}
1 & 0 & 0.05 & 5150 \\
0 & 1 & 0.38 & 39140 \\
0.05 & 0.05 & 1 & 5150
\end{array}\right]
$$
Then $R_{1}-R_{3}*20\to R_{3}$
$$
\left[\begin{array}{ccc|c}
1 & 0 & 0.05 & 5150 \\
0 & 1 & 0.38 & 39140 \\
0 & -1 & -19.95 & -97850
\end{array}\right]
$$
Second column with $R_{2}+R_{3}\to R_{3}$
$$
\left[\begin{array}{ccc|c}
1 & 0 & 0.05 & 5150 \\
0 & 1 & 0.38 & 39140 \\
0 & 0 & -19.57 & -58710
\end{array}\right]
$$

$-19.57b=-58710$, $b=3000$
$f+0.38b=39140$, $f=39140-1140$,$f=38000$
$s+0.05b=5150$,$s=5150-150$,$=5000$

Company pays $3000 in bonuses, $38000 in federal taxes, and $5000 in state taxes.

3) For each part below, give an example of a linear system of equations in two variables that has the given property. In each case, draw the lines corresponding to the solutions of the equations in the system.
a) has no solution
	$y=6x+2$
	$2y=12x+20$
```desmos-graph
y=6x+2
2y=12x+20
```
b) has exactly one solution
	$y=5x+2$
	$y=8x+1$
```desmos-graph
y=5x+2
y=8x+1
```
c) has infinitely many solutions
	$y=5x+2$
	$3y=15x+6$
```desmos-graph
y=5x+2
3y=15x+6
```
i) Add or remove equations in (b) to make an inconsistent system.
I will add a line to (b) with different solutions to each other line
	$y=5x+2$
	$y=8x+1$
	$y=2x-1$
```desmos-graph
y=5x+2
y=8x+1
y=2x-1
```
ii) Add or remove equations in (b) to create infinitely many solutions.
I will remove one line, making it a single-equation system with infinitely many solutions.
	$y=5x+2$
```desmos-graph
y=5x+2
```
iii) Add or remove equations in (b) so that the solution space remains unchanged.
I will add a line that is pivoted around the solution point by adding equation 1 to equation 2 and treating it as a new equation.
	$y=5x+2$
	$y=8x+1$
	$2y=13x+3$
```desmos-graph
y=5x+2
y=8x+1
2y=13x+3
(0.3333, 3.66666)
```
iv) Can you add or remove equations in (b) to change the unique solution you had to a different unique solution?
No, not without removing all original equations and adding new ones. Because the system in (b) must have one solution, by removing or adding equations we can only either increase the number of solutions to infinity or decrease the number of solutions to zero.

4) Suppose we want to express the point (2, 3) in R2 as the solution space of a system of linear equations.

a) What is the smallest number of equations you would need? Write down such a system.
You would need two equations. The system $y=2x-1$, $y=3x-3$ would work.

b) Can you add one more equation to the system in (a) so that the new system still has the unique solution (2, 3)
Yes, $x=2$ would work as an addition.

c) What is the maximum number of distinct equations you can add to your system in (a) to still maintain the unique solution (2, 3)?
You can add an infinite number of equations and maintain the unique solution.

d) Is there a general term for the equations in (c)?
Yes, $y=m(x-2)+3$ where m is any real number.

6) Say we want to find a polynomial f (x) of degree 3, $f(x)=a_{0}+a_{1}x+a_{2}x^2+a_{3}x^3$ satisfying some interpolation conditions. In each case below, write a system of linear equations whose solutions are (a0, a1, a2, a3). You don’t need to solve the system.

a) We want f (x) to pass through the points (−1, −1), (1, 2), (2, 1) and (3, 5).
$-1=a_{0}-a_{1}+a_{2}-a_{3}$
$2=a_{0}+a_{1}+a_{2}+a_{3}$
$1=a_{0}+2a_{1}+4a_{2}+8x_{3}$
$5=a_{0} +3a_{1}+9a_{2}+81a_{3}$

b) We want f(x) to pass through (1, 0) with derivative +2 and (2, 3) with derivative −1
$f(x)=a_{1}+2a_{2}x+3a_{3}x^2$

$0=a_{0}+a_{1}+a_{2}+a_{3}$
$2=a_{1}+2a_{2}+3a_{3}$
$3=a_{0}+2a_{1}+4a_{2}+8a_{3}$
$-1=a_{1}+4a_{2}+12a_{3}$

c) What if we had more than four points to consider? Fewer?
If we had more than four points to consider, the number of unknowns would remain constant but the number of equations would increase. As long as the points do not break the system, there will still only be one solution. However, if there are fewer than four points, the polynomial curve will be under-fit. Because there are four unknowns, there must be four points to consider for us to solve the system.

d) Suppose we know two points that f (x) passes through and want to find two unknown constants that are in the formula for f (x). Can we still use linear algebra if f (x) is another kind of function such as f(x) = a sin(x) + b cos(x)? f(x) = a sin(bx)? f (x) = $ae^{bx}$?
Linear algebra can be used when the parameters are linear in the context of each other. So we could use linear algebra to solve $f(x)=a\sin{x}+b\cos{x}$  because the parameters are constant in the context of each other, but we could not use linear algebra to solve the other equations because then the parameters are not linear in the context of each other.
