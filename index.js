const inputEl = document.getElementById('input-el')
const convertBtn = document.getElementById('convert-btn')
const firstResult = document.getElementById('first-result')
const secondResult = document.getElementById('sencond-result')
const thirdResult = document.getElementById('third-result')
const lengthEl = document.getElementById('length-el')
const volumeEl = document.getElementById('volume-el')
const massEl = document.getElementById('mass-el')
const oneMeterToFeet = 3.281
const oneLiterToGallon = 0.264
const oneKgToPound = 2.204


function generateResults(value, factor, singular, plural, singularTo, pluralTo) {
    const imperialConvertToMetric = (value * factor).toFixed(2)
    const metricConvertToImperial = (value / factor).toFixed(2)
    if (value === 1) {
        return `
                ${value} ${singular} = ${imperialConvertToMetric} ${singularTo} | ${value} ${singularTo} = ${metricConvertToImperial} ${singular}
        `
    } else {
        return `
                ${value} ${plural} = ${imperialConvertToMetric} ${pluralTo} | ${value} ${pluralTo} = ${metricConvertToImperial} ${plural}
        `
    }
}


convertBtn.addEventListener('click', function () {
    let inputValue = inputEl.value.trim()
    if (inputValue === '') {
        lengthEl.textContent = volumeEl.textContent = massEl.textContent = 'Please enter numbers that you want to convert.'
    } else if (!isNaN(Number(inputValue))) {
        let numberedValue = Number(inputValue)
        lengthEl.textContent = generateResults(numberedValue, oneMeterToFeet, 'meter', 'meets', 'foot', 'feet')
        volumeEl.textContent = generateResults(numberedValue, oneLiterToGallon, 'liter', 'liters', 'gallon', 'gallons')
        massEl.textContent = generateResults(numberedValue, oneKgToPound, 'kilo', 'kilos', 'pound', 'pounds')

    } else {
        lengthEl.textContent = volumeEl.textContent = massEl.textContent = 'Only allow NUMBER type in.'
    }
})

