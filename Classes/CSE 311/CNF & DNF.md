A special [[Propositions]] form for [[Satisfiability (SAT)]] solvers
For any expressions there is exactly one canonical CNF form of it.
We can use canonical expressions to check [[Equivalence]]. 
	Just check the expressions directly!
	Since there is only one canonical form possible

| DNF              | CNF               |
| ---------------- | ----------------- |
| Outermost are OR | Outermost are AND |

#### Finding DNF from a truth table
1. Find the T rows in the truth table
2. For each T row, write an expression that is T in that row but no others (min terms)
3. Now we form the disjunction of the min terms

Example:

| a   | b   | c   | F   |
| --- | --- | --- | --- |
| F   | F   | F   | F   |
| F   | F   | T   | T   |
| F   | T   | F   | F   |
| F   | T   | T   | T   |
| T   | F   | F   | F   |
| T   | F   | T   | T   |
| T   | T   | F   | T   |
| T   | T   | T   | T   |

1. The second row
	1. $\neg a\land\neg b\land c$
2. The fourth row
	1.  $\neg a\land b\land c$
3. The sixth row
	1. $a\land\neg b\land c$
4. The seventh row
	1. $a\land b\land\neg c$
5. The eighth row
	1. $a\land b\land c$
6. Now we put them together with a giant OR
$$(\neg a\land\neg b\land c)\lor(\neg a\land b\land c)\lor(a\land\neg b\land c)\lor(a\land b\land\neg c)\lor(a\land b\land c)$$

This is DNF since every outermost operation is an OR.
	Inner operations and conjunctions but that's fine
	**Canonical if every disjunct is a min term**

## CNF from a truth table
1. Find the false rows
2. Find an expression that is true in every row but that one (the max term)
3. Form the conjunction from these max terms

| a   | b   | c   | F   |
| --- | --- | --- | --- |
| F   | F   | F   | F   |
| F   | F   | T   | T   |
| F   | T   | F   | F   |
| F   | T   | T   | T   |
| T   | F   | F   | F   |
| T   | F   | T   | T   |
| T   | T   | F   | T   |
| T   | T   | T   | T   |
1. First row
	1. $a\lor b\lor c$
2. Third row
	1. $a\lor \neg b\lor c$
3. Fifth row
	1. $\neg a \lor b\lor c$
4. Form the conjunction
$$
(a\lor b\lor c)\land(a\lor\neg b\lor c)\land(\neg a\lor b\lor c)
$$
Outermost operations are all OR
