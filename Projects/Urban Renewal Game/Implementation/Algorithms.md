**Data:**
	Grid of voxels containing voxel type in integer format
	Prototype data in multiple forms
		Prototype JSON
		Prototype Possibility JSON
	Superposition Space

**Superposition Setup**
 - For every voxel in the grid:
	 1. We create a dictionary mapping strings (prototype id) to integers (repetitions)
	2. We loop through every direction of our voxel, checking the voxel type at that direction, then retrieving the associated list from the Prototype Possibility JSON. Ffor each prototype id in the list, we add a repetition to our dictionary.
	3. Once this is all done, we loop through our dictionary, and for each prototype id that has 6 repetitions, we add it to the voxel's superposition space.
	4. Now we have identified all the possibilities for our voxel and can collapse it without causing an error in the wave function.

**Minimum Entropy Coord Locator**
 - Create two variables, the minimum entropy value located and the location it was found at
 - For every voxel in the grid:
	1. Retrieve this voxel's entropy
		1. This is done by counting the size of the superposition space of the voxel
	2. If the voxel's entropy is 1, continue on to the next voxel. Entropy values of 1 indicate either an empty voxel or an already collapsed voxel
	3. Compare the voxel's entropy to the minimum entropy value
	4. If the voxel's entropy is lower, set the minimum entropy value to its value and set the location to its location
- Return the computed entropy value.

**Collapse**
 - Pick a random prototype from the voxel's superposition space
 - Set its superposition space to only contact that random prototype

**Propagate**
 - Create a propagation stack of locations
 - While the length of the propagation stack is not zero:
	 1. Get the current propagation coordinates
	 2. For each direction of the voxel:
		 1. Get the neighbor's current superposition space
		 2. Get the propagation voxel's possible neighbors in that direction from the Prototype JSON
		 3. Constrain the neighbor's superposition space to the propagation voxel's possible neighbor space
		 4. If anything was changed, add the neighbor's location to the propagation stack
 