const fruits = ['🍎', '🍐', '🍌'];
const nums = [2, -5, 13, 23];
const nombre = 'Ivan';


//? Para saber si una variable guarda un array usamos Array.isArray()


console.log('Array.isArray(fruits) ->',Array.isArray(fruits));
console.log('Array.isArray(nombre) ->',Array.isArray(nombre));


//? Propiedad length 👉 Te da la longitud del array

console.log('fruits.length ->', fruits.length);
console.log('nums.length ->', nums.length);

//! Los siguientes 4 métodos MUTAN EL ARRAY ORIGINAL
//* .push() 👉 Para añadir uno o varios elementos AL FINAL DEL ARRAY


console.log(fruits);

// puedes meter un elemento
fruits.push('🍓');

// o tantos como quieras separados por coma
fruits.push('🍉', '🍈');

console.log(fruits);

//* .pop() 👉 Para sacar UN ELEMENTO DEL FINAL

fruits.pop();
fruits.pop();
fruits.pop();

console.log(fruits);

//* .unshift() 👉 Para añadir uno o varios elementos AL PRINCIPIO DEL ARAY

fruits.unshift('🍓');
fruits.unshift('🍉', '🍈');

console.log(fruits);

//* .shift() 👉 Para sacar un elemento DE DELANTE DEL ARRYA

fruits.shift();
fruits.shift();
fruits.shift();

console.log(fruits);




//* .indexOf(valor)  👉 Te dice el índice que tiene el valor que le has pasado dentro del array si existe. Si no existe te da -1

console.log(fruits.indexOf('🍐'));
console.log(fruits.indexOf('🍍')); // -1

console.log(nums.indexOf(20));
console.log(nums.indexOf(13));


//* .includes(valor) 👉 Solo devuelve true o false si el valor que le pasas está dentro del array o no

console.log(fruits.includes('🍌'));
console.log(fruits.includes('🍑'));

//****************************************************/
//****************************************************/

//! otro que también muta el array original
//* .reverse() 👉 Invierte el orden del array

console.log(fruits);

//! ojo porque allá donde lo pongas lo muta!!!
console.log(fruits.reverse());
fruits.reverse();

console.log(fruits);

//? ¿Y cómo hago para obtener un array invertido y no mutar el original?

const fruitsReversed = [...fruits].reverse();

console.log(fruits);
console.log(fruitsReversed);


//* Por suerte, JavaScript ha sacado unos nuevos métodos que HACEN LO MISMO QUE ANTIGUOS MÉTODOS pero NO MUTAN

//* .toReversed()

const frutasInvertidas = fruits.toReversed();

console.log(fruits);
console.log(frutasInvertidas);



//****************************************************/
//****************************************************/

const frase = 'Con cien cañones por banda';

const palabras = frase.split(' ');
console.log(palabras);

//* .join() 👉 Hace lo inverso que el split. Es decir COGE UN ARRAY y genera un nuevo STRING juntándolos con el separador que le pases


const fraseConGuiones = palabras.join('-');
console.log(fraseConGuiones);

//****************************************************/

//* .slice(start, end) 👉 Coge una copia de un trozo de array y te lo guarda en una variable
//* copia, NO MUTA
const edades = [23, 20, 45, 50, 33];

const trozoEdades = edades.slice(1, 3);

console.log(trozoEdades);
console.log(edades);

//* .splice() 👉 HAce lo mismo PERO RECORTA EL ORIGINAL
//! el primero es el índice, y el segundo CUANTOS TE QUIERES LLEVAR
edades.splice(1, 3);

console.log(edades);

//* EXTRA!! Si le pasas un tercer parámetro, lo meterá en la posición donde has cortado los elementos

//! si pones un 0', no se lleva nada y coloca en ese lugar lo que le digas
edades.splice(1, 0, '🐕');

console.log(edades);


//****************************************************/

/* 
    RESUMEN

    Array.isArray(valor)        true o false si es un array
    length                      Devuelve la longitud del array


    .push(valores)              añade los valores al final
    .unshift(valores)           añade los valores al principio
    .pop()                      quita el valor del final
    .shift()                    quita el valor del prinipio


    .indexOf(valor)             te devuelve el índice del valor dentro del array o -1
    .includes(valor)            true o false si se encuentra el valor en el array
    .reverse()                  MUTA EL ORIGINAL invirtiéndolo
    .toReversed()               te da un array duplicado invertido SIN MUTAR
    .join(SEPARADOR)            te genera un nuevo string a partir de un array
    
    
    .slice(start, end)          te da una copia de un trozo de un array
    .splice(start, cantidad)    quita del array original los que le digas
    
    
    .splice(start, cantidad, valores)    quita del array original los que le digas y añado los
                                         valores
*/