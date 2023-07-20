/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//query selector
const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input");
const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");
//event listener


convertBtn.addEventListener("click", function() {
   convertUnits()
})

function convertUnits() {
    let input = inputEl.value;
    const feet = input * 3.281;
    const meters = input / 3.281;
    const gallon = input * 0.264;
    const liter = input / 0.264172;
    const pound = input * 2.20462;
    const kilogram = input / 2.20462;

    lengthEl.innerHTML = `
        <p>${inputEl.value} meters = ${feet.toFixed(3)} feet | ${inputEl.value} feet = ${meters.toFixed(3)} meters</p>
        `
    volumeEl.innerHTML = ` 
        <p>${inputEl.value} liters = ${gallon.toFixed(3)} gallons | ${inputEl.value} gallons = ${liter.toFixed(3)} liters</p>
    `
    massEl.innerHTML = `
        <p>${inputEl.value} kilos = ${pound.toFixed(3)} pounds | ${inputEl.value} pounds = ${kilogram.toFixed(3)} kilos</p>
    `
    inputEl.value = "";
}