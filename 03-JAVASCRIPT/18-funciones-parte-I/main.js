//? Funciones

function saludo () {
  console.log('¡Hola!');
  console.log('¡amig@!');
}


saludo();
saludo();



//* Una cosa "curiosa"  es que así como con las variablas NO PODÍAMOS USARLAS ANTES DE CREARLAS, con las funciones no ocurre. PODEMOS LLAMARLAS ANTES DE CREARLAS   Técnicamente esto se llama "hoisting"


// console.log(nombre);

// const nombre = 'Ivan';

saludar();

function saludar () {
  console.log('Hola, holita');
}
//****************************************************/


//* Vamos a añadir un poco de dinamismo, añadiendo los PARÁMETROS

const nombre = 'Dani';

buenosDias(nombre);

function buenosDias (nombreP) {  
  console.log('Buenos días, ' + nombreP);  
}

buenosDias('Ivan');  // nombre = 'Ivan'
buenosDias('Carlos');  // nombre = 'Carlos'
buenosDias();
buenosDias(nombre);






//* Puedes usar varios parámetros seguidos por comas

function buenasTardes (nombre, apellido) {
  console.log('Buenas tardes, ' + nombre + ' ' + apellido);
}

buenasTardes('Ivan', 'Luengo');


//* Podemos validar como creadores de la función si nos pasan o no datos


function buenasNoches (nombre) {

  if (nombre === undefined) {
    console.log('Buenas noches, amig@');
  } else {
    console.log('Buenas noches, ' + nombre);
  }
  
}

buenasNoches();
buenasNoches('Albert');



//* También podemos validar si el tipo de dato no es correcto

function sumar (num1, num2) {

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    console.error('Tienen que ser dos números');
  } else {
    const resultado = num1 + num2;  
    console.log(resultado);
  }
}

sumar(3, 4);

sumar('hola', 'adios');



//* Los parámetros pueden tener valores por defecto, es decir, que si no me los pasan (undefined), cogerán el valor que le pongamos por defecto


function buenFinde (nombre = 'amig@') { 
  console.log('Buen finde, ' + nombre);  
}

buenFinde();
buenFinde('Janira');


//****************************************************/
//****************************************************/
//* return  👉  Retorno de la función. Sirve para que si dentro de la función tenemos algún valor que queramos usar fuera, nos lo de.   
function restar (num1, num2) {
  const resultado = num1 - num2;

  
  return resultado;
}

//! Después de ejecutarse el return , NO SE EJECUTA NADA MÁS

function multiplicar (num1, num2) {
  const resultado = num1 * num2;

  return resultado;

  //! Esto no se ejecutará en la vida
  console.log('hola');
}


const multi5y3 = multiplicar(5, 3);
console.log(multi5y3);


//! Todas las funciones SIEMPRE RETORNAN ALGO, si no se lo hemos dicho explicitamente, retornarán undefined


function hola () {
  console.log('Hola');
  // return;
}

const saludito = hola();
console.log(saludito);





// let numero1 = prompt('Dime un número');
// let numero2 = prompt('Dime otro número y se lo resto al primero.');

let numero1 = '5';
let numero2 = '3';

numero1 = Number(numero1);
numero2 = Number(numero2);



const resta1 = restar(numero1, numero2);

console.log(resta1);
console.log(restar(5, 3));



console.log('El resultado de la resta es ' + resta1);




//* Ahora ya podemos crear funciones propias de la hostia

function isTextNumeric (text) {
  let isNumeric = true;
  
  if (isNaN(text) === true) {
    isNumeric = false;
  }

  return isNumeric;
}



const valor = '23.35';


if (isTextNumeric(valor)) {
  console.log('Son números');
} else {
  console.log('no son números');
}

