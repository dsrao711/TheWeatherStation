const request = require('request');
//weather stack
const url = 'http://api.weatherstack.com/current?access_key=242f91bf2389cb2098212e5f800f7c2e&query=19.0760,72.8777'

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.current);
    console.log(response.body.current.weather_descriptions + '. The current temperature is ' + response.body.current.temperature + ', But it feels like ' + response.body.current.feelslike)
});


// Geocoding 
// MapBox

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGl2eWFyYW8iLCJhIjoiY2tzeGZrdjI5MHBhdjJ1cndzM2gyaDUxZyJ9.1kMmODinWPMJdb_kdaMeAw'

request({ url: geocodeURL, json: true }, (error, response) => {
    console.log('latitude :' + response.body.features[0].center[1])
    console.log('longitude :' + response.body.features[0].center[0])
})