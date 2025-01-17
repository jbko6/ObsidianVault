### 2.6 Exercises

#### 2.1
Write each of the following in *if-then* form and give its converse and contrapositive.

**a. $n=4k$ implies $n$ is even.**

If $n=4k$, then $n$ is even.

**b. Angela sleeps in only if it is Saturday.**

If Angela sleeps in, then it is Saturday.

**c. $|a|>0$ whenever $a\neq 0$**

If $a\neq 0$, then $|a|>0$.

### 2.1
Give, if possible, an example of a TRUE *if-then* statement for which:

**a. The converse is true**

This is not possible. The converse of an implication always negates its truth value.

**b. The converse is false**

If positive integer $n$ is a prime number, then $n$ is either 2 or odd.
-> becomes: If positive integer $n$ is either 2 or odd, then $n$ is a prime number.

The first implication is true for all positive integers, while the converse is false with $9$, for example.

**c. The contrapositive is true**

Just to repeat the last example,
If positive integer $n$ is a prime number, then $n$ is either 2 or odd.
-> becomes: If positive integer $n$ is neither 2 nor odd, then $n$ is not a prime number.

Both implications are true for all positive integers.

**d. The contrapositive is false**

This is not possible. The contrapositive is equivalent to the original implication and therefore cannot have a different truth value.

#### 2.3
Write useful negations of the following statements in English.

**a. $5|17$ or $3<10$**
$(5\centernot|17)$ $\land$ $\neg(3< 10)$
17 is not divisible by 5 and 3 is not less than 10.

**b. It is raining and Charlie is cold.**
$\neg(\text{Raining})\lor \neg(\text{Charlie is cold})$
It is not raining or Charlie is not cold.

**c. If it is raining, then Charlie is cold.**
$\text{(Raining)}\to \text{(Charlie is cold)}\equiv \neg(\text{Raining})\lor (\text{Charlie is cold})$
$\text{(Raining)}\land \neg(Charlie is cold)$
It is raining and Charlie is not cold.

**d. For every real number $x$ there exists such a real number $y$ such that $x+y=0$**
$\forall x\exists y(x+y=0)$
$\neg(\forall x\exists y(x+y=0))\equiv \exists x\neg(\exists y(x+y=0))\equiv \exists x\forall y(x+y\neq 0)$
There exists a real number $x$ such that for every real number $y$ $x+y\neq 0$

**e. There exists a real number $z$ such that for all real numbers $y$, $xy=0$**
$\exists z\forall y(xy=0)$
$\neg(\exists z\forall y(xy=0))\equiv \forall z\neg(\forall y(xy=0))\equiv \forall z\exists y(xy\neq 0)$
For every real number $z$, there exists a real number $y$ such that $xy\neq 0$

**f. For all pairs $(x,y)$ of real numbers, there is a real number $k$ such that $x^k+y^k=2.$**
$\forall(x,y)\exists k(x^k+y^k=2)$
$\neg(\forall(x,y)\exists k(x^k+y^k=2))\equiv \exists(x,y)\forall k(x^k+y^k\neq 2)$
There exists a pair $(x,y)$ of real numbers such that for all real numbers $k$ $x^k+y^k\neq 2$.

**g. For every integer $a$, $|a|\geq0$**
$\forall a(|a|\geq 0)$
$\neg(\forall a(|a|\geq 0))\equiv(\exists a(|a|<0))$
There exists an integer $a$ such that $|a|<0$.

**h. There exists an integer $a$ such that $a^2-1<2$**
$\exists a(a^2-1<2)$
$\neg(\exists a(a^2-1<2))\equiv \forall a(a^2-1\geq 2)$
For all integers $a$, $a^2-1\geq 2$.

**i. For every integer $a$, there exists an integer $b$ such that $a<b$**
$\forall a\exists b(a<b)$
$\neg(\forall a\exists b(a<b))\equiv \exists a\forall b(a\geq b)$
There exists an integer $a$ such that, for every integer $b$, $a\geq b$.

**j. For all real $x$, if $x\neq0$, then $x^2>0$**
$\forall x((x\neq 0)\to x^2>0)$
$\exists x\neg((x\neq 0)\to x^2>0)\equiv \exists x((x\neq0)\land(x^2\leq0))$
There exists a real $x\neq 0$ such that $x^2\leq0$.

**k. For every $M>0$, there is an $N>0$ such that, for every $n>N$, $n^2+1>M$**
$\forall M\exists N\forall n(((M>0)\land(N>0)\land (n>N))\to(n^2+1>M))$
$\exists M\forall N\exists n(((M>0)\land(N > 0) \land (n > N))\land(n^2+1\leq M))$
There exists an $M>0$ such that for all $N>0$ there exists an $n>N$ such that $n^2+1\leq M$

**l. For all integers $a$ and $b$, if $a$ and $b$ are odd, then $4|(a-b)$ or $4|(a+b)$.**
$\forall a\forall b(((a-1)|2\land(b-1)|2)\to(4|(a-b)\lor 4|(a+b)))$
$\exists a\exists b(((a-1)|2\lor(b-1|2))\to(4\centernot|(a-b)\land(4\centernot|(a+b))))$
There exist odd integers $a$ and $b$ such that $(a+b)$ and $(a-b)$ are both not divisible by $4$.

**m. $|a|>0$ if and only if $a\neq 0$.**
$|a|>0\leftrightarrow a\neq 0$
$(|a|\leq 0\land a\neq 0)\lor(|a|>0\land a=0)$
$|a|\leq 0$ and $a\neq 0$ or $|a| >0$ and $a=0$.

#### 2.4
Write useful contrapositives of the following sentences. Express the contrapositives as sentences, not as symbolic expressions. Reword, if necessary, to clarify the meaning of the contrapositive.

**a. If you earned at least 90% in my class, then you got an A.**
If you don't get an A, then you didn't earn at least 90% in my class.

**b. If $x$ and $y$ are integers, then $x+y$ is an integer.**
If $x+y$ isn't an integer, then $x$ and $y$ are not integers.

**c. If it is raining or snowing tomorrow, then I will go for a walk, but I will not ride my bike.**
If I will ride my bike or not go for a walk, then it is not raining nor snowing tomorrow.
