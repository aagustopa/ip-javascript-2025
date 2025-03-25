//? Operadores matemáticos


//* sumar o concatenar 👉  +


// suma sobretodo cuando usamos números
const num1 = 2;
const num2 = 4;

const suma1 = num1 + num2;

console.log('num1 + num2 ->', suma1);


// concatena sobretodo cuando usamos textos

const palabra1 = 'hola';
const palabra2 = 'mundo';

const suma2 = palabra1 + ' ' + palabra2;

console.log('suma2 ->', suma2);


//! cosas extrañas con el signo +

console.log('2 + 2 ->', 2 + 2);
//* CUANDO SUMAMOS, siempre que uno de los dos lados de una suma sea un string, javascript va a intentar convertir el otro lado en un string
console.log("2 + \"2\" ->", 2 + '2');
console.log('2 + "2" ->', 2 + '2');

//* si intentamos sumar true o false con numeros veremos que true = 1 y false = 0
console.log('true + 2 ->', true + 2);


//****************************************************/

//* Restar  👉     -

const resta1 = num1 - num2;

console.log('resta1 ->', resta1);

//! cosas raras del signo - y de todos los que faltan

console.log('3 - 2 ->', 3 - 2);

//* siempre que uno de los lados no sea un número pero el otro si, ya sea que restemos, multipliquemos, dividamos o hagamos el módulo, JavaScript intentará convertir el que no es un Number en un Number
console.log('3 - "2" ->', 3 - '2'); // 1

console.log('4 - true ->', 4 - true); // 3
console.log('4 - false ->', 4 - false); // 4
console.log('4 - null ->', 4 - null); // 4

//! Cuando JaVascript no puede convertir algo a Number e intenta hacer la operación que le decimos, nos puede dar NaN = Not a Number.
console.log('4 - "hola" ->', 4 - 'hola'); // NaN


//****************************************************/

//* Multiplicar 👉    *

const multiplicacion1 = num1 * num2;

console.log('multiplicacion1 ->', multiplicacion1); // 8

//****************************************************/
//* Potencia 👉  **

const tresAlCubo = 3 ** 3;

console.log('tresAlCubo ->', tresAlCubo);


//****************************************************/
//* Dividir 👉    /

const division1 = num2 / num1;
const division2 = num1 / num2;

console.log('division1 ->', division1);
console.log('division2 ->', division2);




//****************************************************/

//* Módulo  👉  %
//* El módulo es un operador que lo único que me da es el resto de una división


console.log('10 % 3 ->', 10 % 3); // 1
console.log('50 % 2 ->', 50 % 2); // 0

// Lo usmamos para saber si un número es multiplo de otro. Ej:  355 % 5  --> si da 0, es múltiplo, si no da cero no lo es


// Si nos llevamos esto al mínimo ejemplo. Si quiero saber si un número es múltiplo de 2, es decir SI ES PAR pues haremos el módulo de 2 y si da 0, es par.
const numeroAleatorio = 932876238756537;

console.log('numeroAleatorio % 2 ->', numeroAleatorio % 2);








