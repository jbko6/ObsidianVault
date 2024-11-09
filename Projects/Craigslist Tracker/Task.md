Goal: Allow a user to specify desired items using tags and keywords as well as a desired price point or possibly a percentage deviation from the median price, then notify the user when a listing appears that matches their criteria.

Frontend Vision: Dashboard that shows the user their currently tracked items, useful data such as lowest recorded price and quantity of listing appearing over a timespan. Allows the user to modify and add more tracked items easily. Possibly shows the user graphs that show data such as price over time at a glance. Also includes settings menu for configuration such as how often the tracker scrapes Craigslist's data or which city it is tracking. Possibly include a notification center that allows users to look through the history of alerts.

Backend Vision: Allow the frontend to POST new tracked items, PUT new configurations on existing tracked items, GET data such as lowest recorded price and quantity available, and DELETE tracked items. Track tracked items during specified intervals. Notify the user via email or other form of notification when an item is available at a desired price. Record notifications for use by frontend. Expose an endpoint for modifying configuration settings. 