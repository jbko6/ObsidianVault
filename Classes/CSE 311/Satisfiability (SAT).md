**Problem:** Given a propositional logic expression, is there a way to set the values of the variables such that the expression evaluates to true?
	If yes, it is satisfiable
	If not, it is unsatisfiable
Many problems can be stated as SAT problems
	Sudoku (is it valid?)
There are many ways to figure out if a problem is satisfiable
	Truth table (brute force)
		These get big fast
		Could only handle up to around 30 with an average computer
	Modern SAT solvers can handle millions of variables
		Very sophisticated
		Require expressions to be in a simpler form
Special SAT forms
	[[CNF & DNF]]
		Conjunctive normal form (big AND)
		Any CNF expression could be translated to DNF
	DNF
		Disjunctive normal form (big OR)