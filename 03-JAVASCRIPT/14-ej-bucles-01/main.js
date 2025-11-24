/*
//* Ejercicio 1
//* Crea un bucle que imprima por consola la lista de números del 1 al 30, incrementándose de 3 en 3.

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}


for (let i = 3; i <= 30; i += 3) {
  console.log(i);
}


//* Ejercicio 2
//*Utiliza un bucle for para imprimir por la consola la tabla de multiplicar del 8.

for (let i = 1; i <= 10; i++) {
  console.log(`8 x ${i} = ${i * 8}`);
  console.log('8 x ' + i + ' = ' + i * 8);
}


// 8 x 1 = 8
// 8 x 2 = 16
// 8 x 3 = 24
// 8 x 4 = 32


//* Ejercicio 3
//*Escribe un programa que saque una lista de números del 1 al 20 y que indique si el número es par o impar.

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + ' es par');
  } else {
    console.log(i + ' es impar');
  }
}

//* Ejercicio 4
//* Haz un programa que pida una frase al usuario. Utilizando un forof imprimiremos el número total de letras "a" que haya en la frase.


// const frase = prompt('Dime una frase que te cuento las aes que tiene.');
const frase = 'Me encantan las calábÀzas.'


let contadorDeAes = 0;

const typesOfA = 'aáàäâ';
const typesOfVowels = 'aáàäâeéèêëiìïîoòóöôuúùüû';

for (let letra of frase.toLowerCase()) {

  if (typesOfA.includes(letra)) {
    contadorDeAes++;
  }
}

console.log(`Tu frase tiene ${contadorDeAes} aes`);


//* Ejercicio 5
//* Escribe un programa que muestre los números del 1 al 50, con las siguientes excepciones:
  //* Para los múltiplos de 3, muestra en pantalla la palabra "Fizz" en lugar del número.
  //* Para los números múltiplos de 5, muestra en pantalla la palabra "Buzz" en lugar delnúmero.
  //* Para los múltiplos de 3 y 5, muestra en pantalla la palabra "FizzBuzz" en lugar del número.


for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
  else if(i % 3 === 0) console.log('Fizz');
  else if (i % 5 === 0) console.log('Buzz');
  else console.log(i);
}
*/

/*
for (let i = 1; i < 51; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log('buzz');
    } else {
        console.log(i);
    }
}*/