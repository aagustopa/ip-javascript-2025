// condicionales
// EJERCICIO 01
// const score = prompt("nota del examen?");
// const score = undefined;
// const scorepassed = 5;

// if (Number(score) && (score < 0 && score > 10)) {
// if (Number(score)) {
//     if (score > scorepassed) {
//         console.log(`you've passed, congrats!`);
//     } else if (score === scorepassed) {
//         console.log(`you've barely passed`);
//     } else if (score < 5) {
//         console.log(`you failed`);
//     }
// } else {
//     console.log("tienes que escribir una nota con numeros y del 1 al 10");
// }

// EJERCICO 02
// const intNumber = null;
// const parImpar = intNumber % 2;
// const multiplo = intNumber % 5;

// if (intNumber >= 0) {
//     console.log(`positive number`);
// } else if (intNumber <= 0) {
//     console.log(`negative number`);
// }
// if (parImpar === 0) {
//     console.log(`el numero es par`);
// } else {
//     console.log(`el numero es impar`);
// }
// if (multiplo === 0) {
//     console.log(`es multiplo de 5`);
// } else {
//     console.log(`NO es multiplo 5`);
// }
// if (intNumber > 100) {
//     console.log(`mayor que 100`);
// } else if (intNumber < 100) {
//     console.log(`menor que 100`);
// } else if (intNumber === 100) {
//     console.log(`igual a 100`);
// }
// EJERCICIO 03
// const edad = 66;
// if (edad < 6) {
//     console.log(`entrada gratuita`);
// } else if (edad >= 6 && edad <= 13) {
//     console.log(`tu entrada cuesta 4€`);
// } else if (edad >= 14 && edad <= 65) {
//     console.log(`tu entrada cuesta 7€`);
// } else if (edad > 65) {
//     console.log(`entrada gratuita`);
// }
// EJERCICIO 04
// const weekDay = prompt("que día de la semana es hoy?");

// const options = {
//     lunes: 'Hoy hay arroz con pollo',
//     martes: 'Hoy hay patata con tofu y huevos',
//     miercoles: 'Hoy hay cuscus con pollo',
//     jueves: 'Hoy hay seitán',
//     viernes: 'Hoy hay patata con carne',
//     sabado: 'Hoy hay pescado',
//     domingo: 'Hoy hay tortilla',
// }

// if (Number(weekDay)) {
//     console.log(`tienes que escribir un texto`);
// } else {
//     console.log(options[weekDay]);
// }

// EJERCICIO 05
// const month = {
//     1: '31 días',
//     2: '28 días',
//     3: '31 días',
//     4: '30 dias',
//     5: '31 dias',
//     6: '30 dias',
//     7: '31 dias',
//     8: '31 dias',
//     9: '30 dias',
//     10: '31 dias',
//     11: '30 dias',
//     12: '31 dias',
// }

// const currentMonth = prompt('Escoge un mes con números del 1 a 12');
// const stringToNumber = Number(currentMonth);

// if (stringToNumber >= 1 && stringToNumber <= 12) {
//     console.log(`el mes seleccionado tiene ${month[currentMonth]}`);
// } else {
//     console.log(`tienes que seleccionar un mes entre 1 y 12`);
// }

// EJERCICIO 06

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