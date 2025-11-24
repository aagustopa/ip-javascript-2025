// ?  Arrays 👉 Sirven para guardar VARIOS VALORES dentro de la misma variable

const fruta1 = 'Manzana';

const fruta2 = 'Pera';

console.log(fruta1);


//* Creamos arrays usando los corchetes
//                  0        1         2
const frutas = ['Manzana', 'Pera', 'Plátano'];

// console.log(frutas);


//! Podemos guardar todo lo que queramos en un array, pero lo más común es NO MEZCLAR TIPOS DE DATOS EN EL MISMO ARRAY
const arrayLibre = ['Hola', 23, true, null, undefined, [1, false]];
// console.log(arrayLibre);



//* Acceder o modificar un elemento de un array

// accedemos usando unos corchetes después del nombre de la variable
console.log(frutas);
console.log(frutas[2]);

//! si le pides algo fuera de rango o en una posición en la que no has definido nada, te dara undefined
console.log(frutas[6]);



// Puedo modificar un valor en una posición simplemente reasignando un nuevo valor

frutas[0] = '🍎';
console.log(frutas);

// podemos añadir valores en elementos del array que no tenían
console.log(frutas[3]);
frutas[3] = 'melocotón';
console.log(frutas);



//****************************************************/
//****************************************************/

//* EXTRA: Los string funcionan parecido a los arrays, es decir, también puedo acceder a una posicion de un string usando corchetes

const frase = 'Con cien cañones por banda';

console.log(frase[0]);

//! En strings, NO PUEDES MODIFICAR EL STRING

frase[0] = 'X';

console.log(frase);


//****************************************************/
//****************************************************/


//? Diferencia entre valores primitivos y valores NO primitivos


// primitivos = string, number, boolean, null, undefined
// no primitivos = arrays, objetos, funciones

//* Con los valores primitivos, lo que se pasa de una variable a otra es un "duplicado" del valor de la variable, es como si fueran independientes cada variable

let nombre = 'Ivan';

let nombreDuplicado = nombre;

console.log(nombre);
console.log(nombreDuplicado);

nombre = 'Carlos';

console.log(nombre);
console.log(nombreDuplicado);


//* Con los valores NO PRIMITIVOS ocurre distinto

const array1 = ['hola', 'adiós']; // 0x111  

const array2 = array1; // 0x111

console.log(array1);
console.log(array2);


array1[1] = 'Chao'; // 0x111

console.log(array1);
console.log(array2);



//? Cómo duplicamos arrays SIN QUE SEAN EL MISMO EN MEMORIA

//* La manera más moderna de hacerlo es usar un operador que no conocíamos y se llama SPREAD OPERATOR ...

const array3 = [...array1]; // 0x222

console.log('array1', array1);
console.log('array3', array3);

array1[0] = 'Hi!';
console.log('array1', array1);
console.log('array3', array3);



console.log("//****************************************************/");
//****************************************************/
//****************************************************/


//* Crea un array con 3 marcas de coche
const marcas = ['Audi', 'Honda', 'Fiat']
console.log(marcas);

//* Añade un coche extra más tarde después del último
// marcas[3] = 'Tesla';
marcas.push('Tesla')
console.log(marcas);

//* Que salga en consola la tercera marca
console.log(marcas[2]);

//* Añade después del último otro array más con 2 marcas más
marcas[4] = ['BMW', 'Citroen']
console.log(marcas);

//* Quiero en consola la segunda marca de est nuevo array pequeñito
console.log(marcas[4][1]);

//* duplica el array de marcas en una nueva variable
// const copiaArray = [...marcas];
const copiaArray = [...marcas];
console.log(copiaArray);

//* Modifica el array nuevo en alguna marca y revisa como NO HA CAMBIADO EL ARRAY INICIAL
copiaArray[0] = 'Nueva Marca';
// console.log(copiaArray);
console.log(`nuevo array --> ${copiaArray}`);
console.log(`antiguo array --> ${marcas}`);

// for (let x = 0; x < copiaArray.length; x++) {
//     const element = copiaArray[x];
//     console.log(element);
//     if (Array.isArray(element)) {
//         for (let y = 0; y < element.length; y++) {
//             console.log(element[y]);
//         }
//     }
// }

for (const element of copiaArray) {
    console.log(element);
    if (Array.isArray(element)) {
        for (const subelement of element) {
            console.log(subelement);
        }
    }

}