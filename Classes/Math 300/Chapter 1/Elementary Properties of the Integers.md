A set of [[Axiom]]s that define integers

Supposing $a$, $b$, $c$ and $d$ are integers
- Closure: $a+b$ and $ab$ are integers
- Substitution of equals: If $a=b$, then $a+c=b+c$ and $ac=bc$
- Commutativity: $a+b=b+a$ and $ab=ba$
- Associativity: $(a+b)+c=a+(b+c)$ and $(ab)c=a(bc)$
- The distributive law: $a(b+c)=ab+ac$
- Identities: $a+0=0+a=a$ and $a*1=1*a=a$
	- 0 is called the additive identity
	- 1 is called the multiplicative identity
- Additive inverses: There exists an integer $-a$ such that $a+(-a)=(-a)+a=0$
- Trichotomy: Exactly one of the following is true: $a>0$, $-a>0, a=0$
- The Well-Ordering Principle: Every non-empty set of positive integers contains a smallest element

Some propositions we will draw from these axioms.
1. $a*0=0$
	Proof:

| Step                                    | Justification          |
| --------------------------------------- | ---------------------- |
| a is an integer                         | Hypothesis             |
| $0+0=0$                                 | Identity               |
| $(0+0)*a=(0+0)*a$                       | Substitution of equals |
| $a*(0+0)=0*a$                           | Commutativity          |
| $a*(0+0)=a*0+a*0$                       | Distributive           |
| $0*a=0*a+0*a$                           | Commutativity          |
| There is $-(0*a)$                       | Additive inverses      |
| $(0*a)+(-(0*a))=((0*a)+(0*a))+(-(0*a))$ | Substitution of equals |
| $0=0*a+((0*a)-(0*a))$                   | Identity               |
| $0=0*a+0$                               | Identity               |
| $0=0*a$                                 | Identity               |
| $0=a*0$                                 | Commutative            |

1. If $a+c=b+c$, then $a=b$
2. $-a$
