let celciusInput = document.querySelector('#celcius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

// Button
let btn = document.querySelector('.button button')

function roundNumber(number) {
    return Math.round(number * 100) / 100
}

// Celcius as Input
celciusInput.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        let cTemp = parseFloat(celciusInput.value)
        if (cTemp >= 0 && cTemp <= 100) {

            let fTemp = (cTemp * (9 / 5)) + 32
            let kTemp = cTemp + 273.15

            fahrenheitInput.value = roundNumber(fTemp)
            kelvinInput.value = roundNumber(kTemp)
        }
        else {
            alert('Please Enter the value between 0-100 (Celcius Scale)')
        }
    }
})

// Fahrenheit as Input
fahrenheitInput.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        let fTemp = parseFloat(fahrenheitInput.value)
        if (fTemp >= 32 && fTemp <= 212) {
            let cTemp = (fTemp - 32) * (5 / 9)
            let kTemp = (fTemp - 32) * (5 / 9) + 273.15

            celciusInput.value = roundNumber(cTemp)
            kelvinInput.value = roundNumber(kTemp)
        }
        else {
            alert('Please Enter the value between 32-212 (Fahrenheit Scale)')
        }
    }
})

// Kelvin as Input
kelvinInput.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        let kTemp = parseFloat(kelvinInput.value)
        if (kTemp >= 273 && kTemp <= 373) {
            let cTemp = (kTemp - 273.15)
            let fTemp = (kTemp - 273.15) * (9 / 5) + 32

            celciusInput.value = roundNumber(cTemp)
            fahrenheitInput.value = roundNumber(fTemp)
        }
        else {
            alert('Please Enter the value between 272-373 (Kelvin Scale)')
        }

    }
})

// Clear Button
btn.addEventListener('click', () => {
    celciusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})