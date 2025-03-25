
// pedir al usuario unos euros

// si lo que me ha pasado NO ES UN NÚMERO
    // le vuelvo a pedir los euros 

// si lo que me pasa SÍ ES UN NÚMERO
    // con el valor que medan, lo multiplico por la tasa de cambio de euros a dólares 

// doy el resultado al usuario

//? Condicionales

//* Los condicionales son estructuras que sirven para dividir nuestro código en varios caminos

//* if......      si ocurre esta condición...haz esto

/* 
  SINTAXIS

  if (condicion) {
    líneas de código
  }

*/

//? Operadores condicionales

//* Mayor que.... 👉   >

const edad = 18;

if (edad > 18) {
  console.log('Eres mayor de edad');
}

//* Menor que...  👉  <

if (edad < 18) {
  console.log('Eres menor de edad')
}


//* Mayor o igual....  👉   >=
//* Menor o igual...   👉   <=

if (edad >= 18) {
  console.log('Eres mayor de edad');
}


//* Igual que....    👉    ==
//! No recomendable

if (edad == "18") {
  console.log('Tienes 18 años');
}

//* Igual que...de verdad de la buena  👉  ===

if (edad === "18") {
  console.log('Tienes 18 años');
}


//* Distinto de...   👉    !=
//! No recomiendo usar este, usa el de abajo

const nombre = 'Carlos';

if (nombre != 'Ivan') {
  console.log('Hola colega');
}


//* Distinto de....de verdad de la buena  👉   !==

if (nombre !== 'Carlos') {
  console.log('Sé que no eres Carlos');
}


//****************************************************/
//****************************************************/

//* Ejemplos de if...

/*

// pedir la edad al usuario
const edadUsuario = prompt('Dime tu edad');
const edadMayorDeEdad = 18;




// Si lo que me pasa no se puede convertir a número, es que es texto
//* Para poder preguntar si dentro de un texto, lo que me pasas son palabras en lugar de números, tenemos que usar isNaN(), si devuelve true, es que son palabras
if (isNaN(edadUsuario) === true) {
  console.log('No es un número');
}


// si no es mayor de edad
if (edadUsuario < edadMayorDeEdad) {
  // le digo cuantos años le faltan para ser mayor de edad
  const edadHastaMayorEdad = edadMayorDeEdad - edadUsuario;
  console.log(`No eres mayor de edad, te faltan ${edadHastaMayorEdad} años 🥹🥹🥹`);

}

// si es mayor de edad
if (edadUsuario >= edadMayorDeEdad) {
  // Le digo cuantos años hace que es mayor de edad
  const edadDesdeMayorEdad = edadUsuario - edadMayorDeEdad; 
  console.log(`Eres mayor de edad desde hace ${edadDesdeMayorEdad} años. 😀😀`);
}

*/
//****************************************************/


//* else....  si no... haz esto otro
//! No puede existir else SI NO HAY UN if...

const isMarried = "hola qué ase";

if (isMarried === true){
  console.log('Viva los novios!');
} else {
  console.log('Se te pasa el arroz.');
}


//* else if....   en cambio...si ocurre esta otra condicion...haz esto
//* puede haber tantos else if como te dé la gana

//! no puede haber un else...if SI NO EXISTE UN if antes....

const edadPersona = 300;

if (edadPersona <= 6) {
  console.log('Entras gratis');
} else if (edadPersona >= 65) {
  console.log('Pagas 3€.');
} else if (edadPersona > 6) {
  console.log('Pagas 10€');
} 

//****************************************************/

//* Ejemplo de usar un if, algunos else if  y un else


const color = '';

if (color === 'rojo') {
  console.log('El color de la pasión');
} else if (color === 'amarillo') {
  console.log('El color del sol');
} else if (color === 'verde') {
  console.log('El color de la esperanza');
} else if (color === 'azul') {
  console.log('El color del mar');
} else {
  console.log('No has cogido uno de los colores molones');
}


//****************************************************/

//* Dentro de los paréntesis (condición) podemos preguntar no solo una cosa, sino varias

//* AND 👉   &&
//! Las dos cosas tienen que ser true!!!

const hasDogs = false;
const yourAge = 19;



//                  false
//      false        &&      true
if (hasDogs === true && yourAge >= 18) {
  console.log('Eres mayor de edad y tienes perros');
} 

//                         true
//               true       &&      true
else if (hasDogs === false && yourAge >= 18) {
  console.log('Eres mayor de edad y NO tienes perros');
} 



//                      false
//               false   &&      false
else if (hasDogs === true && yourAge < 18) {
  console.log('Eres MENOR y Tienes perros');
}




//*   OR  👉   ||
//! SOLO UNO DE LOS DOS LADOS TIENE QUE SER TRUE



//                   false
//          false    ||     false
if (hasDogs === true || yourAge < 18) {
  console.log('O tienes perros, o eres menor, o las dos cosas');
}

//****************************************************/
//****************************************************/



//* EXTRA 1:  Para javascript, hay ciertos valores que considera verdaderos (truthy) y otros que considera falsos (falsy)

const valor = {};

if (valor) {
  console.log('👌');
} else {
  console.log('❌');
}

//* Verdaderos

//*                                       true
//* números distintos de cero             23
//* cualquier string excepto uno vacío    "hola"
//* cualquier array                       []
//* cualquier objeto                      {}

//! falsos

//!                 false
//! el cero         0
//! string vacío    ""
//!                 null
//!                 undefined


//****************************************************/
//* EXTRA 2:  Muchas veces veréis que dentro de un if no utilizan algún operador condicional, sino que simplemente ponene una variable o una función
//! mucho cuidado con usar un if sin ===, porque si no controlas de donde viene el valor de la variable, cualquier valor verdadero entrará en el if

const isAdmin = 23;

if (isAdmin) {
  console.log('Eres Admin');
} else {
  console.log('No eres admin');
}


//* si quieres puedes hacerlo con cualquier función que SABES QUE SOLO DEVUELVE true o false, como por ejemplo isNaN()

const palabra = 'zapato';

if (isNaN(palabra)) {
  console.log('Es una palabra');
} else {
  console.log('No es una palabra');
}


//****************************************************/
//* EXTRA 3:   Existe un operador en javascript que NIEGA todo.  👉   !


const isConnected = true;

// esto es preguntar si SI está conectado
if (isConnected) {
  console.log('Conectado');
} else {
  console.log('Desconectado');
}



// cómo le digo a JavaScript que ejcute algo cuando NO esté conectado

if (!isConnected) {
  console.log('Desconectado');
} else {
  console.log('Conectado');
}


if (!isNaN(palabra)) {
  console.log('Es un número');
} else {
  console.log('Es una palabra');
}



//****************************************************/
//****************************************************/

//? ÁMBITO de las variables  👉  scope


// Todas las variables creadas libres son variables de ÁMBITO GLOBAL
// Se pueden usar en cualquier parte de mi archivo javascript


let perro = 'Freya';
console.log(perro);
perro = 'Kira';
console.log(perro);



if (true) {
  console.log(perro);

  // todas las variables creadas DENTRO DE UN BLOQUE tienen su ÁMBITO LOCAL, es decir solo se pueden usar dentro de ese bloque
  let persona = 'Jessica';


  persona = 'Jesus';

  if (true) {
    console.log(persona);
  }
}


// console.log(persona);



// * Manera de hacer que quieras crear una variable dentro de un bloque y usarlo fuera


const miEdad = 15;

let esMayorEdad;

if (miEdad >= 18) {
  esMayorEdad = true;
} else {
  esMayorEdad = false;
}


console.log(esMayorEdad);