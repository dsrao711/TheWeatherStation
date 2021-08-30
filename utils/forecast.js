const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=242f91bf2389cb2098212e5f800f7c2e&query=' + latitude + ',' + longitude

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather servies ', undefined)
        } else if (response.body.error) {
            callback('Unable to find location. Please try again', undefined)
        } else {
            callback(undefined, {
                temperature: response.body.current.temperature,
                description: response.body.current.weather_descriptions[0],
                feels_like: response.body.current.feelslike,
                humidity: response.body.current.humidity
            })
        }
    })
}


module.exports = forecast