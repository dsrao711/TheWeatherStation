const express = require('express')
const path = require('path')
const app = express()

publicDirPath = path.join(__dirname, '../public')
app.use(express.static(path.join(__dirname, './public')))

app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index')
})


app.get('/weather', (req, res) => {
    res.send('Weather data')
})

app.listen(3000, () => {
    console.log('Listening to port 3000')
})