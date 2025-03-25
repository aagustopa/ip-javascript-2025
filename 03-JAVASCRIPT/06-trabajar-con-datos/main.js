const numero = 23;
const numeroTexto = '38';
const texto = 'hola';

const buleano = true;
const noDefinido = undefined;


//* Convertir de un tipo a otro puedo usar una función de javascript para cada tipo de dato
// Number()  String()  Boolean()

console.log(numero, String(numero));
console.log(buleano, String(buleano))
console.log(noDefinido, String(noDefinido))

console.log(numeroTexto, Number(numeroTexto));
console.log(buleano, Number(buleano));
console.log(texto, Number(texto));

console.log(texto, Boolean(texto));
console.log(numero, Boolean(numero));
console.log(numeroTexto, Boolean(numeroTexto));
console.log(0, Boolean(0));
console.log("", Boolean(""));
console.log(null, Boolean(null));
console.log(undefined, Boolean(undefined));


//****************************************************/
//****************************************************/

//* Acortar decimales 👉   .toFixed();

// Funciones globales de JavaScript
// console.log()
// alert()
// parseInt()
// Number()
// prompt()

// Funciones que solo pertenecen a  algunos tipos de datos

const num1 = 10;
const num2 = 3;

const division = num1 / num2;

const divisionConDosDecimales = division.toFixed(2);

console.log(division);
console.log(divisionConDosDecimales);

//! OJO!!! Porque toFixed() Siempre te dará un string

const divisionDosDecimalesNumber = Number(divisionConDosDecimales);
console.log(divisionDosDecimalesNumber);
