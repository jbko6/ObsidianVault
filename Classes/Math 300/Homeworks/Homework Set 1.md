### 1.3 Exercises

#### 1.1

a. If $a$ and $b$ are integers and $a+b=a$, then $b=0$.

| Step                                          | Justification          |
| --------------------------------------------- | ---------------------- |
| Suppose $a$, and $b$ are integers and $a+b=a$ | Hypothesis             |
| $a+0=a$                                       | Substitution of equals |
| $a=a$                                         | Identity               |


b. If $a$, $b$, $c$ and $d$ are integers, then $(a+b)+(c+d)=(a+c)+(b+d)$.

| Step                                                                 | Justification |
| -------------------------------------------------------------------- | ------------- |
| Suppose $a$, $b$, and $c$ are integers and $(a+b)+(c+d)=(a+c)+(b+d)$ | Hypothesis    |
| $(a+b)+(c+d)=a+(c+b)+d$                                              | Associativity |
| $(a+b)+(c+d)=a+(b+c)+d$                                              | Commutativity |
| $(a+b)+(c+d)=(a+b)+(c+d)$                                            | Associativity |

c. If $a$, $b$, and $c$ are integers such that $ac=bc$ and $c\neq 0$, then $a=b$.

| Step                                          | Justification                             |
| --------------------------------------------- | ----------------------------------------- |
| $ac=bc$                                       | Hypothesis                                |
| $ac+(-bc)=bc+(-bc)$                           | Additive inverse & Substitution of equals |
| $ac+(-(bc))=0$                                | Additive inverse                          |
| $c(a+(-b))=0$                                 | Distributive                              |
| Since $c\neq 0$ and $c(a+(-b))=0$, $a+(-b)=0$ | EPI #6                                    |
| $a+(-b)+b=0+b$                                | Additive inverse                          |
| $a=b$                                         | Additive inverse & identity               |

d. *Binomial Expansion*: If $a$ and $b$ are integers, then $(a+b)^2=(a^2+2ab)+b^2=a^2+(2ab+b^2)$
(Note: For any integer $x$, $x^2=x\cdot x$ and $x+x=2x$)

| Step                                    | Justification |
| --------------------------------------- | ------------- |
| $(a+b)^2=(a^2+2ab)+b^2$                 | Hypothesis    |
| $(a+b)(a+b)=(a^2+2ab)+b^2$              | Problem note  |
| $(a+b)(a)+(a+b)(b)=(a^2+2ab)+b^2$       | Distributive  |
| $a(a+b)+b(a+b)=(a^2+2ab)+b^2$           | Commutative   |
| $(a(a)+a(b))+(b(a)+b(b))=(a^2+2ab)+b^2$ | Distributive  |
| $(a(a)+a(b))+(a(b)+b(b))=(a^2+2ab)+b^2$ | Commutative   |
| $(a(a)+2ab)+b(b)=(a^2+2ab)+b^2$         | Problem note  |
| $(a^2+2ab)+b^2=(a^2+2ab)+b^2$           | Problem note  |
| $(a^2+2ab)+b^2=a^2+(2ab+b^2)$           | Associative   |

#### 1.2

a. If $a$ is an integer and $a<-5$, then $|a|>5$.

TRUE. We can treat -5 as the upper bound for $a$. Since this upper bound is negative, the absolute value function will always negate $a$. Therefore the upper bound will always be flipped to lower bound $5$, and therefore is guaranteed to be greater than 5.

b. Suppose $a$ and $b$ are integers. If $b>0$, then $|a-b|<|a|$.

FALSE. If $a<0$, subtraction will increase the absolute value of $a$. For example, $a=-5$ and $b=5$. $|-5-5|=|-10|$. $|-5|>|-10|$.

c. If $a|b$ and $a|c$, then $a|(b+c)$.

TRUE. If both $b$ and $c$ are divisible by $a$, then they must be multiples of $a$. Adding multiples together maintains closure in the set of multiples.

d. If $a|b$, then $a\leq b$

TRUE. Since we're only working with integers here, $b$ must only either be $a$ or a multiple of $a$, both of which are greater than or equal to $a$.

e. If $a$ is an integer, then $2a$ and $3a$ have opposite parity.

FALSE. If $a=2$, $2a=4$ and $3a=6$, which have the same parity.

f. If $a$ is an odd integer, then $2a$ and $3a$ have opposite parity.

TRUE. The definition of an odd integer is $a=2k+1$. By multiplying by 2, $2a=2k+2$, which is now even. However, $3a=3k+3$, which remains odd.