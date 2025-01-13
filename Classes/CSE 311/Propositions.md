A proposition is a statement that
- is "well-formed"
- is either true or false

Examples:
	Garfield is a mammal and Garfield is a cat
		True
	$2+2=5$
		False
	$x+2=5389$, where $x$ is my PIN number
		Could be true or false, still a proposition
	Akjsdf!
		Not a proposition
	Who are you?
		Not a proposition
	Every position even integer can be written as the sum of two primes
		This a proposition. Don't know if it's true or false

#### Compound propositions
We can combine propositions together to form complex logic

"Garfield has black stripes if he is an orange cat and likes lasagna and he is an orange cat or does not like lasagna"

We'd like to know what this proposition means

First find the simplest (atomic) properties
	$q$ "Garfield has black stripes"
	$r$ "Garfield is an orange cat"
	$s$ "Garfield likes lasagna"
We can notice there is a comma, therefore there are two combined propositions
Translate to *(q if (r and s)) and (r or (not s))*
Now we can replace these with operators
$((r\land s)\rightarrow q)\land(r\lor\neg s)$

Now we can analyze this in a [[Truth Table]]
We expand our statements outward to work on things step by step

| q   | r   | s   | $\neg s$ | $r\lor\neg s$ | $r\land s$ | $(r\land s)\rightarrow q$ | $((r\land s)\rightarrow q)\land(r\lor\neg s)$ |
| --- | --- | --- | -------- | ------------- | ---------- | ------------------------- | --------------------------------------------- |
| F   | F   | F   | T        | T             | F          | T                         | T                                             |
| F   | F   | T   | F        | F             | F          | T                         | F                                             |
| F   | T   | F   | T        | T             | F          | T                         | T                                             |
| F   | T   | T   | F        | T             | T          | F                         | F                                             |
| T   | F   | F   | T        | T             | F          | T                         | T                                             |
| T   | F   | T   | F        | F             | F          | T                         | F                                             |
| T   | T   | F   | T        | T             | F          | T                         | T                                             |
| T   | T   | T   | F        | T             | T          | T                         | T                                             |


**Another example!**

"If I were to ask you out, would your answer to that question be the same as your answer to this one?"

Figure out the variables
$p$ Answer to asked out
$q$ Answer to this question

| p   | q   | $p\iff q$ |
| --- | --- | --------- |
| T   | T   | T         |
| F   | T   | F         |
| T   | F   | F         |
| F   | F   | T         |
Therefore we see this is a bijection

#### Propositional Order of Operators
1. Negation
2. Conjunction, Disjunction
4. Implication, Biconditional
If they are on the same level, then follow associativity
	Conjunctions, disjunctions, & exclusive or follow **left-to-right**
	Implication & biconditional follow **right-to-left**

#### Classes of Propositions
A compound proposition is a
- *Tautology* if it is always true
- *Contradiction* if is is always false
- *Contingency* if it can either be true or false
- 