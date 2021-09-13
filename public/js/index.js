console.log('Client side Javascript');

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')
messageOne.textContent = ''
messageTwo.textContent = ''
messageThree.textContent = ''
messageFour.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.forecast.uv_index
                messageTwo.textContent = data.forecast.humidity
                messageThree.textContent = data.forecast.pressure
                messageFour.textContent = data.forecast.wind_speed
            }
        })
    })

})