We will use $p,r,q, s$

We will use the truth variables $T$ for true and $F$ for false
These are booleans and we will also use boolean operators with these
Negation (not)
	$\neg p$
Conjunction (and)
	$p\land q$
Disjunction (or)
	$p\lor q$
Exclusive or
	$p\oplus q$
What is exclusive or?
	$p\lor q$ at least one of $p$ or $q$
	$p\oplus q$ exactly one of $p$ or $q$
Logical connectors
	[[Implication]]
		$p\implies r$
	[[Biconditional]]
		$p\iff r$

All expressions can be formed with $\neg$, $\land$, or $\lor$.

#### Properties of Logical Operators

Commutative
- $p\lor q\equiv q\lor p$
- $p\land q \equiv q\land p$ 
Associative
- $(p\lor q)\land r\equiv p\land(q\land r)$
- $(p\lor q)\lor r\equiv p\lor(q\lor r)$
Distributive
- $p\land(q\lor r)\equiv(p\land q)\lor(p\land r)$
- $p\lor(q\land r)\equiv(p\lor q)\land(p\lor r)$
	Note that while in arithmetic multiplication is distributive but addition is not, in logic both and and or are distributive
Identity
- $x\lor F\equiv x$
- $x\land T\equiv x$
Domination
- $x\land F\equiv F$
- $x\lor T\equiv T$
Idempotent
- $p\lor p\equiv p$
- $p\land p\equiv p$
Absorption
- $p\lor(p\land q)\equiv p$
- $p\land(p\lor q)\equiv p$
Negation
- $p\lor \neg p\equiv T$
- $p\land \neg p\equiv F$
