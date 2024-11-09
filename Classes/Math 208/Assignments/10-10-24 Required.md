#### Conceptual Problems ch. 1
7. 
   (a) *Use Gauss-Jordan elimination to find the general solution for the following system of linear equations:*
   $$
\begin{align}
z_{2}+3z_{3}-z_{4}=0 \\
-z_{1}-z_{2}-z_{3}+z_{4}=0 \\
-2z_{1}-4z_{2}+4z_{3}-2z_{4}=0
\end{align}
$$
Convert to matrix.
$$
\left[\begin{array}{cccc|c}
0 & 1 & 3 & -1 & 0 \\
-1 & -1 & -1 & 1 & 0 \\
-2 & -4 & 4 & -2 & 0
\end{array}\right]
$$
$R_{1}\leftrightarrow R_{2}$
$$
\left[\begin{array}{cccc|c}
-1 & -1 & -1 & 1 & 0 \\
0 & 1 & 3 & -1 & 0 \\
-2 & -4 & 4 & -2 & 0
\end{array}\right]
$$
$R_{3}-2R_{1}\to R_{3}$
$$
\left[\begin{array}{cccc|c}
-1 & -1 & -1 & 1 & 0 \\
0 & 1 & 3 & -1 & 0 \\
0 & -2 & 6 & -4 & 0
\end{array}\right]
$$
$2R_{2}+R_{3}\to R_{3}$
$$
\left[\begin{array}{cccc|c}
-1 & -1 & -1 & 1 & 0 \\
0 & 1 & 3 & -1 & 0 \\
0 & 0 & 12 & -6 & 0
\end{array}\right]
$$
$-R_{1}\to R_{1}$
$$
\left[\begin{array}{cccc|c}
1 & 1 & 1 & -1 & 0 \\
0 & 1 & 3 & -1 & 0 \\
0 & 0 & 12 & -6 & 0
\end{array}\right]
$$
$$
\begin{align}
z_{4}=s \\
12z_{3}-6z_{4}=0, 12z_{3}=6s, z_{3}=\frac{s}{2} \\
z_{2}+3z_{3}-z_{4}=0, z_{2}=-3z_{3}+z_{4}, z_{2}=-\frac{s}{2} \\
z_{1}=-z_{2}-z_{3}+z_{4}, z_{1}=s
\end{align}
$$

(b) *Give an example of a non-zero solution to the previous system of linear equations.*

I'll set $s=1$.
$$
\begin{align}
z_{4}=1 \\
z_{3}=\frac{1}{2} \\
z_{2}=-\frac{1}{2} \\
z_{1}=1
\end{align}
$$

(c) *The points (1, 0, 3), (1, 1, 1), and (−2, −1, 2) lie on a unique plane $a_{1}x_{1}+a_{2}x_{2}+a_{3}x_{3}=b$ Using your previous answers, find an equation for this plane.*

We'll convert these points to a linear system.
$$
\begin{align}
1x_{1}+0x_{2}+3x_{3}=b_{1} \\
1x_{1}+1x_{2}+1x_{3}=b_{2} \\
-2x_{1}-1x_{2}+2x_{3}=b_{3}
\end{align}
$$
Convert this to a augmented matrix of same size as previous one.
$$
\left[\begin{array}{cccc|c}
1 & 0 & 3 & -1 & 0 \\
1 & 1 & 1 & -1 & 0 \\
-2 & -1 & 2 & -1 & 0
\end{array}\right]
$$
$-R_{2}\to R_{2}$
$C_{1}\leftrightarrow C_{2}$ should be valid because of addition's communicative property 
$$
\left[\begin{array}{cccc|c}
0 & 1 & 3 & -1 & 0 \\
-1 & -1 & -1 & 1 & 0 \\
-1 & -2 & 2 & -1 & 0
\end{array}\right]
$$
$2R_{3}\to R_{3}$
$$
\left[\begin{array}{cccc|c}
0 & 1 & 3 & -1 & 0 \\
-1 & -1 & -1 & 1 & 0 \\
-2 & -4 & 4 & -2 & 0
\end{array}\right]
$$
This is the same matrix as the one solved earlier.
So the solution is $-\frac{1}{2}x_{1}+x_{2}+\frac{1}{2}x_{3}=1$ when $s=1$

8. Consider the linear system
$$
\begin{align}
2x_{1}+3x_{2}-5x_{3}=b_{1} \\
7x_{1}+2x_{2}+8x_{3}=b_{2} \\
-x_{1}+x_{2}-5x_{3}=b_{3}
\end{align}
$$

(a) *Find the echelon form of the augmented matrix of the above system.*

Convert to matrix.
$$
\left[\begin{array}{ccc|c}
2 & 3 & -5 & b_{1} \\
7 & 2 & 8 & b_{2} \\
-1 & 1 & -5 & b_{3}
\end{array}\right]
$$
$R_{1}\leftrightarrow R_{3}$
$-R_{1}\to R_{1}$
$$
\left[\begin{array}{ccc|c}
1 & -1 & 5 & -b_{3} \\
7 & 2 & 8 & b_{2} \\
2 & 3 & -5 & b_{1}
\end{array}\right]
$$
$R_{2}-7R_{1}\to R_{2}$
$R_{3}-2R_{1}\to R_{3}$
$$
\left[\begin{array}{ccc|c}
1 & -1 & 5 & -b_{3} \\
0 & 9 & -27 & b_{2}+7b_{3} \\
0 & 5 & -15 & b_{1}+2b_{3}
\end{array}\right]
$$
$R_{3}-\frac{5}{9}R_{2}\to R_{3}$
$$
\left[\begin{array}{ccc|c}
1 & -1 & 5 & -b_{3} \\
0 & 9 & -27 & b_{2}+7b_{3} \\
0 & 0 & 0 &b_{1}+2b_{3}-\frac{5}{9}(b_{2}+7b_{3})
\end{array}\right]
$$


(b) *Find the conditions on b1, b2, b3 for which this system has a solution.*
	
$b_{1}+2b_{3}-\frac{5}{9}(b_{2}+7b_{3})$ must be equal to 0 or else the system will be inconsistent and have no solution as seen in row 3. 

(c) *Do you see the shape of the points (b1, b2, b3) for which the above system has a solution?*

Because there are two free variables, the solution set is a plane.

(d) *If you randomly picked a (b1, b2, b3) in R3, do you expect the above system to have a solution?*

No, because the solution is a two dimensional shape whereas R3 is three dimensional space.

#### Conceptual Problems Ch. 2
1. 
   (a) *Last week, Jake spent 10 hours working from home, 15 hours working in his office in Padelford Hall, and 2 hours working at Cafe Allegro. Compute what was accomplished, and express the result as a vector equation.*
   
Four variables, research time ($t_{r}$), teaching time ($t_{t})$, internet time ($t_{i})$, and cups of coffee ($c$). We'll just disregard the internet variable because we can compute it from the leftover time and it's not used in future problems.
$$
\begin{align}
x_{1}\begin{pmatrix}
\frac{2}{3} \\
\frac{1}{6} \\
\frac{1}{2}
\end{pmatrix} +x_{2}\begin{pmatrix}
\frac{1}{3} \\
\frac{1}{2} \\
0
\end{pmatrix} + x_{3}\begin{pmatrix}
\frac{5}{12} \\
\frac{5}{12} \\
1
\end{pmatrix} = \begin{pmatrix}
t_{r} \\
t_{t} \\
c
\end{pmatrix}
\end{align}
$$
Plug in the values $x_{1}=10$, $x_{2}=15$, $x_{3}=2$.
$$
\begin{align}
\begin{pmatrix}
\frac{20}{3}\\
\frac{5}{3} \\
5
\end{pmatrix} + \begin{pmatrix}
5 \\
\frac{15}{2} \\
0
\end{pmatrix} + \begin{pmatrix}
\frac{5}{6} \\
\frac{5}{6} \\
2
\end{pmatrix}= \begin{pmatrix}
t_{r} \\
t_{t} \\
c
\end{pmatrix}
\end{align}
$$
Crunch the numbers.
$$
\begin{align}
\begin{pmatrix}
\frac{25}{2} \\
10 \\
7
\end{pmatrix} = \begin{pmatrix}
t_{r} \\
t_{t} \\
c
\end{pmatrix}
\end{align}
$$
So, Jake got done 12.5 hours of research, 10 hours of teaching, and drank 7 cups of coffee.

(b) *This week, Jake has 15 hours of research to work on and 10 hours of work related to teaching. He also wants 11 cups of coffee, because... of... very important reasons. How much time should he spend working from home, from his office, and from the coffee shop?* 

We can put the vector equation from earlier into a matrix.
$$
\left[\begin{array}{ccc|c}
\frac{2}{3}& \frac{1}{3} & \frac{5}{12} & 15 \\
\frac{1}{6} & \frac{1}{2} & \frac{5}{12} & 10 \\
\frac{1}{2} & 0 & 1 & 11
\end{array}\right]
$$
Get rid of the fractions ASAP
$$
\left[\begin{array}{ccc|c}
8 & 4 & 5 & 180 \\
2 & 6 & 5 & 120 \\
1 & 0 & 2 & 22
\end{array}\right]
$$
$R_{1}\leftrightarrow R_{3}$
$$
\left[\begin{array}{ccc|c}
1 & 0 & 2 & 22 \\
2 & 6 & 5 & 120 \\
8 & 4 & 5 & 180
\end{array}\right]
$$
$R_{2}-2R_{1}\to R_{2}$
$R_{3}-8R_{1}\to R_{3}$
$$
\left[\begin{array}{ccc|c}
1 & 0 & 2 & 22 \\
0 & 6 & 1 & 76 \\
0 & 4 & -11 & 4
\end{array}\right]
$$
$R_{3}-\frac{4}{6}R_{2}\to R_{3}$
$$
\left[\begin{array}{ccc|c}
1 & 0 & 2 & 22 \\
0 & 6 & 1 & 76 \\
0 & 0 & -\frac{35}{3} & -\frac{140}{3}
\end{array}\right]
$$
$-3R_{3}\to R_{3}$
$$
\left[\begin{array}{ccc|c}
1 & 0 & 2 & 22 \\
0 & 6 & 1 & 76 \\
0 & 0 & 35 & 140
\end{array}\right]
$$
Solve
$$
\begin{align}
35x_{3}=140, x_{3}=4 \\
6x_{2}+x_{3}=76, 6x_{2}=72, x_{2}=12 \\
x_{1}+2x_{3}=22, x_{1}=14
\end{align}
$$
So Jake should spend 14 hours working at home, 12 hours working at the math department, and 4 hours working from the coffee shop.

(c) *Describe the situation in part (b) as a vector equation and a matrix equation At = w. What do the vectors t and w mean in this context? For which other vectors w does the equation At = w have a solution?*

We had a vector equation from earlier:
$$
\begin{align}
x_{1}\begin{pmatrix}
\frac{2}{3} \\
\frac{1}{6} \\
\frac{1}{2}
\end{pmatrix} +x_{2}\begin{pmatrix}
\frac{1}{3} \\
\frac{1}{2} \\
0
\end{pmatrix} + x_{3}\begin{pmatrix}
\frac{5}{12} \\
\frac{5}{12} \\
1
\end{pmatrix} = \begin{pmatrix}
15 \\
10 \\
11
\end{pmatrix}
\end{align}
$$
We can represent this as the matrix equation:
$$
\begin{align}
\left[\begin{array}{ccc}
\frac{2}{3}& \frac{1}{3} & \frac{5}{12} \\
\frac{1}{6} & \frac{1}{2} & \frac{5}{12} \\
\frac{1}{2} & 0 & 1
\end{array}\right]\begin{bmatrix}
x_{1} \\
x_{2} \\
x_{3}
\end{bmatrix}=
\begin{bmatrix}
10 \\
15 \\
11
\end{bmatrix}
\end{align}
$$
Where $t=\begin{bmatrix}x_{1}\\x_{2}\\x_{3}\end{bmatrix}$ are the hours spent at each location and $w=\begin{bmatrix}10\\15\\11\end{bmatrix}$ are the hours of work that need to be done.
We will need to find the span of the $A$ component to identify the other vectors $w$ the equation has a solution for.
We'll set up an augmented matrix to find the span.
$$
\left[\begin{array}{ccc|c}
\frac{2}{3}& \frac{1}{3} & \frac{5}{12} & x \\
\frac{1}{6} & \frac{1}{2} & \frac{5}{12} & y \\
\frac{1}{2} & 0 & 1 & z
\end{array}\right]
$$
We'll get rid of the fractions for ease.
$$
\left[\begin{array}{ccc|c}
8 & 4 & 5 & x \\
2 & 6 & 5 & y \\
1 & 0 & 2 & z
\end{array}\right]
$$
Now we'll try and get the matrix in echelon form.
$R_{1}-4R_{2}\to R_{2}$
$R_{1}-8R_{3}\to R_{3}$
$$
\left[\begin{array}{ccc|c}
8 & 4 & 5 & x \\
0 & -20 & -15 & y-4x \\
0 & 4 & -11 & z-8x
\end{array}\right]
$$
Clear out the second column.
$R_{2}+5R_{3}\to R_{3}$
$$
\left[\begin{array}{ccc|c}
8 & 4 & 5 & x \\
0 & -20 & -15 & y-4x \\
0 & 0 & -70 & y+5z-44x
\end{array}\right]
$$
Since any value of of x, y, or z works with all real numbers, we find that any vector $w$ works in three dimensional space.

(d) *Jake tries working in the math department lounge for an hour, and gets 30 minutes of research and 20 minutes of teaching work done, while having time to drink $\frac{1}{3}$ of a cup of coffee. Not bad. But Jake’s colleague Vasu claims that there’s no need to work in the lounge – the other options already give enough flexibility. Is he right? Explain mathematically.*

Yes, he is right. Because the three vectors provided earlier already provide span for any real vector in three dimensional space, there's no need to add an additional vector. 

3. *Find all values $z_{1}$ and $z_{2}$ such that (2, −1, 3), (1, 2, 2), and (−4, $z_{1}$, $z_{2}$) do not span $\mathbb{R}^3$.*

First we'll convert to a matrix.
$$
\left[\begin{array}{ccc|c}
2 & 1 & -4 & 0 \\
-1 & 2 & z_{1} & 0 \\
3 & 2 & z_{2} & 0
\end{array}\right]
$$
The vectors will not span $\mathbb{R}^3$ when their determinant is 0 so we just need to find when that happens.

$\det=2(2z_{2}-2z_{1})-(-z_{2}-3z_{1})-4(-2-6)=0$
$4z_{2}-4z_{1}+z_{2}+3z_{1}+32=0$
$5z_{2}-z_{1}=-32$
$$
\begin{align}
z_{1}=5z_{2}+32 \\
z_{2}=\frac{1}{5}z_{1}-\frac{32}{5}
\end{align}
$$
4. 
   *(a) The set* 
   $$
   \begin{align}
P=\left\{\begin{bmatrix}
x_{1} \\
x_{2} \\
x_{3}
\end{bmatrix}:2x_{1}-x_{2}+4x_{3}=0\right\}
\end{align}
$$
*is a plane in $\mathbb{R}^3$. Find two vectors, $u_{1}, u_{2}\in \mathbb{R}^3$ so that $span\{u_{1},u_{2}\}=P$. Explain your answer*
	
To find vectors that have the span P, we need to find vectors that are perpendicular to the normal vector of the plane. The normal vector for this plane is $\begin{pmatrix}2\\-1\\4\end{pmatrix}$ found by its equation. To find vectors perpendicular to the normal vector, we must find vectors that have a dot product of 0 with the normal vector.
Finding the vectors:
$$
\begin{align}
u_{1}=\begin{pmatrix}
u_{1.x} \\
u_{1.y} \\
u_{1.z}
\end{pmatrix} \\
(2u_{1.x}-1u_{1.y}+4u_{1.z})=0 \\
u_{1.x}=2,u_{1.y}=4,u_{1.z}=0 \\
u_{1}=\begin{pmatrix}
2 \\
4 \\
0
\end{pmatrix}
\end{align}
$$
$$
\begin{align}
u_{2}=\begin{pmatrix}
u_{2.x} \\
u_{2.y} \\
u_{2.z} \\
\end{pmatrix} \\
(2u_{2.x}-1u_{2.y}+4u_{2.z})=0 \\
u_{2.x}=1,u_{2.y}=6,u_{2.z}=1 \\
u_{2}=\begin{pmatrix}
1 \\
6 \\
1
\end{pmatrix}
\end{align}
$$
Thus the two vectors $u_{1}$ and $u_{2}$ have the span P.

*(b) Consider the three vectors $u_{1}=\begin{bmatrix}2\\7\\-1\end{bmatrix},u_{2}=\begin{bmatrix}3\\2\\1\end{bmatrix},u_{3}=\begin{bmatrix}-5\\8\\-5\end{bmatrix}$. Let $b=\begin{bmatrix}b_{1}\\b_{2}\\b_{3}\end{bmatrix}$ be an arbitrary vector in $\mathbb{R}^3$. Use Gaussian elimination to determine which vectors b are in $span\{u_{1},u_{2},u_{3}\}$. Without further calculation, conclude that $span\{u_{1},u_{2},u_{3}\}$ is a plane in $\mathbb{R}^3$ and identify an equation of the plane in the form $ax_{1}+bx_{2}+cx_{3}=0$.*

Transform to matrix
$$
\left[\begin{array}{ccc|c}
2 & 3 & -5 & b_{1} \\
7 & 2 & 8 & b_{2} \\
-1 & 1 & -5 & b_{3}
\end{array}\right]
$$
$2R_{2}-7R_{1}\to R_{2}$
$$
\left[\begin{array}{ccc|c}
2 & 3 & -5 & b_{1} \\
0 & -17 & 51 & 2b_{2}-7b_{1} \\
-1 & 1 & -5 & b_{3}
\end{array}\right]
$$
$2R_{3}+R_{1}\to R_{3}$
$$
\left[\begin{array}{ccc|c}
2 & 3 & -5 & b_{1} \\
0 & -17 & 51 & 2b_{2}-7b_{1} \\
0 & 5 & -15 & 2b_{3}+b_{1}
\end{array}\right]
$$
$-\frac{1}{17}R_{2}\to R_{2}$
$$
\left[\begin{array}{ccc|c}
2 & 3 & -5 & b_{1} \\
0 & 1 & -3 & \frac{7b_{1}-2b_{2}}{17} \\
0 & 5 & -15 & 2b_{3}+b_{1}
\end{array}\right]
$$
$R_{3}-5R_{2}\to R_{2}$
$$
\left[\begin{array}{ccc|c}
2 & 3 & -5 & b_{1} \\
0 & 1 & -3 & \frac{7b_{1}-2b_{2}}{17} \\
0 & 0 & 0 & 2b_{3}+b_{1}-5\left(\frac{7b_{1}-2b_{2}}{17}\right)
\end{array}\right]
$$
Because there is no pivot in the third column, and thus there is a free variable, the variables and dependent and the shape of the span is reduced to a plane. There will be a solution to the system when $2b_{3}+b_{1}-5\left(\frac{7b_{1}-2b_{2}}{17}\right)=0$. To find the equation for this plane, we will set $b_{1}=x_{1},b_{2}=x_{2},b_{3}=x_{3}$ and simplify this equation down to the form $ax_{1}+bx_{2}+cx_{3}=0$.

$0=2b_{3}+b_{1}-5\left(\frac{7b_{1}-2b_{2}}{17}\right)$
$0=2b_{3}+b_{1}-\frac{35b_{1}-10b_{2}}{17}$
Simplifying this expression gives
$$
\begin{align}
-\frac{18}{17}b_{1}+\frac{10}{17}b_{2}+2b_{3}=0
\end{align}
$$
which is an equation for the span plane.

#### Holt 2.1
5. Compute $-u+v+w$ and $2u-v+3w$.
$-u+v+w=\begin{bmatrix}-5\\-4\\4\end{bmatrix}$
$2u-v+3w=\begin{bmatrix}16\\-26\\-8\end{bmatrix}$

9. Express the vector equation as a system of linear equations.
   $x_{1}\begin{bmatrix}-6\\5\end{bmatrix}+x_{2}\begin{bmatrix}5\\-3\end{bmatrix}+x_{3}\begin{bmatrix}0\\2\end{bmatrix}=\begin{bmatrix}4\\16\end{bmatrix}$

$$
\begin{align}
-6x_{1}+5x_{2}=4 \\
5x_{1}-3x_{2}+2x_{3}=16
\end{align}
$$

19. The general solution to a linear system is given. Express this solution as a linear combination of vectors.
    $x_{1}=4+6s_{1}-5s_{2}$
    $x_{2}=s_{2}$
    $x_{3}=-9+3s_{1}$
    $x_{4}=s_{1}$

$$
\begin{bmatrix}
4 \\
0 \\
-9 \\
0
\end{bmatrix} + s_{1}\begin{bmatrix}
6 \\
0 \\
3 \\
1
\end{bmatrix} + s_{2}\begin{bmatrix}
-5 \\
1 \\
0 \\
0
\end{bmatrix} =\begin{bmatrix}
x_{1} \\
x_{2} \\
x_{3} \\
x_{4}
\end{bmatrix}
$$

21. Find three different vectors that are a linear combination of the given vectors.
    $u=\begin{bmatrix}3\\-2\end{bmatrix},v=\begin{bmatrix}-1\\-4\end{bmatrix}$

$u+v=\begin{bmatrix}2\\-6\end{bmatrix}$
$u-v=\begin{bmatrix}4\\2\end{bmatrix}$
$2u+v=\begin{bmatrix}5\\-8\end{bmatrix}$

31. Determine if b is a linear combination of the other vectors. If so, express b as a linear combination.
    $a_{1}=\begin{bmatrix}-2\\5\end{bmatrix},a_{2}=\begin{bmatrix}7\\-3\end{bmatrix},b=\begin{bmatrix}8\\9\end{bmatrix}$

$$
\left[\begin{array}{cc|c}
-2 & 7 & 8 \\
5 & -3 & 9
\end{array}\right]
$$
$5R_{1}+2R_{2}\to R_{2}$
$$
\left[\begin{array}{cc|c}
-2 & 7 & 8 \\
0 & 29 & 58
\end{array}\right]
$$
$\frac{1}{29}R_{2}\to R_{2}$
$$
\left[\begin{array}{cc|c}
-2 & 7 & 8 \\
0 & 1 & 2
\end{array}\right]
$$
$2C_{2}\to C_{2}$
$$
\left[\begin{array}{cc|c}
-2 & 14 & 8 \\
0 & 2 & 2
\end{array}\right]
$$
$3C_{1}\to C_{1}$
$$
\left[\begin{array}{cc|c}
-6 & 14 & 8 \\
0 & 2 & 2
\end{array}\right]
$$
Therefore $b$ is a linear combination of $a_{1}$ and $a_{2}$ and $3a_{1}+2a_{2}=b$.

#### Holt 2.2
11. Determine if b is in the span of the other given vectors. If so, express b as a linear combination of the other vectors.
    $a_{1}=\begin{bmatrix}-1\\4\\-3\end{bmatrix},a_{2}=\begin{bmatrix}2\\8\\-7\end{bmatrix},b=\begin{bmatrix}-10\\-8\\7\end{bmatrix}$

Create a matrix to find the span of the vectors
$$
\left[\begin{array}{cc|c}
-1 & 2 & a \\
4 & 8 & b \\
-3 & -7 & c
\end{array}\right]
$$
$4R_{1}+R_{2}\to R_{2}$
$$
\left[\begin{array}{cc|c}
-1 & 2 & a \\
0 & 16 & b+4a \\
-3 & -7 & c
\end{array}\right]
$$
$-3R_{1}+R_{3}\to R_{3}$
$$
\left[\begin{array}{cc|c}
-1 & 2 & a \\
0 & 16 & b+4a \\
0 & -13 & c-3a
\end{array}\right]
$$
$13R_{2}-16R_{3}\to R_{3}$
$$
\left[\begin{array}{cc|c}
-1 & 2 & a \\
0 & 16 & b+4a \\
0 & 0 & 13b+100a-16c
\end{array}\right]
$$
When $100a+13b-16c=0$ the third vector is in the span of the other two vectors.
We plug in the values of $b$ and find that $100(-10)+13(-8)-16(7)=-1216$ therefore $b$ is not in the span of the other two vectors. 

23. Determine if the columns of $A$ span $\mathbb{R}^2$
    $A=\begin{bmatrix}2&1&0\\6&-3&-1\end{bmatrix}$

We will try and get the matrix into echelon form.
$$
\left[\begin{array}{ccc|c}
2 & 1 & 0 & 0 \\
6 & -3 & -1 & 0
\end{array}\right]
$$
$3R_{1}-R_{2}\to R_{2}$
$$
\left[\begin{array}{ccc|c}
2 & 1 & 0 & 0 \\
0 & -10 & -3 & 0
\end{array}\right]
$$
Because there are two pivots, these three vectors will span $\mathbb{R}^2$.

29. A matrix A is given. Determine if the system Ax = b (where x and b have the appropriate number of components) has a solution for all choices of b.
    $A=\begin{bmatrix}3&-4\\4&2\end{bmatrix}$

We need to check if the matrix spans all $\mathbb{R}^2$. For that we will find the determinant. 
$\det=3(2)-(-4)(4)=22\neq 0$
Because the determinant is not equal to zero, the matrix spans all $\mathbb{R}^2$ and the system will have a solution for all choices of b.

33. Previous problem with:
    $A=\begin{bmatrix}-3&2&1\\1&-1&-1\\5&-4&-3\end{bmatrix}$

We will find the determinant again.
$\det=-3(3-4)-2(-3+5)+(-4+5)$
$\det=-3(-1)-2(2)+(1)=0$
Because the determinant is equal to zero the matrix does not span all $\mathbb{R}^3$ space and there is not a solution for all choices of b.

49. Find all values of h such that the vectors $\{a_{1},a_{2},a_{3}\}$ span $\mathbb{R}^3$, where 
$$
a_{1}=\begin{bmatrix}
2 \\
4 \\
5
\end{bmatrix}, a_{2}=\begin{bmatrix}
h \\
8 \\
10
\end{bmatrix}, a_{3}=\begin{bmatrix}
1 \\
2 \\
6
\end{bmatrix}
$$
We'll first put these into a matrix.
$$
\begin{bmatrix}
2 & h & 1 \\
4 & 8 & 2 \\
5 & 10 & 6
\end{bmatrix}
$$
Next we'll find the determinant of this matrix.
$\det=2(48-20)-h(24-10)+(40-40)$
$\det=56-14h$
We want the determinant to not be equal to zero so we'll set this equal to zero and find when that happens.
$0=56-14h$
$56=14h$
$4=h$
So whenever $h\neq 4$ the matrix will span all $\mathbb{R}^3$.