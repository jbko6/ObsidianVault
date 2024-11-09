


Prototype JSON
```json
{
	"air": [
		{
			"name": "air_empty",
			"mesh": "...obj",
			"rotation": 0,
			"valid_neighbors:": {
				"x-": {
					"air": ["air_empty", "air_column", "air_column_end"],
					"grass:": ["grass_flat", "grass_turn", "grass_inline"]
				},
				"x+": {},
				"z-": {},
				"z+": {},
				"y-": {},
				"y+": {}
			}
		},
	],
	"grass": [
		
	],
	"road": [
	
	],
}
```
Note: I will need to generate blanks (prototypes with no mesh data) for every voxel type to ensure empty space can be accounted for properly.

Prototype Possibility JSON
*Note the prototype IDs refer to IDs of the top-level cell type.*
```json
{
	"air": {
		"x-": {
			"air": ["air_empty", "air_column", "air_column_end"],
			"grass": ["grass_flat", "grass_turn", "grass_inline"],
			"road": ["road_flat"]
		},
		"x+": {},
		"z-": {},
		"z+": {},
		"y-": {},
		"y+": {},
	},
	"grass": {
	
	},
	"road": {
	
	}
}
```
How this JSON is to be used:
Let's say we are a grass voxel with neighbors along the x and z axis being other grass voxels and voxels along the y axis being air voxels.
We create a dictionary mapping integers (prototype id) to integers (repetitions)
We loop through every direction of our voxel, checking the voxel type at that direction, then retrieving the associated list. For each prototype id in the list, we add a repetition to our dictionary.
Once this is all done, we loop through our dictionary, and for each prototype id that has 6 repetitions, we add it to the grass voxel's superposition space.
Now we have identified all the possibilities for our grass voxel and can collapse it without causing an error in the wave function.
In our example case, the only possibility would be a flat grass plane.