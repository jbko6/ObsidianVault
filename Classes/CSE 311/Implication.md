Implication [[Truth Table]]

| $p$ | $r$ | $p\implies r$ |
| --- | --- | ------------- |
| T   | T   | T             |
| T   | F   | F             |
| F   | T   | T             |
| F   | F   | T             |

With implication, $p$ is called the "premise" and $r$ is called the "conclusion".
The implication is true when $p$ and $r$ are true
The implication is true ("vacuously") when $p$ is false

---

Example:
	"If it was raining, then I had my umbrella"
	It's useful to think of implications as promises - was I wrong?

|                          | It's raining | It's not raining |
| ------------------------ | ------------ | ---------------- |
| I have my umbrella       | T            | T                |
| I don't have my umbrella | F            | T                |
I am only wrong when it is raining AND I don't have my umbrella

---

Example:
"If the seahawks won, then I was at the game"

|               | I was at the game | I wasn't at the game |
| ------------- | ----------------- | -------------------- |
| Seahawks won  | T                 | F                    |
| Seahawks lost | T                 | T                    |

---

Are these true?
$2+2=4\implies$ earth is a planet
	Don't need to be related. $T\implies T$ is true, so this is true

Translating from English
"I have collected all 151 Pokemon if I am a Pokemon master"
	This is an implication in the reverse direction
	Pokemon master $\implies$ I have collected all 151 Pokemon
"I have collected all 151 Pokemon only if I am a Pokemon master"
	All 151 Pokemon $\implies$ I am a Pokemon master
The arrows are a lot more clear

- p implies r
- whenever p is true, r must be true
- if p, then r
- r if p
- p only if r
- p is sufficient for r
- r is necessary for p
All mean $p\implies r$

## Forms of Implications
We can flip the premise and conclusion: $r\rightarrow p$
	This is called the converse
We can form the inverse: $\neg p\rightarrow\neg r$
Then from the inverse we can form the contrapositive: $\neg r\rightarrow\neg p$

*Consider:*
$p:$ 6 is divisible by 2 (True!)
$r:$ 6 is divisible by 4 (False)

| $p\rightarrow r$          | F   |
| ------------------------- | --- |
| $r\rightarrow p$          | T   |
| $\neg r\rightarrow\neg p$ | F   |
| $\neg p\rightarrow\neg r$ | T   |
Notice the implication and contrapositive have the same value

How do these relate?

| p   | r   | $p\rightarrow r$ | $r\rightarrow p$ | $\neg p$ | $\neg r$ | $\neg p\rightarrow\neg r$ | $\neg r\rightarrow\neg p$ |
| --- | --- | ---------------- | ---------------- | -------- | -------- | ------------------------- | ------------------------- |
| T   | T   |                  |                  | F        | F        |                           |                           |
| T   | F   | F                |                  | F        | T        |                           | F                         |
| F   | T   |                  | F                | T        | F        | F                         |                           |
| F   | F   |                  |                  | T        | T        |                           |                           |
Notice the contrapositive always has the same values as the original implication. This is a form of [[Equivalence]]
Notice the implication and its inverse are not equivalent.
	This happens enough it has a name: fallacy of the inverse
