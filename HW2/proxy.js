const http = require('http');
const URL_WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather?q=Kharkiv,ua&appid=46d72f786c10d0bc9cecf479dc7dcde3';

let req = http.request({
  host: 'api.openweathermap.org',
  port: 80,
  method: 'GET',
  path: URL_WEATHER_API
  }, (res) => {
    res.on('data', (data) => {
    console.log(data.toString());
  });
});

req.end();