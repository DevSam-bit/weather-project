const express = require("express");
const https = require('https'); 
const app = express();

app.get("/", function(req, res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=9c0f7ecab25cd1b7cdae01d56b89e1ae&units=metric"
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
        })
    })
    res.send("Server is up and running.")
})






app.listen(3000, function() {
    console.log("Server is running on port 3000.");
})
