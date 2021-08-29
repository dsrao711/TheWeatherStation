const request = require('request');
const url = 'http://api.weatherstack.com/current?access_key=242f91bf2389cb2098212e5f800f7c2e&query=19.0760,72.8777'

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.current);
    console.log(response.body.current.weather_descriptions + '. The current temperature is ' + response.body.current.temperature + ', But it feels like ' + response.body.current.feelslike)
});