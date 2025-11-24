const firstValue = document.getElementById('first-number');
const secondValue = document.getElementById('second-number');
const sumarButton = document.getElementById('sumar');
const restarButton = document.getElementById('restar');
const multiButton = document.getElementById('multiplicar');
const dividirButton = document.getElementById('dividir');
const resultadoBox = document.getElementById('resultado');

sumarButton.addEventListener('click', () => {
    askAndCheckNumber(firstValue);
    askAndCheckNumber(secondValue);
    // const suma = Number(firstValue.value) + Number(secondValue.value);
    const suma = firstValue.value + secondValue.value;
    console.log('sumando');
    resultadoBox.innerHTML = `Resultado <br/> ${suma}`;
    console.log(suma);
})

restarButton.addEventListener('click', () => {
    const resta = Number(firstValue.value) - Number(secondValue.value);
    console.log('restando');
    resultadoBox.innerHTML = `Resultado <br/> ${resta}`;
    console.log(resta);
})
multiButton.addEventListener('click', () => {
    const multiplicacion = Number(firstValue.value) * Number(secondValue.value);
    console.log('multiplicando');
    resultadoBox.innerHTML = `Resultado <br/> ${multiplicacion}`;
    console.log(multiplicacion);
})
dividirButton.addEventListener('click', () => {
    const division = Number(firstValue.value) / Number(secondValue.value);
    console.log('dividiendo');
    resultadoBox.innerHTML = `Resultado <br/> ${division}`;
    console.log(division);
})

function askAndCheckNumber(num) {
    // while (num === null || isNaN(num) === true) {
    // num = prompt('Mal, tiene que ser un numero');
    // console.log(`mal, tiene que ser un numero`);
    // break;
    // }
    if (num === null || isNaN(num) === true) {
        console.log(`mal, tiene que ser un numero`);
    }
    // }
    num = Number(num)
    return num;
}