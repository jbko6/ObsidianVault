Time complexity: `O(n)`
If done recursively, use a `HashSet`
	If not done recursively, use a `Stack`
All about traversing a graph

Requires a #connected #graph


General structure of the algorithm:
	Start at the overall root of the graph
	Recursively visit the children of the root
		First visit all the children
		Record the visited nodes as you go
		Base case is where all the neighbors of the node have been visited
		Keep going until the base case is reached
	Then pop back up from recursion and perform any needed clean up
 
For the below graph, the order the nodes are visited in would be:
	1 -> 2 -> 4 -> 3


```d2
direction:right
1 -- 2
1 -- 3
2 -- 4
3 -- 4
```
