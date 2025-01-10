An application of logic
Analyzing digital circuits is the same as analyzing propositional logic, just with different notation.
In digital circuits, **T corresponds to 1** or high voltage, while **F corresponds to 0** or low voltage.

Gates
- Take input voltage and give an output voltage
- Corresponds to logic gates (OR, AND, NOT)

Wires
- Send data to and from gates
- Can send one value to multiple gates
	- This would otherwise require special logic in propositional logic

Special gates
- NAND $\neg(p\land q)$
- NOR $\neg(p\lor q)$
- XOR $p\oplus q$
- XNOR $p\leftrightarrow q$

##### Example:

**Sections of class:**
We would like to compute the number of lectures or quiz sections remaining a the start of a given day of the week.
- Inputs: Day of the week, lecture/section flag
- Output: Number of sessions left

Examples: 
	Input: (Wednesday, Lecture), Output: 2
	Input: (Monday, Section), Output: 1

First we need to think about encoding our inputs and outputs
	Boolean is already a bit
	We could use binary for the weekday
	Or we could encode it one-to-one, one hot encoding
	(Since there are only 4 possible outputs)
Now we create a truth table

| Weekday   | Lecture | $c_{0}$ | $c_{1}$ | $c_{2}$ | $c_{3}$ |
| --------- | ------- | ------- | ------- | ------- | ------- |
| SUN - 000 | 0       |         | 1       |         |         |
| SUN - 000 | 1       |         |         |         | 1       |
| MON - 001 | 0       |         | 1       |         |         |
| MON - 001 | 1       |         |         |         | 1       |
| TUE - 010 | 0       |         | 1       |         |         |
| TUE - 010 | 1       |         |         | 1       |         |
| WED - 011 | 0       |         | 1       |         |         |
| WED - 011 | 1       |         |         | 1       |         |
| THU - 100 | -       |         | 1       |         |         |
| FRI - 101 | 0       | 1       |         |         |         |
| FRI - 101 | 1       |         | 1       |         |         |
| SAT - 110 | -       | 1       |         |         |         |
Next we create the circuit

We'll start with finding an expression that would give a 1 for $c_{3}$
	We can split the bits of the day up. 
	We find $d_{2}'d_{1}'d_{0}'L$ for the second row and $d_{2}'d_{1}'d_{0}L$ for the fourth row
	We add this -> $c_{3}=d_{2}'d_{1}'d_{0}'L+d_{2}'d_{1}'d_{0}L$
Continue this for each of our outputs
	$c_{2}=d_{2}'d_{1}d_{0}'L+d_{2}'d_{1}d_{0}L$
	$c_{1}=(d_{2}+d_{1}+d_{0}+L')(d_{2}+d_{1}+d_{0}'+L')(d_{2}+d_{1}'+d_{0}+L')(d_{2}+d_{1}'+d_{0}'+L')(d_{2}'+d_{1}+d_{0}'+L)(d_{2}'+d_{1}'+d_{0})$
	$c_{0}=d_{2}d_{1}'d_{0}L'+d_{2}d_{1}d_{0}'$

Now we could translate these to a circuit
Before, that we need to map to available gates (for example only AND, NOT, and OR)
