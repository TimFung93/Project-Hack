const express = require('express');
const app = express();



const http = require('http')
const https = require('https')


url = "https://api.darksky.net/forecast/a422c5839ded8434ccba6e5167dc91ad/43.700,-79.5667"


function getWeather() {// wrap response in function
	https.get(url, function(response) { //http get request passing in URL with API key
		let str = ""; 
		response.on('error' , function (error) {
			console.log("There is has been an error" + error)
		})

		response.on('data', function(packet) {
			str += packet // place each packet into string
		})

		response.on('end' , function() {
			console.log('done')
			let parsedSTR = JSON.parse(str); // parse string into var parsedSTR
			console.log(parsedSTR) // logs it to find data from packet
			console.log(parsedSTR.timezone)
			console.log((parsedSTR.currently.temperature - 32) * 0.5556)
			console.log("Summary: " + parsedSTR.minutely.summary)

		})
	})

}


getWeather()

















app.use(express.static('public'));






app.listen(8080, () => {
	console.log('Server started on http://localhost:8080')
	console.log('Press CTRL + C to kill server')
})