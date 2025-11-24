//? High Order Function 👉 Funciones de primera clase
//* Son funciones qu reciben como parámetro otra función

function saludo () {
  console.log('hola');
}

function suma (a, b) {
  console.log(a + b);
}

function buenosDias (nombre) {
  console.log('Buenos días, ' + nombre);
}


//****************************************************/

//* Imaginemos que quiero diez veces decir hola


// for (let i = 1; i <= 10; i++) {
//   console.log('hola');
// }


//* Imaginemos que en la misma app necesito a un número sumarle uno 10 veces
/*
let numero = 23;

for (let i = 1; i<= 10; i++) {
  numero += 1;
}

console.log(numero);
*/

//* Si más abajo en la misma app quiero hacer 10 eces otra cosa, tengo que volver a repetir el mismo bucle

//* Así que creo una función que tenga todo aquello que se repita, en este caso el bucle que da 10 vueltas. Y para permitir que aquel que me ejecute me pase líneas de código, lo tendrá que hacer con una función.
/*
function repetir10VecesAlgo (loQueQuieresRepetir) {
  for (let i = 1; i <= 10; i++) {
    loQueQuieresRepetir();
  }
}




repetir10VecesAlgo(saludo);

let otroNumero = 40;

repetir10VecesAlgo(() => { otroNumero += 1 } );

console.log(otroNumero);
*/

//****************************************************/
//****************************************************/
//****************************************************/


//* repetir 10 veces no es un ejemplo muy real. Pero algo que sí hacemos mucho es recorrer elementos, así que para no tener que escribir un bucle for cientos de veces, me voy a crear una función que lo haga por mí, yo solo tengo que pasarle el array

const frutas = ['🍎', '🍓', '🍊'];
const numeros = [2, 4, 6, 8, 10];

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }






function recorredorDeArrays (array, callback) {
  for (let i = 0; i < array.length; i++) {
    const valor = array[i];

    callback(valor, i);  
    
  }
}



//* Quiero recorrer el array y SOLO DECIR HOLA

function imprimirIndicesDeFrutas () {
  console.log('hola');
}

recorredorDeArrays(frutas, imprimirIndicesDeFrutas);




//* Quiero recorrer número y imprimir su índice y su valor

recorredorDeArrays(numeros, (num, i) => { 
  console.log(i, '-->', num);  
});


//* Quiero coger el array de número y multiplicar cada valor suyo por 2

console.log(numeros);

const numerosPorDos = [];

recorredorDeArrays(numeros, (num) => {  
  numerosPorDos.push(num * 2);
});

console.log(numerosPorDos);

//****************************************************/

//? Ya existe una función en JavaScript que hace exactamente eso. Recorre cualquier array, y en el callback te REGALA cada valor, el índice, y el array entero

//* .forEach()

frutas.forEach(( _ , i) => console.log(`Fruta ${i + 1}`));


//* Si quieres hacerlo con una función ya creada, no hay problema

const arrayNumerosTriplicado = [];

function triplicarArrayNumeros (num) {
  arrayNumerosTriplicado.push(num * 3);
}

numeros.forEach(triplicarArrayNumeros);

console.log(arrayNumerosTriplicado);


//* PRÁCTICANDO con ejercicios de antes

const fruits = ['Plátanos', 'Bananas', 'Piñas', 'Manzanas', 'Peras', 'Piñas', 'Uvas', 'Pomelos'];
const nums = [2, 4, -13, 15, 14];
 
//* Funciones 4
//* Crea una función que recibe como parámetro una fruta como string y devuelve la posicion del array donde esté esa fruta.
  //* Si no encuentra el elemento que devuelva -1 ;
  //* Guarda el valor que retorna la función y imprimela en la consola.

function searchIndex (valorABuscar, array) {

  // for (let i = 0; i < array.length; i++) {
  //   const valorDelArray = array[i];

  let index = -1;

  array.forEach((valorDelArray, i) => {
    if (valorDelArray === valorABuscar && index === -1) {    
      index = i;
    } 
  });
  
  // }

 return index;
}

const indexOfPlatanos = searchIndex('Plátanos', fruits);
const indexOfPiñas = searchIndex('Piñas', fruits);

const indexOf15 = searchIndex(15, nums);
const indexOf23 = searchIndex(23, nums);

console.log(indexOfPlatanos);
console.log(indexOfPiñas);

console.log(indexOf15);
console.log(indexOf23);


//****************************************************/

function joinElementsOfArrayInAString (array, separador = ', ') {
  let stringFinal = '';

  // for (let i = 0; i < array.length; i++) {
  //   const valorDelArray = array[i];

  array.forEach((valorDelArray, i) => {
    if (i === array.length - 1) {
      stringFinal += valorDelArray;
    } else {
      stringFinal += valorDelArray + separador;
    }    
  });
    

  return stringFinal;
}

const frutasConComas = joinElementsOfArrayInAString(frutas);

console.log(frutasConComas);