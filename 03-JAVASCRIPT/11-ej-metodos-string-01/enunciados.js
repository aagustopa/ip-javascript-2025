//? Ejercicios rápidos métodos string
const miFrase = 'Me encanta JavaScript 😃'

//* guardad en una variable el texto en minúsculas y la mostrais en consola
const minuscula = miFrase.toLowerCase();
console.log(minuscula);

//* que salga en consola la posición donde empieza la palabra "JavaScript"
console.log(miFrase.indexOf('J'));

//* que salga en consola solo la palabra "JavaScript" sin el emoticono
const javascriptWord = miFrase.slice(11, 21);
console.log(javascriptWord);

//* guarda en una variable un array con todas las palabras por separado
const words = miFrase.split(' ');
console.log(words);

//* Si la frase tiene el texto '😢' 
// que aparezca en consola el texto "No estés triste" 
//y si no, 
// que ponga "¡Eso es que estás contento"
if (miFrase.includes('😢')) {
    console.log('dont be sad');
} else {
    console.log(`glad you're happy`);
}

//* Guarda en una variable el trozo de texto que va desde la posición 2 hasta donde empieza "JavaScript" y le quitas los espacios delante y detrás.

// console.log(miFrase.indexOf(' '));
// console.log(miFrase.indexOf(' J'));
const wordPosition = miFrase.slice(2, 10);
// console.log(wordPosition);
console.log(wordPosition.trim(' '));

// ***************************************************************

const horas = "";
const minutos = 22;
const segundos = 20;

if (horas < 11 || horas > 0) {
    const addingZero = horas.padStart(2, "0");
    console.log(`son las ${addingZero} horas`);
} else {
    console.log(`son las ${horas} horas, sin usar padStart`);
}


// const userTime = null;
// const hora = prompt('que hora es?');
// const minuto = prompt('que minuto es?');
// const segundos = prompt('que segundo es?');

// let convertHora = Number(hora);
// let convertMinuto = Number(minuto);
// let convertSegundos = Number(segundos);

// const checkingTime = (segundos) => {
//     const plusSecond = segundos + 1;
//     if (plusSecond > 59) {
//         convertMinuto++;
//         convertSegundos = 0;
//         console.log(`como son más de 60 segundos entonces sumo minuto y queda a ${convertMinuto} minutos`);
//         if (convertMinuto > 59) {
//             convertHora++;
//             convertMinuto = 0;
//             console.log(`pero como eran más de 60 minutos entonces sumo una hora y queda a ${convertHora} horas`);
//             if (convertHora > 23) {
//                 convertHora = 0;
//                 console.log(`PEEERO como eran más de 24 horas entonces vamos a la madrugada y queda ${convertHora} horas`);

//             }
//         }
//     }
// }

// if (convertHora < 0 || convertHora > 23) {
//     console.log('has puesto una hora incorrecta');
// } else if (convertMinuto < 0 || convertMinuto > 59) {
//     console.log('has puesto un minuto incorrecto');
// } else if (convertSegundos < 0 || convertSegundos > 59) {
//     console.log('has puesto un segundo incorrecto');
// } else {
//     checkingTime(convertSegundos);
//     console.log(`Son las ${convertHora} horas ${convertMinuto} minutos y ${convertSegundos} segundos`);
// }