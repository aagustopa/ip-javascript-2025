//? Math 👉 Es un objeto que ya viene con JavaScript que nos sirve para hacer cosas matemáticas


//* Math tiene algunas constantes muy conocidas como PI

const PI = Math.PI;
console.log(PI);


//* Raíz cuadrada 👉 Math.sqrt()

const num1 = 144;

console.log('Math.sqrt(144) -> ', Math.sqrt(num1));


//* Redondear un número al entero más cercano 👉 Math.round();

console.log('Math.round(5.3) -->', Math.round(5.3))
console.log('Math.round(5.6) -->', Math.round(5.6))


//* Redondear SIEMPRE A LA BAJA 👉 Math.floor()
console.log('Math.floor(5.3) -->', Math.floor(5.3))
console.log('Math.floor(5.999) -->', Math.floor(5.999))


//* Redondear SIEMPRE AL ALZA   👉 Math.ceil()
console.log('Math.ceil(5.1) -->', Math.ceil(5.1))
console.log('Math.ceil(5.9) -->', Math.ceil(5.9))


//* Saber el número más grande de una serie de números 👉 Math.max()
console.log('Math.max(5, -3, 20, 7, 15) -->', Math.max(5, -3, 20, 7, 15));

//* Saber el número MÁS PEQUEÑO de una serie de números 👉 Math.min()
console.log('Math.min(5, -3, 20, 7, 15) -->', Math.min(5, -3, 20, 7, 15));


//! Lo malo, es que Math.max() y Math.min() no aceptan arrays como parámetro, solo listas de números separadas por coma.
//* PEROOOOOO tenemos un truquito


const edades = [30, 23, 45, 12, 5]; // 0x111
const edadesCopy = [...edades]; //0x222    


console.log(Math.max(...edades));
console.log(Math.min(...edades));


//* Un número aleatorio entre 0 y 1  👉 Math.random();

console.log(Math.random());
console.log(Math.random() * 10);  
console.log(Math.ceil(Math.random() * 10));  
console.log(Math.floor(Math.random() * 10) + 1);  


//* Fórmula para obtener un número aleatorio entre un número y otro, ambos incluidos

//* Math.floor(Math.random() * (max - min + 1) + min);

console.log(Math.floor(Math.random() * (47 - 33 + 1) + 33)); 



function randomBetween (min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log(randomBetween(33, 47));


