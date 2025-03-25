//? Métodos de los strings

//* Los métodos son funciones que solo pueden usar unos tipos concretos de datos, es decir hay funciones que solo los string pueden usar, otras que solo los number, etc.

//* Antes del primer método, te enseño algo que tambien solo pueden usar los strings, pero es el único que se llama propiedad, no método

//* .length  👉 Para saber la longitud de un texto

let frase = 'Hola, ¿qué áse?';


const longitudFrase = frase.length;
console.log(longitudFrase);

//* Ejemplo de uso de length

const username = 'pericoDeLosPalotes';

if (username.length > 12) {
  console.log('Nombre de usuario demasiado largo');
}


//****************************************************/
//****************************************************/

//* .toLowerCase()  y .toUpperCase()

console.log(frase);

//! Estas funciones (métodos) no MUTAN la variable original, simplemente te DEVUELVEN UN NUEVO STRING QUE TIENES QUE GUARDAR EN ALGUN LADO O SOBREESCRIBIR LA VARIABLE ORIGINAL
const fraseMayusculas = frase.toUpperCase();

console.log(frase);
console.log(fraseMayusculas);


frase = frase.toLowerCase()

console.log(frase);


//* Ejemplo para el ejercicio del menú de la semana

let diaSemana = 'lunES';

diaSemana = diaSemana.toUpperCase();

if (diaSemana.toLowerCase() === 'LUNES') {
  console.log('Hoy hay pescado');
} else if (diaSemana === 'martes') {
  console.log('Hoy hay carne'); 
} else if (diaSemana === 'miercoles' || diaSemana === 'miércoles') {
  console.log('Hoy hay sopa'); 
} else if (diaSemana === 'jueves') {
  console.log('Hoy hay paella'); 
} else if (diaSemana === 'viernes') {
  console.log('Hoy hay pasta'); 
} else if (diaSemana === 'sabado' || diaSemana === 'sábado') {
  console.log('Hoy hay pizza'); 
} else if (diaSemana === 'domingo') {
  console.log('Hoy hay hamburguesa');
} else {
  console.log('Día inválido');
}


//* .trim() 👉 Sirve para eliminar espacios en blanco delante y detras de los textos

const fraseConEspacios = '   hola  ';

console.log(fraseConEspacios.length);

const fraseSinEspacios = fraseConEspacios.trim();

console.log(fraseSinEspacios);
console.log(fraseSinEspacios.length);

//* Ejemplo de uso
// Para evitar que enviemos a una base de datos algun valor que tenga espacios puestos por error
let username2 = ' ivluengo ';

username2 = username.trim();
// enviar a la base de datos


//* otro ejemplo de uso
// Si quieres saber si el usuario te ha escrito algo o ha dejado el campo vacío.

const inputCiudad = '     ';

if ( inputCiudad.trim().length === 0 ) {
  console.log('No dejes el campo vacío.');
}



//****************************************************/
//****************************************************/

//* .indexOf('substring')  👉 Te dice en qué posición se encuentra  un substring dentro de otro


console.log(frase.indexOf('qué'));  // 7
console.log(frase.indexOf(' '));  // 7
console.log(frase.indexOf('?'));  // 7
console.log(frase.indexOf('zapato'));   // -1

//! Siempre te deuvuelve la primera coincidencia

const palabraRara = 'aaaa';
console.log(palabraRara.indexOf('a'));

//****************************************************/
//****************************************************/


//* .includes('substring') 👉  Solo te devuelve true o false si está o no está ese substring en el texto original


console.log(frase.includes('?'));
console.log(frase.includes('hola'));
console.log(frase.includes(' '));
console.log(frase.includes('calabaza'));


//****************************************************/
//****************************************************/

//* .slice() 👉 Sirve para cortar un trozo de texto y guardarlo en otra variable

let saludo = 'Hola, Hermenegildo';

// puedo pasarle índice de donde empieza el corte e indice final
let trozoSaludo = saludo.slice(4, 5);

// si no le pasamos índice final, te corta desde donde le digas hasta el final
trozoSaludo = saludo.slice(6);


console.log(trozoSaludo);
//* la original se queda igual
console.log(saludo);



//****************************************************/
//****************************************************/

//*  .split()  👉   Coge un string y lo divide en partes
//! Te pone todas las partes en un nuevo ARRAY

const texto = 'Con cien cañones por banda';

const palabras = texto.split(' ');

console.log(palabras);


//* RESUMEN!!

/*
        .length           👉    longitud
        .toLowerCase()    👉    pasar a minúsculas
        .toUpperCase()    👉    pasar a mayúsculas
        .indexOf()        👉    te da el índice de un substring o -1
        .includes()       👉    te da true o false si se encuentra el substring
        .slice()          👉    te da un corte de un texto
        .split()          👉    te crea un array con trozos de un string con el separador que le des

*/

