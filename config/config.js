var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar",
			disabled: true
		},
		{
			module: "clock",
			position: "top_right"
		},
		{
		    	module: 'MMM-forecast-io',
		    	position: 'top_right',  // This can be any of the regions.
		    	config: {
				latitude:   this.DARK_SKY_LATITUDE,
      				longitude: this.DARK_SKY_LONGITUDE,
		      		apiKey: this.DARK_SKY_API_KEY // Dark Sky API key.
			}

		},
		{
			module: "currentweather",
			position: "top_left",
			config: {
				location: this.CURRENT_WEATHER_LOCATION,
				locationID: this.CURRENT_WEATHER_LOCATION_ID,  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: this.CURRENT_WEATHER_API_KEY
			},
			disabled: true
		},
		{
			module: "calendar",
			header: "Carlos Calendar",
			position: "top_right",
			config: {
				calendars: [
					{
						url: this.GOOGLE_CALENDAR_URL
					},
					{
						url: this.GOOGLE_CALENDAR_2_URL
					}
				]
			}
		},
		{
			module: "compliments",
			position: "top_left"
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: this.WEATHER_FORECAST_LOCATION,
				locationID: this.WEATHER_FORECAST_LOCATION_ID,  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: this.WEATHER_FORECAST_API_KEY
			},
			disabled: true
		},
		{
			module: "newsfeed",
			position: "bottom_left",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
			
			module: 'MMM-Scrobbler',
			
			position: 'top_right',
			config: {
		
				username: this.LASTFM_USERNAME,
			
				apikey: this.LASTFM_APIKEY,
			
				//time interval to search for new song (every 15 seconds)
				updateInterval: 15 * 1000,
				//how often should we try to retrieve a song if not listening
				delayCount: 5,
				//time interval to search for new song if the 5 times not listening is received.
				//set this to the same number as updateInterval to ignore this option	
				delayInterval: 120*1000,
				animationSpeed: 1000,
				showAlbumArt: true,
						showMetaData: true,
				//Determines the position of the meta text. Possible values: top, bottom, left, right
				alignment: "bottom", 
				}
			
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
