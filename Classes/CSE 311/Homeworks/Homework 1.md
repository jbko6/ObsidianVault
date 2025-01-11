#### Task 1 - Stop, Prop, and Roll

###### a. Define a set of at most three atomic propositions. Then, use them to translate “If the cat is inside the box and the box is closed, then the cat is both alive and dead. But if the cat is outside the box or the box is open, then the cat is either alive or dead but not both.”

$p=\text{The cat is inside the box}$
$q=\text{The box is closed}$
$r=\text{The cat is alive}$

The first statement can be translated to: $(p\land q)\to(r\land \neg r)$
The second statement can be translated to: $(\neg p\lor \neg q)\to(r\oplus \neg r)$

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

$(\neg q\land \neg p)\to s$