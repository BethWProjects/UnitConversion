/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//query selector
const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")
const helperEl = document.getElementById("helper-text")
const themeSwitch = document.querySelector("#theme-switch")
let toggleDark = true;

//event listener

document.addEventListener("DOMContentLoaded", function() {
    emptyInput();
    setLightDarkMode()
});

convertBtn.disabled = true; //setting button state to disabled

inputEl.addEventListener("input", function() {
    // Ensure there's only one decimal point in the input
    const decimalCount = (this.value.match(/\./g) || []).length;
    if (decimalCount > 1) {
        this.value = this.value.replace(/\.(?=.*\.)/g, "");
    }

    if (inputEl.value.length === 0 || inputEl.value === "0" || inputEl.value === "0." || inputEl.value === ".0" || inputEl.value === "0.0" || inputEl.value ===".") {
        convertBtn.disabled = true;
    } else {
        convertBtn.disabled = false
    }
    emptyInput()
})

function emptyInput() {
    const helper = "Please enter a value"
    if (inputEl.value.length === 0) {
        helperEl.innerHTML = helper
    } else {
        helperEl.innerHTML = ""
    }
}

convertBtn.addEventListener("click", function() {
    convertUnits()
    emptyInput()

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

function setLightDarkMode() {
    const body = document.body;
    body.classList.toggle('light-mode');
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.toggle('section-light-mode'));
    const pTitle = document.querySelectorAll('.p-title');
    pTitle.forEach(title => title.classList.toggle('light-mode-title'));
    const pConversion = document.querySelectorAll('.p-conversion');
    pConversion.forEach(conversion => conversion.classList.toggle('light-mode-conversion'));
    if (toggleDark === true) {
        themeSwitch.textContent = "☀️";
        toggleDark = false;
    } else {
        themeSwitch.textContent = "🌙";
        toggleDark = true;
    }
}