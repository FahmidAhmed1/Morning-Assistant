const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
 
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static(__dirname));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res) {

  const query = req.body.cityName;
  const apiKey = "dc91e3f919190ad3e1b64319f206e1f1"
  const unit = "metric"
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<h1>The Temperature in "+ req.body.cityName +" is " + temp + " degress Celcius</h1>");
      res.write("<h2>The current weather condition is " + description + "</h2>");
      res.write("<img src=" + imageURL + ">");
      res.send();
    })
  })
})


app.listen(3000, function () {
  console.log("Server is running on port 3000");
})