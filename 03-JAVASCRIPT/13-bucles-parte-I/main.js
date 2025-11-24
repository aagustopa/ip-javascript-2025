//? Bucles
//* Repetir "algo" un número de veces
//* Lo utilizamos para 2 cosas
//* Repetir algo un numero de veces
//* Recorrer datos uno a uno (strings y arrays)



//* for 👉  Es el bucle más completo y personalizable de todos

//    crear variables;   condición      modificar variables
// for (let variable = 1; variable <= 5; variable += 1 ) {
//   console.log('Hola');
// }


// Normalmente la variable se suele llamar i
for (let i = 1; i <= 10; i += 2) {
    console.log('hola');
}


// La gracia es que dentro del bucle puedo usar cualquiera de las variables que hemos creado para el bucle

for (let i = 0; i <= 5; i++) {
    console.log(i);
}


//****************************************************/
//* Recorrer un string

const frase = 'Con cien cañones por banda';


// crea un contador que inicializas a 0
let contador = 0;



// lee cada letra de la frase

// const primeraLetra = frase[0];

// if (primeraLetra === 'c' || primeraLetra === 'C') {
//   contador++;
// }

// const segundaLetra = frase[1];
// if (segundaLetra === 'c' || segundaLetra === 'C') {
//   contador++;
// }

// lee cada letra de la frase
for (let i = 0; i < frase.length; i++) {

    const letra = frase[i];

    // si la letra es una c
    if (letra === 'c' || letra === 'C') {
        // suma 1 al contador de c
        contador++;
    }
    // si no es una c
    // no hagas nada
}



console.log('Tienes ' + contador + ' c');


//****************************************************/

//* Recorrer un array

const frutas = ['🍎', '🍐', '🍌', '🍋'];
/*
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}*/

// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);

//* Puedo usar un for dentro de otro for??

const coches = ['Fiat', 'Opel', 'Peugeot', ['Mercedes', 'Ferrari']];

/*
for (let i = 0; i < coches.length; i++) {
  // Podríamos mirar SI UN ELEMENTO DE coches ES UN ARRAY
  const elementoCoches = coches[i];

  if (Array.isArray(elementoCoches) === true) {
 
    // aquí dentro del if, 
    for (let j = 0; j < elementoCoches.length; j++) {
      console.log(elementoCoches[j]);
    }

  } else {
    console.log(coches[i]);
  }


}*/


//****************************************************/
//****************************************************/

//* Ejercicios

//* Con el siguiente array

console.log("**********************************************");


const misFrutas = ['manzana', 'pera', 'platano', 'limon'];

// Que en consola aparezca lo siguiente
//  "Fruta 1: 🍎"
//  "Fruta 2: 🍐"
//  ...

for (const [index, element] of misFrutas.entries()) {
    let counting = index + 1;
    // console.log(counting, element);
    console.log(`fruta ${counting}: ${element}`);
}


//* Crea un nuevo array que se llame frutasPares y dentro le metes solo las frutas del array que te he dado que sean pares
const frutasPares = ['pera', 'limon'];


//* Con un array de números como este

const numeros = [2, 5, -3, 8];

// Cambia el valor de cada número sumándole 5

// [7, 10, 2, 13]

let sum = 0;
let ultimoArray = []

for (let x = 0; x < numeros.length; x++) {
    let element = numeros[x] + 5;
    console.log(`sumados +5 = ${element}`);
    ultimoArray = element;
}

console.log(ultimoArray);



//* coge el último array que has generado de números y quiero que imprimas en consola el total de la suma de todos ellos