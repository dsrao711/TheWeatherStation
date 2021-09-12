const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=242f91bf2389cb2098212e5f800f7c2e&query=' + latitude + ',' + longitude


    // Using object destructuring 

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather servies ', undefined)
        } else if (body.error) {
            callback('Unable to find location. Please try again', undefined)
        } else {
            callback(undefined, {
                temperature: body.current.temperature,
                description: body.current.weather_descriptions[0],
                feels_like: body.current.feelslike,
                humidity: body.current.humidity,
                wind_speed: body.current.wind_speed,
                pressure: body.current.pressure,
                uv_index: body.current.uv_index,


            })
        }
    })
}


module.exports = forecast