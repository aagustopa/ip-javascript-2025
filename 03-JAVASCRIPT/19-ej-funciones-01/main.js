console.log('hi');

const first = (number1, number2) => {
    console.log(`these are your numbers ${number1} & ${number2}`);
    if (number1 === number2) {
        console.log(`both numbers are the same numbers`);
    } else if (number1 > number2) {
        console.log(`first number (${number1}) is bigger than second number (${number2})`);
    } else {
        console.log(`second number (${number2}) is bigger than first number (${number1})`);
    }
}

// first(10, 80);

let areEqual = false;

const second = (firstNumber, secondNumber) => {
    if (firstNumber === secondNumber) {
        areEqual = true;
        console.log(areEqual);
    } else {
        console.log(areEqual);
    }
}

// second(20, 20);

const third = (string) => {
    console.log(string.charAt(0).toUpperCase() + string.slice(1));
}

// third('banana');


const frutas = ['Platanos', 'Bananas', 'Pinas', 'Manzanas', 'Peras', 'Uvas', 'Pomelos'];

// const fourth = (valor, array) => {
const fourth = (valor, array) => {
    // const lowerCase = frutas.map(v => v.toLocaleLowerCase())
    // const hasValue = array.includes(valor);
    // console.log(hasValue);
    // console.log(array.indexOf(valor));
    // for (let i = 0; array.length; i++) {
    //     const valorArray = array[i];
    //     if (valorArray === valor) {
    //         console.log('encontrado');
    //         return i;
    //     } else {
    //         return -1;
    //     }
    // }
    for (let i = 0; i < array.length; i++) {
        const valorArray = array[i];
        console.log(valorArray);
        // if (valorArray === valor) {
        //     console.log(`encontrado`);
        //     return i;
        // } else {
        //     return -1;
        // }
    }
    // return -1;
    // for (const valorArray in frutas) {
    // for (const [valorArray, posicion] of frutas) {
    // console.log(valorArray);
    // if (valorArray === valor) {
    // return posicion;
    // console.log(`encontrado`);
    // } else {
    // return -1;
    // }
    // }
    // return -1;
}
const checkExercice = fourth("Manzanas", frutas);
console.log(checkExercice);

// fourth("Platanos", frutas);

const fifth = (separacion) => {
        let palabras = '';
        for (let i = 0; i < frutas.length; i++) {
            const valor = frutas[i];
            // if (i === frutas.length - 1) {
            //     palabras += valor;
            // } else {
            //     palabras += valor + `${separacion}`;
            // }
            // i === frutas.length - 1 ? palabras += valor + " " : palabras += valor + `${separacion}`;
            palabras += (i === frutas.length - 1) ? valor : valor + `${separacion}`
        }
        console.log(palabras);
        // return palabras;
    }
    // fifth(", ");
const sixth = (array) => {
        let arrayInvertido = [];
        for (let x = array.length - 1; x >= 0; x--) {
            const valor = array[x];
            arrayInvertido.push(valor)
                // console.log(arrayInvertido);
                // if (frutas[x] === undefined) {
                //     // debugger
                //     console.log(`valor undefined detectado en la posicion ${x}`);
                // }
        }
        return arrayInvertido;
    }
    // sixth();
    // const arrayReverse = sixth(frutas);
    // console.log(arrayReverse);



let userAnswer = '';

function isTextNumeric(text, text2) {
    let isNumeric = true;
    // VALIDAR SI ES NULL TAMBIEN
    // text=== null
    if ((isNaN(text) === true || isNaN(text2) === true) || (text === '' || text2 === '')) {
        isNumeric = false;
    }

    return isNumeric;
}
const sumar = (num1, num2) => {
    console.log(`resultado suma ${Number(num1) + Number(num2)}`);
}
const restar = (num1, num2) => {
    console.log(`resultado resta ${Number(num1) - Number(num2)}`);
}
const multiplicar = (num1, num2) => {
    console.log(`resultado multiplicacion ${Number(num1) * Number(num2)}`);
}
const dividir = (num1, num2) => {
    console.log(`resultado division ${Number(num1) / Number(num2)}`);
}
const expo = (num1, num2) => {
    console.log(`resultado exponencial ${Number(num1) % Number(num2)}`);
}
const porcentaje = (num1, num2) => {
    // console.log(`resultado porcentaje ${(Number(num2) - Number(num1) / (Number(num1)) * 100)}`);
    console.log(`resultado porcentaje ${num1 * (100 / num2)}`);
    //num2 tiene que ser valor entre 0 y 100
}

const guinda = () => {

    do {
        userAnswer = prompt(`welcome to the calculator
        select what you want to do
        (s) sumar
        (r) restar
        (m) multiplicar
        (d) dividir
        (e) exponencial
        (p) porcentaje
        (x) salir`)
        if (userAnswer === 's') {
            let valorS1 = prompt('primer valor para sumar');
            let valorS2 = prompt('segundo valor para sumar');
            // USAR WHILE EN VEZ DE IF-ELSE
            while (!isTextNumeric(valorS1, valorS2)) {
                console.log(`SUMA: has escrito texto cuando era numero, vuelve a escribir`);
                valorS1 = prompt(`has escrito letra o vacio en este primer valor, tiene que ser un numero`);
                valorS2 = prompt(`has escrito letra o vacio en este segundo valor, tiene que ser numero`)
            }
            sumar(valorS1, valorS2)
        } else if (userAnswer === 'r') {
            let valorR1 = prompt('primer valor para restar')
            let valorR2 = prompt('segundo valor para restar')
            while (!isTextNumeric(valorR1, valorR2)) {
                console.log(`RESTA: has escrito texto cuando era numero, vuelve a escribir`);
                valorR1 = prompt(`has escrito letra o vacio en este primer valor, tiene que ser un numero`);
                valorR2 = prompt(`has escrito letra o vacio en este segundo valor, tiene que ser numero`)
            }
            restar(valorR1, valorR2)
        } else if (userAnswer === 'm') {
            let valorM1 = prompt('primer valor para multiplicar')
            let valorM2 = prompt('segundo valor para multiplicar')
            while (!isTextNumeric(valorM1, valorM2)) {
                console.log(`MULTIPLICAR: has escrito texto cuando era numero, vuelve a escribir`);
                valorM1 = prompt(`has escrito letra o vacio en este primer valor, tiene que ser un numero`);
                valorM2 = prompt(`has escrito letra o vacio en este segundo valor, tiene que ser numero`)
            }
            multiplicar(valorM1, valorM2)
        } else if (userAnswer === 'd') {
            let valorD1 = prompt('primer valor para dividir')
            let valorD2 = prompt('segundo valor para dividir')
            while (!isTextNumeric(valorD1, valorD2)) {
                console.log(`DIVIDIR: has escrito texto cuando era numero, vuelve a escribir`);
                valorD1 = prompt(`has escrito letra o vacio en este primer valor, tiene que ser un numero`);
                valorD2 = prompt(`has escrito letra o vacio en este segundo valor, tiene que ser numero`)
            }
            dividir(valorD1, valorD2)
        }
        // else if (userAnswer === 'e') {
        //     const valorE1 = prompt('primer valor para calcular exponencial')
        //     const valorE2 = prompt('segundo valor para calcular exponencial')
        //     if (isTextNumeric(valorE1, valorE2)) {
        //         expo(valorE1, valorE2)
        //     } else {
        //         console.log(`tienes que usar numeros`);
        //     }
        // } else if (userAnswer === 'p') {
        //     const valorP1 = prompt('primer valor para calcular porcentaje')
        //     const valorP2 = prompt('segundo valor para calcular porcentaje')
        //     if (isTextNumeric(valorP1, valorP2)) {
        //         porcentaje(valorP1, valorP2)
        //     } else {
        //         console.log(`tienes que usar numeros`);
        //     }
        // }
    } while (userAnswer !== 'x' && userAnswer !== null)
}

// guinda();