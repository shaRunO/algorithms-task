/*1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.*/

function convertFahrToCelsius(fahrenheit) {
    var celsius = ((fahrenheit - 32) * 5 / 9).toFixed(4)
    let fahr = Object.prototype.toString.call(fahrenheit);

    if (fahr === "[object Number]" || (fahr === "[object String]" && !isNaN(fahrenheit))) {
        return celsius;
    } else {
        let ptype = fahr.split(" ");
        ptype[1] = ptype[1].substring(0, ptype[1].length - 1);
        return `${JSON.stringify(fahrenheit)} is not a valid number but a/an ${ptype[1]}`;


    }
}