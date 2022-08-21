const { response } = require("express");
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname+"/index.html");   
});

app.post("/", function(req, res){

    const city = req.body.cityName;
    const apiKey = "edf39e2aaf9b47bef7108e7e8b3bf29a";

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

    https.get(url, function(response){

    console.log(response.statusCode);
    response.on("data", function(data){
        const weatherData = JSON.parse(data);
        const weatherDescription = weatherData.weather[0].description;
        const temp = weatherData.main.temp;
        const icon = weatherData.weather[0].icon;

        const imageURL = " http://openweathermap.org/img/wn/" + icon + "@2x.png";

        res.write("<h1>Weather description - " + weatherDescription + "</h1><br>");
        res.write("<h3>The temperature is - " + temp + "</h3>");
        res.write("<img src = "+ imageURL + ">");
        res.send();  
    });
});


});




app.listen("3000", function(){
    console.log("Server listening at port number 3000.");
});

