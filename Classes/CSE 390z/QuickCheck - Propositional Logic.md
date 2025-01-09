#### 0. Propositional Logic
Consider the sentence: "I do not eat pizza, or I buy groceries, or if I buy groceries then I eat pizza."

a. Define two atomic propositions. Then use the propositions to translate the sentence into logical notation.

$p=$ I eat pizza
$q=$ I buy groceries

$\neg p\lor q\lor (q\implies p)$

b. Use a truth table to show that the sentence is always true.

| $p$ | $q$ | $\neg p$ | $q\implies p$ | $\neg p\lor q\lor(q\implies p)$ |
| --- | --- | -------- | ------------- | ------------------------------- |
| T   | F   | F        | T             | T                               |
| T   | T   | F        | T             | T                               |
| F   | F   | T        | T             | T                               |
| F   | T   | T        | F             | T                               |
So the sentence is always true.

#### 1. Video Solution

a. What is one thing you took away from the video solution?

I had a slightly different method for my truth table where I just wrote down all the components whereas in the video she wrote out $(\neg p\lor q)$ combined into one column. I think my method was pretty easy to read so I personally wouldn't do that extra step but I can see how with a larger problem that might be useful.

b. What topic from the quick check or lecture would you most like to review in workshop?

I suppose just more translating from English to propositional logic, especially when it is not completely clear how the English sentence is structured (like where commas are missing or where commas seem like they shouldn't be there).