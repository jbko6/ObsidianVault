	Make new statements from old statements

Logical symbols
1. Negation: $P$ (statement) $\to$ not $P$ ($\neg P$)
	- $P:2+3=5$ (T)
	- $\neg P:$ it is not true that $2+3=5$ (F)
	- $Q:17\text{ is even}$ (F)
	- $\neg Q:$ it is not true that 17 is even, "17 is odd" (T)
	**Truth table:**

| $P$ | $\neg P$ |
| --- | -------- |
| T   | F        |
| F   | T        |
	Negation is not the same as the "exact opposite"
	"It is raining every day" -> It is not raining every day -> there exists at least one day where it is not raining

1. And (conjunction)

| $P$ | $Q$ | $P\land Q$ |
| --- | --- | ---------- |
| T   | T   | T          |
| T   | F   | F          |
| F   | T   | F          |
| F   | F   | F          |

3. Or (disjunction)

| $P$ | $Q$ | $P\lor Q$ |
| --- | --- | --------- |
| T   | T   | T         |
| T   | F   | T         |
| F   | T   | T         |
| F   | F   | F         |

4. Exclusive Or

| $P$ | $Q$ | $P\oplus Q$ |
| --- | --- | ----------- |
| T   | T   | F           |
| T   | F   | T           |
| F   | T   | T           |
| F   | F   | F           |
$(P\land \neg Q)\lor(\neg P\land Q)$

5. Implication
Conditional statement, if-then

| $P$ | $Q$ | $P\to Q$ |
| --- | --- | -------- |
| T   | T   | T        |
| T   | F   | F        |
| F   | T   | T        |
| F   | F   | T        |
Implications are used in proofs
	If the originating axiom or theorem is true, then each individual implication must show that each step is true, leading to a chain that proves our claim
