//? console.log() 👉 Función de javascript que imprime en consola.
console.log(2);


//* Te permite imprimir varios valores si los separamos con coma
const edad = 38;

console.log("edad -> ", edad);

//* Veréis ejemplos en los que la gente pone una variable en el console log para verla, y la mete entre llaves
console.log({ edad });



//****************************************************/
//* alert() 👉 otra función que en lugar de imprimir en consola, lanza una ventana que tienes que cerrar

const nombre = 'Ivan';

alert(nombre);
console.log('Console después del alert');


//****************************************************/
//* confirm() 👉  igual que el alert, pero puedes dar a aceptar o a cancelar


const haAceptado = confirm("¿Aceptas?");

console.log(haAceptado);


//****************************************************/
//* prompt() 👉  otra función que muestra una ventana, PERO QUE LE PIDE AL USUARIO UN DATO
// ese dato lo podemos guardar en una variable

const edadUsuario = prompt("Dime tu edad");

// Si le das a cancelar o apretas Escape, se guardará --> null
// Si en cambio, le das a aceptar, te guardará lo que sea que hayas escrito
//! si no escribes nada también te devolverá algo, siempre te dará un string, aunque sea vacío


console.log(edadUsuario); 

// Podemos guardar strings vacíos sin problema
const palabraVacia = "";
console.log(palabraVacia);




//****************************************************/

//* Mostrar textos en pantalla que tienen valores de variables

const num1 = 2;
const num2 = 3;

const suma1 = num1 + num2;

//! no quiero resultados en consola feos
console.log(suma1);

//* Prefiero mostrar textos más explicativos
console.log('El resultado de sumar ' + num1 + ' más ' + num2 + ' es igual a ' + suma1);


//* Tenemos otra opción y es usar los backticks en lugar de las comillas normales
console.log(`El resultado de sumar ${num1} más ${num2} es igual a ${suma1}`);


