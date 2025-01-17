Start with given facts (hypotheses)
Use rules of inference to extend set of facts
Result is proven when it is included in the set

**Modus Ponens**
If $A$ and $A \to B$ are both true, then $B$ must be true
Written as $\frac{A;A\to B}{\therefore B}$

**Show that $r$ follows from $p$, $p\to q$, and $q\to r$**
1. p (Given)
2. $p\to q$ (Given)
3. $q\to r$ Given
4. $q$ (MP: 1, 2)
5. r (MP: 3, 4)

**Inference rules**
$\frac{A;B}{\therefore C, D}$

Axioms are special inference that we assume to be true

**Other inference rules**
Elimination $\land$
$\frac{A\land B}{\therefore A, B}$
Introduction $\land$
$\frac{A;B}{\therefore A\land B}$
Elimination $\lor$
$\frac{A\lor B;\neg A}{\therefore B}$
Introduction $\lor$
$\frac{A}{\therefore A \lor B, B\lor A}$
Modus pones
$\frac{A;A\to B}{\therefore B}$
Direct proof
$\frac{A\implies B}{\therefore A\to B}$
