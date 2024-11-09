/
	items/
		GET: return JSON list of tracked items with their dictionaries
		POST: add a tracked item
		\<item id>
			GET: return tracked item JSON dictionary
			POST: modify item
			DELETE: delete the tracked item
	config
		GET: return JSON dictionary of current configuration settings
		POST: modify configuration settings

Item Dictionary Key:
{
	"id" : MongoDB provided ID
	"name" : User provided name
	"query" : Query for Craigslist search
	"category" : Category to search in
	"filters" : Dictionary of Craigslist filters
	"median-price" : Listing dictionary
	"lowest-price" : Listing dictionary
	"highest-price" Listing dictionary
	"history" : {
		\[date & time] : {
			"median-price" : Listing dictionary
			"lowest-price" : Listing dictionary
			"highest-price" : Listing dictionary
			"quantity" : # of listings
			"listings:" : \[] of listing dictionaries
		}
	}
}