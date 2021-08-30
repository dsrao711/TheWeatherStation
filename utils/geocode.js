const request = require('request');

// Geocoding - Using MapBox
// encodeURIComponent - used if there are any special charachters  in the string , (? becomes &3F)

const geocode = (address, callback) => {
    const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZGl2eWFyYW8iLCJhIjoiY2tzeGZrdjI5MHBhdjJ1cndzM2gyaDUxZyJ9.1kMmODinWPMJdb_kdaMeAw'

    request({ url: geocodeURL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (response.body.features.length == 0) {
            callback('Unable to find location . Please try again', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode