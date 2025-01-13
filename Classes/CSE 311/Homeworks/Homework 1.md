#### Task 1 - Stop, Prop, and Roll

###### a. Define a set of at most three atomic propositions. Then, use them to translate “If the cat is inside the box and the box is closed, then the cat is both alive and dead. But if the cat is outside the box or the box is open, then the cat is either alive or dead but not both.”

$p=\text{The cat is inside the box}$
$q=\text{The box is closed}$
$r=\text{The cat is alive}$

$((p\land q)\to(r\land \neg r))\land((\neg p\lor \neg q)\to(r\oplus \neg r))$

###### b. Define a set of at most four atomic propositions. Then, use those propositions to translate each of these sentences

$p=\text{The hash table is empty}$
$q=\text{There will be no hash collision}$
$r=\text{The new element can be inserted}$
$s=\text{The hash table is full}$

*i. If the hash table is empty, there will be no hash collision and the new element can be inserted.*

$p\to(q\land r)$

*ii. If the hash table is full, there will be a hash collision and the new element cannot be inserted.*

$s\to(\neg q\land \neg r)$

*iii. If the hash table is neither empty nor full, the new element can be inserted if there will be no
hash collision.*

$(\neg p\lor \neg s)\to(q\to r)$

###### c. Define a set of at most four atomic propositions. Then, use them to translate each of these sentences.

$p=\text{The child is at least eight years old}$
$q=\text{The child is over four feet nine inches tall}$
$r=\text{The child can use the vehicle's safety belt system}$
$s=\text{The child must use a child restraint system}$

*i. If the child is at least eight years old, or over four feet nine inches tall, the child can use the vehicle’s safety belt system*

$(p\lor q)\to r$

*ii. Unless the child is above four feet nine inches tall, the child must use a child restraint system until the age of eight years old*

$\neg( p\lor q)\to s$

<div style="page-break-after: always;"></div>

#### Task 2 - Good to the Last Prop
Consider this sentence: The student’s work is accepted late only if the student has used less than three late days in total or has had a conversation with Kevin.

###### a. Define a set of at most three atomic propositions. Then, use them to translate the above into propositional logic.

$p=\text{The student's work is accepted late}$
$q=\text{The student has used less than three late days}$
$r=\text{The student has had a conversation with Kevin}$

$(q\lor r)\to p$

###### b. Take the contrapositive of the logical sentence from part (a). Then rewrite it so that all $\neg$ symbols are next to atomic propositions.

$\neg p\to \neg(q\lor \neg r)$
$\neg p\to \neg q\land \neg r$

###### c. Translate the sentence from part (b) back to English.

If the student's work is not accepted late, then the student has not used less than three late days and has not had a conversation with Kevin.

###### d. Must your English sentence from part (c) have the same truth value as the original English sentence? Why or why not?

Yes, because the contrapositive of an implication is equivalent to the original implication.

<div style="page-break-after: always;"></div>

#### Task 3 - Give me Some of the Card Stuff
	If the card has a vowel on one side, then it has an even number on the other side.
Which card(s) must be turned over to check if the rule is true?

The "E" card should be flipped over to check if the rule is true. The "3" card is odd and the "K" card is a consonant, and we are given no promise to the content of these cards. They could have even/vowels, but we aren't given a promise of this. The "8" card is even, but it could also have a consonant on the other side according to the statement. Only vowels are guaranteed to be even.

<div style="page-break-after: always;"></div>

#### Task 4 - I've got Friends in High Cases

Solution:

$p=\text{Imp. A is secure}$
$q=\text{Imp. B is secure}$
$r=\text{Imp. C is secure}$

Three propositions:
1. $p\to q$
2. $\neg q$
3. $\neg r\to \neg q$

| p   | q   | r   | $p\to q$ | $\neg q$ | $\neg r\to \neg q$ |
| --- | --- | --- | -------- | -------- | ------------------ |
| T   | T   | T   | T        | F        | T                  |
| T   | T   | F   | T        | F        | F                  |
| T   | F   | T   | F        | T        | T                  |
| T   | F   | F   | F        | T        | T                  |
| F   | T   | T   | T        | F        | T                  |
| F   | T   | F   | T        | F        | F                  |
| F   | F   | T   | T        | T        | T                  |
| F   | F   | F   | T        | T        | T                  |
Implementation C is secure. As seen in the seventh row of the truth table, when only implementation C is secure, all three of the documentation propositions are true.

<div style="page-break-after: always;"></div>

#### Task 5 - The Calm Before the Form

###### a. Write a truth table for $E$. Include columns for $a$, $b$, $c$, $d$, all four disjunctions, and $E$.

| $a$ | $b$ | $c$ | $d$ | $a\lor b$ | $\neg a\lor \neg b$ | $b\lor d$ | $a\lor \neg d$ | $E$ |
| --- | --- | --- | --- | --------- | ------------------- | --------- | -------------- | --- |
| T   | T   | T   | T   | T         | F                   | T         | T              | F   |
| T   | T   | T   | F   | T         | F                   | T         | T              | F   |
| T   | T   | F   | T   | T         | F                   | T         | T              | F   |
| T   | T   | F   | F   | T         | F                   | T         | T              | F   |
| T   | F   | T   | T   | T         | T                   | T         | T              | T   |
| T   | F   | T   | F   | T         | T                   | F         | T              | F   |
| T   | F   | F   | T   | T         | T                   | T         | T              | T   |
| T   | F   | F   | F   | T         | T                   | F         | T              | F   |
| F   | T   | T   | T   | T         | T                   | T         | F              | F   |
| F   | T   | T   | F   | T         | T                   | T         | T              | T   |
| F   | T   | F   | T   | T         | T                   | T         | F              | F   |
| F   | T   | F   | F   | T         | T                   | T         | T              | T   |
| F   | F   | T   | T   | F         | T                   | T         | F              | F   |
| F   | F   | T   | F   | F         | T                   | F         | T              | F   |
| F   | F   | F   | T   | F         | T                   | T         | F              | F   |
| F   | F   | F   | F   | F         | T                   | F         | T              | F   |

###### b. Write the canonical DNF expression for $E$.

Glad this is not CNF.
$$
E=(a\land \neg b\land c\land d)\lor(a\land \neg b\land \neg c\land d)\lor(\neg a\land b\land c\land \neg d)\lor(\neg a\land b\land \neg c\land \neg d)
$$

###### c. Translate your DNF expression into a new Java implementation of $E$.

```java
public static boolean E(boolean a, boolean b, boolean c, boolean d) {
	if (a && !b && c && d) {
		return true;
	}
	if (a && !b && !c && d) {
		return true;
	}
	if (!a && b && c && !d) {
		return true;
	}
	return (!a && b && !c && !d);
}
```

<div style="page-break-after: always;"></div>

#### Task 6 - Let the SAT Out of the Bag

###### a. Write a truth table in the three variables $a_{R}$, $a_{G}$, and $a_{B}$ that shows when exactly one of them is true. 

| $a_{R}$ | $a_{G}$ | $a_{B}$ | $a_{R}\oplus a_{G}\oplus a_{B}$ |
| ------- | ------- | ------- | ------------------------------- |
| T       | T       | T       | F                               |
| T       | T       | F       | F                               |
| T       | F       | T       | F                               |
| T       | F       | F       | T                               |
| F       | T       | T       | F                               |
| F       | T       | F       | T                               |
| F       | F       | T       | T                               |
| F       | F       | F       | F                               |

###### b. Write the canonical CNF formula for the boolean function in the last column.

$$
(\neg a_{R}\lor \neg a_{G}\lor \neg a_{B})\land(\neg a_{R}\lor \neg a_{G}\lor a_{B})\land(\neg a_{R}\lor a_{G}\lor \neg a_{B})\land(a_{R}\lor \neg a_{G}\lor \neg a_{B})\land(a_{R}\lor a_{G}\lor a_{B})
$$

###### c. Write a truth table in the two variables $a_{R}$ and $c_{R}$ that is false only when both are true.

| $a_{R}$ | $c_{R}$ | $\neg(a_{R}\land c_{R})$ |
| ------- | ------- | ------------------------ |
| T       | T       | F                        |
| T       | F       | T                        |
| F       | T       | T                        |
| F       | F       | T                        |

###### d. Write the canonical CNF formula for the boolean algebra function in the last column.

$$
(\neg a_{R}\lor \neg c_{R})
$$

###### e. Write a CNF formula that is true when Alex and Chris do not have the same hat color.

$$
(\neg a_{R}\lor \neg c_{R})\land(\neg a_{G}\lor \neg c_{G})\land(\neg a_{B}\lor \neg c_{B})
$$
###### f. Use the SAT solver.

SAT input:
```text
p cnf 15 46
-1 -2 -3 0
-1 -2 3 0 
-1 2 -3 0
1 -2 -3 0
1 2 3 0
-4 -5 -6 0
-4 -5 6 0 
-4 5 -6 0
4 -5 -6 0
4 5 6 0
-7 -8 -9 0
-7 -8 9 0 
-7 8 -9 0
7 -8 -9 0
7 8 9 0
-10 -11 -12 0
-10 -11 12 0 
-10 11 -12 0
10 -11 -12 0
10 11 12 0
-13 -14 -15 0
-13 -14 15 0 
-13 14 -15 0
13 -14 -15 0
13 14 15 0
-1 -7 0
-2 -8 0
-3 -9 0
-1 -13 0
-2 -14 0
-3 -15 0
-4 -13 0
-5 -14 0
-6 -15 0
-1 -4 0
-2 -5 0
-3 -6 0
-4 -7 0
-5 -8 0
-6 -9 0
-7 -10 0
-8 -11 0
-9 -12 0
-10 -13 0
-11 -14 0
-12 -15 0
```

Output:
``` text
CPU time: 0.003s
SAT -1 -2 3 4 -5 -6 -7 8 -9 10 -11 -12 -13 14 -15
```

This output means Alex should get a blue hat, Bobby should get a red hat, Chris should get a green hat, Dylan should get a red hat, and Erin should get a green hat.

<div style="page-break-after: always;"></div>

#### Task 7 - Extra Credit: XNORing

| $R_{1}$ | $R_{2}$ | $R_{1}:R_{1}\leftrightarrow R_{2}$ | $R_{2}:R_{1}\leftrightarrow R_{2}$ | $R_{1}:R_{1}\leftrightarrow R_{2}$ | $R_{1}$ | $R_{2}$ |
| ------- | ------- | ---------------------------------- | ---------------------------------- | ---------------------------------- | ------- | ------- |
| T       | T       | T                                  | T                                  | T                                  | T       | T       |
| T       | F       | F                                  | T                                  | F                                  | F       | T       |
| F       | T       | F                                  | F                                  | T                                  | T       | F       |
| F       | F       | T                                  | F                                  | F                                  | F       | F       |

The operations required:
1. $R_{1}:=\text{XNOR}(R_{1},R_{2})$
2. $R_{2}:=\text{XNOR}(R_{1},R_{2})$
3. $R_{1}:=\text{XNOR}(R_{1},R_{2})$

