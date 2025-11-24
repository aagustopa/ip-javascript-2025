//? Operador ternario

//* Se puede usar como un if....else simplificado, pero NO LO RECOMIENDO

const edad = 25;

if (edad >= 18) {
  console.log('Eres mayor de edad');
} else {
  console.log('No eres mayor de edad');
}

// ahora con un ternario
//! Solo funciona si lo que ejecutas ES UNA SOLA LÍNEA
edad >= 18 
  ? console.log('Eres mayor de edad') 
  : console.log('No eres mayor de edad');

//****************************************************/
//****************************************************/
//* Donde yo lo usaría SÍ o SÍ es siempre que necesite en algún lugar "UN VALOR O OTRO DEPENDIENDO DE UNA CONDICIÓN";


//* Cuando creamos una variable, puede guardarle un valor o otro dependiendo de una condición

const isMarried = false;

let icon;
if (isMarried) {
  icon = '👰';
} else  {
  icon = '💔';
}

console.log(icon);


const iconTernary = isMarried ? '👰' : '💔';

console.log(iconTernary);


//* Cuando una función retorna UN VALOR O OTRO DEPENDIENDO DE UNA CONDICIÓN

function esPar (num) {
  if (num % 2 === 0) {
    return 'es par';
  } else {
    return 'es impar';
  }
}

function esPar2 (num) {
  return num % 2 === 0 ? 'es par' : 'es impar';
}


//* Dentro de un template literal (string con backticks), si quiero imprimir una cosa o otra dependiendo de una condición

const miEdad = 23;

const stringFinal = `Como tienes ${miEdad} años, ${miEdad >= 18 ? 'eres' : 'no eres'} mayor de edad`;

console.log(stringFinal);


//* Ejercicio
//* Coge la siguiente función y cambia el if...else por un ternario

function joinElementsOfArrayInAString (array, separador = ', ') {
  let stringFinal = '';

  for (let i = 0; i < array.length; i++) {
    const valorDelArray = array[i];
    
    if (i === array.length - 1) {
      stringFinal += valorDelArray;
    } else {
      stringFinal += valorDelArray + separador;
    }  
    

  }

  return stringFinal;
}