const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')


publicDirPath = path.join(__dirname, '../public')
viewsDirPath = path.join(__dirname, '../templates/views')
partialsDirPath = path.join(__dirname, '../templates/partials')
app.use(express.static(path.join(__dirname, './public')))

app.set('view engine', 'hbs');
app.set('views', viewsDirPath)
hbs.registerPartials(partialsDirPath)


app.get('', (req, res) => {
    res.render('index', {
        title: 'TheWeatherBooth',
        city: "Mumbai"
    })
})


app.get('/weather', (req, res) => {
    res.send('Weather data')
})


app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "You must provide a search term"
        })
    }
    console.log(req.query.search)

    res.send({
        products: ["Query string", "test"]
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    })
})


app.listen(3000, () => {
    console.log('Listening to port 3000')
})




// const geocode = require('./utils/geocode')
// const forecast = require('./utils/forecast')

// const address = process.argv[2]

// if (!address) {
//     console.log('Please provide an address')
// } else {
//     geocode(address, (error, data) => {
//         if (error) {
//             console.log(error)
//         }
//         forecast(data.latitude, data.longitude, (error, forecastData) => {
//             if (error) {
//                 console.log('Error', error)
//             }
//             console.log(data.location)
//             console.log('Data', forecastData)
//         })
//     })
// }