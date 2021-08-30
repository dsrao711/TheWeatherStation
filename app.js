const request = require('request');
const geocode = require('./utils/geocode')
    // weather stack api
const url = 'http://api.weatherstack.com/current?access_key=242f91bf2389cb2098212e5f800f7c2e&query=19.0760,72.8777'


request({ url: url, json: true }, (error, response) => {

    if (error) {
        console.log('Unable to connect to weather service')
    } else if (response.body.error) {
        console.log('Unable to find location . Please Try Again!')
        console.log(response.body.error)
    } else {
        console.log(response.body.current.weather_descriptions + '. The current temperature is ' + response.body.current.temperature + ', But it feels like ' + response.body.current.feelslike)
    }
});


geocode('Boston', (error, data) => {
    if (error) {
        console.log(error)
    }
    console.log('Data : ', data)
})