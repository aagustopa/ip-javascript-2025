// BUCLES 06
let numero = 100;
while (numero < 50 || numero > 100) {
    console.log('Tienes que introducir numeros entre 50 y 100');
    break;
}
console.log('good boy');

// BUCLES 07
let userNumber = 11;
console.log(`tienes que introducir un numero entre el 2 y el 10`);
while (userNumber >= 2 && userNumber <= 10) {
    console.log(`table de multiplicar del ${userNumber}`);
    for (let i = 1; i < 11; i++) {
        console.log(`${userNumber} x ${i} : ${userNumber * i} `);
    }
    break;
}

// BUCLES 08

let star = '';
for (let i = 0; i < 8; i++) {
    star += '*'
    console.log(star);
}

// BUCLES 09
const numeros = [10, 2, -2, 90, 0, -10, 3, 0, -21, 4];
let contadorNeg = 0;
let contadorSum = 0;
let contadorZero = 0;
if (numeros.includes(Number())) {
    console.log(`aqui hay numeros`);
    for (const checking of numeros) {
        if (checking < 0) {
            contadorNeg++;
        }
        if (checking >= 0) {
            contadorSum++;
        }
        if (checking === 0) {
            contadorZero++;
        }
    }
    // console.log(`so look, \n numeros positivos: ${contadorSum} \n numeros negativos: ${contadorNeg} \n numeros cero: ${contadorZero}`);
} else {
    console.log(`aqui no hay numeros`);

}

// BUCLES 10
// const secretNumber = 29;
const secretNumber = Math.floor((Math.random() * 100) + 1);
const tries = 6;
let intentos = 0;
const userInput = 90;
console.log(`numero secreto: ${secretNumber}`);
// if (userInput === secretNumber) {
//     console.log(`nailed`);
// } else {
//     console.log(`nice try`);
//     intentos++;
//     console.log(`intentos ${intentos}`);
//     if (userInput < secretNumber) {
//         console.log(`apunta mas alto`);
//     } else {
//         console.log(`apunta mas bajo`);
//     }
//     if (intentos === tries) {
//         console.log(`no more tries, you are done`);
//     }
// }

do {
    if (userInput === secretNumber) {
        console.log(`nailed`);
    } else {
        console.log(`nice try`);
        intentos++;
        console.log(`intentos ${intentos}`);
        if (userInput < secretNumber) {
            console.log(`apunta mas alto`);
        } else {
            console.log(`apunta mas bajo`);
        }
        // if (intentos === tries) {
        //     console.log(`no more tries, you are done`);
        // }
    }
} while (!intentos === 6)