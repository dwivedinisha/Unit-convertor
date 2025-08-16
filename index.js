/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


function convert(){
    let num = document.getElementById("input-text").valueAsNumber;

// let num = document.querySelector("input").valueAsNumber;
    const convert_btn = document.getElementById("convert-btn");
    let length_convert = document.getElementById("length");
    let volume_convert = document.getElementById("volume");
    let mass_convert = document.getElementById("mass");
    // console.log(num)
    let value_in_feet = (num*3.281).toFixed(3);
    let value_in_meter = (num/3.281).toFixed(3);
    let value_in_gallon = (num*0.264).toFixed(3);
    let value_in_litre = (num/0.264).toFixed(3);
    let value_in_pound = (num*2.204).toFixed(3);
    let value_in_kilogram = (num/2.204).toFixed(3);
    // console.log(value_in_feet)
    length_convert.innerHTML = `${num} meters = ${value_in_feet} feet | ${num} feet = ${value_in_meter} meters`;
    volume_convert.innerHTML = `${num} liters = ${value_in_gallon} gallons  | ${num} gallons = ${value_in_litre} liters`;
    mass_convert.innerHTML = `${num} kilos = ${value_in_pound} pounds | ${num} pounds = ${value_in_kilogram} kilos`;

}
