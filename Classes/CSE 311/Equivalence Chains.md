To show $A$ is [[Equivalence]] to $B$
	Apply a series of logical equivalences to sub-expressions to convert $A$ to $B$

Example:
	Let $A$ be "$p\lor(p\land p)$" and $B$ be $p$.
	Our general equivalence proof looks like:
		$p\lor(p\land p)=p\lor p=p$
Another example:
	$\neg p\lor(p\lor p)=\neg p\lor p=p\lor \neg p=T$
Uses our axioms to get to a truth

Longer example:
$$
\begin{align}
p\land(p\to r)&\equiv p\land(\neg p\lor r) \text{ Law of implication} \\
&\equiv (p\land \neg p)\lor(p\land r) \text{ Distributivity} \\
&\equiv F \land(p\land r) \text{ Negation} \\
&\equiv (p \land r) \lor F \text{Commutative} \\
&\equiv p\lor F \text{ Identity} \\
&\equiv p
\end{align}
$$
