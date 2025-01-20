#### 0. Equivalence Proof
Use a chain of equivalences to show that the following proposition is a tautology (i.e. always true).
$$
((p\land q)\lor(p\to(\neg p\land r)))\lor p
$$
$$
\begin{split}
((p\land q)\lor(p\to(\neg p\land r)))\lor p&\equiv((p\land q)\lor(\neg p \lor(\neg p\land r)))\lor p \\
((p\land q)\lor(\neg p \lor(\neg p\land r)))\lor p&\equiv((p\land q)\lor((\neg p\land r)\lor \neg p))\lor p \\
((p\land q)\lor((\neg p\land r)\lor \neg p))\lor p&\equiv(p\land q)\lor(\neg p\land r)\lor (\neg p\lor p) \\
(p\land q)\lor(\neg p\land r)\lor \neg (p\lor p)&\equiv(p\land q)\lor(\neg p\land r)\lor T \\
(p\land q)\lor(\neg p\land r)\lor T&\equiv T
\end{split}
\quad
\begin{split}
\text{Law of Implication} \\
\text{Commutative} \\
\text{Associative x2} \\
\text{Negation} \\
\text{Domination x2}
\end{split}
$$

#### 1. Video Solution

a. What is one thing you took away from the video solution?

I forgot to use commutative property before performing negation. I guess it's really important to be careful about that sort of thing when doing these.
