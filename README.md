# my-weather-buddy

Problem Statement: The weather can change dramatically and quickly. One day can be sunny and warm, while the next day freezing. It can challenging to plan to dress appropriatly. The solution is to create an app that sends a user weather alerts based on the criteria of their choosing.

![ERD](./src/components/assets/ERD.png)

![ERD](./components/assets/ERD.png?raw=true "my-weather-buddy-ERD")

Routes Plan:
- Fetch the 5 day forecast from OpenWeather every night at 7pm(SetInterval)
- Have server every night at 7pm check if tomorrow's weather data meets criteria(SetInterval)
- Have POST route create Alert and adds data to Alerts database
- Have DELETE route that deletes the alert from database
- Have PUT route that allows alert to be edited.
* All current data will be reflected in database.

https://trello.com/b/t3px7iXE/myweather-buddy

Technologies Used:
React-Native
Node/PostgreSQL/Express/Knex
OpenWeather API
Twilio API
Google Geocoordinates API or Google Places API
NPM Font Awesome

Color Palette:
https://www.canva.com/colors/combinations/berry-jar/
