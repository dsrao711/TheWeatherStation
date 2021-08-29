const request = require('request');
const url = 'http://api.weatherstack.com/current?access_key=242f91bf2389cb2098212e5f800f7c2e&query=19.0760,72.8777'

request(url, (error, response) => {
    const data = JSON.parse(response.body);
    // console.log('body:', response.body);
    console.log(data);
});