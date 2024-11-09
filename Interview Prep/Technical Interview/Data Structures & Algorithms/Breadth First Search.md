
Time complexity: `O(n)`
Uses a double ended `Queue` and a `Hashset`
	`deque` in python 
Instead of going to the farthest we can, just go layer by layer through the graph
	This is what makes it hard to do recursively

Good for finding shortest path

For finding the distance between hit and cog, this the the path the BFS algorithm would take
	hit -> cog
		hot -> dot
		hot -> lot
			dot -> dog
			lot -> log
				dog -> cog
	Depth of 5
	

```d2
direction: right
hit -> hot
hot -- dot
dot -- dog
dog -- cog
cog -- log
log -- dog
log -- lot
lot -- dot
lot -- hot
```
