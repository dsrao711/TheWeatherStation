const express = require('express')
const path = require('path')
const app = express()
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

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
    if (!req.query.address) {
        return res.send({
            error: "You must provide a location for weather updates"
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({
                error: error
            })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })


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