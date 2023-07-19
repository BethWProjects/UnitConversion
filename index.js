//query selector
const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input");
const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
// const massEl = document.getElementById("mass");
//event listener
convertBtn.addEventListener("click", function() {
    let input = inputEl.value;
    let feet = input * 3.281;
    let meters = input / 3.281;
    let gallon = input * 0.264;
    let liter = input / 0.264;


    lengthEl.innerHTML += `
        <p>${inputEl.value} meters = ${feet.toFixed(3)} feet | ${inputEl.value} feet = ${meters.toFixed(3)} meters</p>
        `
    volumeEl.innerHTML += ` 
        <p>${inputEl.value} liters = ${gallon.toFixed(3)} gallons | ${inputEl.value} gallons = ${liter.toFixed(3)} liters</p>
    `
})

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//3 functions for unit conversion 
//input value
//conversion
//.innerhtml