/*  Esto es
un comentario
de bloque  */

// comentario de línea


//* Variables
//* Son espacios en memoria que guardarán datos que pueden variar

//? let 👉 Para crear variables que les puedes cambiar el valor más tarde

// sintaxis
// let   nombreDeLaVariable   = (asignar)     valor  punto y coma (opcional)
let                x              =            2          ;
  
let y = 3;

console.log(x);
console.log(y);

console.log(x + y);
console.log("Hola!");

console.log(y); // 3


//* Cuando creo una variable con let, podemos volver a cambiarle su valor
y = "Ivan";

console.log(y); // "Ivan"


//? const 👉 Sirve para crear variables QUE NO SE PUEDEN VOLVER A ASIGNAR O CAMBIAR EL VALOR, serán constantes


const nombre = "Ivan";

console.log(nombre);

// ! No podemos darle un NUEVO VALOR a una constante
// nombre = "carlos";

//* Ante la duda, CREA SIEMPRE CONSTANTES a no ser que NECESITES QUE LA VARIABLE CAMBIE DE VALOR EN ALGÚN MOMENTO


//****************************************************/


//? ¿Cómo podemos nombrar a las varibales

//! NOOO!!
//! const con espacios no = "no";
//! const 23numerosDelanteNo = "no";
//! const con-guiones-no = "no";
const todojuntoyseguido = "no";

//* SI!! 
const conCamelCaseSi = "sí"; /* Yo voy a usar este */
const con_snake_case_tambien = "sí";
const numeros23Despues5DelInicioSi = "si";

const TODO_MAYUSCULAS = "a veces";


//? Qué podemos guardar en una variable 👉 TIPOS DE DATOS

//* Strings (textos) 👉 cadena de texto normal y corriente


const apellido = "Luengo";
const apellido2 = 'Luengo'; // Yo usaré comillas simples

const restaurante = "McDonald's";
const restaurante2 = 'McDonald"s';

// si quisiéramos poner una comilla simple usanod también comillas simples para el string, usamos la barra invertida para "ESCAPAR" el caracter, es decir, decirle que lo trate como texto, y no como inicio o fin de un texto
const restaurante3 = 'McDonald\'s \\';

// Los backticks también sirven para guardar strings
const restaurante4 = `McDonald's`;

console.log(apellido);
console.log(apellido2);
console.log(restaurante);
console.log(restaurante2);
console.log(restaurante3);
console.log(restaurante4);

//****************************************************/

//* Numbers 👉 Cualquier tipo de número es un number

const edad = 38;
const temperatura = 37.5;
const congelacion = -4;

console.log("38");
console.log(edad);

console.log(temperatura);
console.log(congelacion);

//* Boolean 👉 valores que tienen 2 únicas opciones   on/off sí/no  verdadero/falso   true/false


const estoyCasado = true;
const tengoHijos = false;

const isMarried = true;
const hasChildren = false;

console.log("true");
console.log(estoyCasado);


//* undefined 👉 Cuando algo no tiene un valor definido, para javascript eso es undefined


// te lo muestro pero normalmente NUNCA LE PONES undefined A ALGO
const valorNoDefinido = undefined;

console.log(valorNoDefinido);

let variableSinLlenar;

console.log(variableSinLlenar);


//* null 👉 Cuando literalmente TU QUIERES GUARDAR EN UNA VARIABLE "LA NADA";

const valorNulo = null;

console.log(valorNulo);

//****************************************************/
//****************************************************/

//? Cómo puedo preguntar de qué tipo es una variable?
// typeof

console.log(typeof 30); // "number"
console.log(typeof "hola"); // "string"
console.log(typeof true); // "boolean"


console.log(typeof nombre);
console.log(typeof temperatura);
console.log(typeof estoyCasado);
console.log(typeof valorNoDefinido);

//! esto es un error de JavaScript
console.log(typeof valorNulo);




