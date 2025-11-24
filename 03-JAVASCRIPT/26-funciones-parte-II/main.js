function sumar (num1, num2) {
  const result = num1 + num2;
  return result;
}



sumar = '😈';



const restar = function (num1, num2) {
  const result = num1 - num2;

  return result;
}

console.log(restar(2, 4));

// restar = '😈';



//****************************************************/
//* A partir de ES6 (ES2015) se creó otra manera de escribir funciones 👉 Arrow functions

const multiplicar = function (num1, num2) {
  return num1 * num2;
}

//             function () {}
const dividir = (num1, num2) => {
  return num1 / num2;
}


//* Si solo hay un parámetro, te permiten quitar los paréntesis
//! Cuando empezáis esto NO ES RECOMENDABLE

const saludar = nombre => {
  console.log('Hola, ' + nombre);
}

saludar('Ivan');

//* Si no tuviera ningún parámetro, podéis ver ocasiones en que se usa un guión bajo en lugar de los parentesis
//! Cuando empezáis esto NO ES RECOMENDABLE

const saludito = _ => {
  console.log('Hola, holita');
}

saludito();


//* Si lo que hay dentro de las llaves es solo UNA LÍNEA DE EJECUCIÓN, te permite QUITAR LAS LLAVES

const buenosDias = (nombre) => console.log('Buenos días, ' + nombre);

buenosDias('Albert');


//* Si esa única línea de ejecución ENCIMA ES UN RETURN, NO HACE FALTA QUE ESCRIBAS EL RETURN

const suma = (a, b) => a + b;



//! Las funciones flecha NO SE PUEDEN USAR ANTES DE CREARLAS, a diferencia de las function que SÍ SE PUEDE

resta(2, 5);
const resta = (a, b) => a - b;




