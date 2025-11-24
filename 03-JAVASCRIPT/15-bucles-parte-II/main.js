//? Bucles - parte II

//* while 👉 Yo usaría un While, SOLO CUANDO NO SEPA CUÁNTAS VUELTAS TIENE QUE DAR EL BUCLE


//* Solo tiene sentencia de condición. Mientras se cumpla, seguirá dando vueltas

//! Si no se cumple la condición, NO SE EJECUTARÁ NI SIQUIERA LA PRIMERA VEZ
/* 
let i = 1;
while (i <= 5) {
  console.log(i);

  i++;
}
 */

/* 
let numeroUsuario;

while (isNaN(numeroUsuario)) {
  numeroUsuario = prompt('Dime un número')
}

if (numeroUsuario % 2 === 0) {
  console.log('Es Par');
} else {
  console.log('Es impar');
} */


//****************************************************/
//****************************************************/

//* do...while 👉 Lo mismo que el while, pero la primera vuelta SIEMPRE SE VA A EJECUTAR y LUEGO PREGUNTA LA CONDICIÓN

let password;

do {
  password = prompt('Dime la contraseña');
} while(password !== '1234')

// while (password !== '1234') {
//   password = prompt('Dime la contraseña');
// }