const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

forecast(-71.0596, 42.3605, (error, data) => {
    if (error) {
        console.log('Error', error)
    }
    console.log('Data', data)
})

geocode('Boston', (error, data) => {
    if (error) {
        console.log(error)
    }
    console.log('Data : ', data)
})