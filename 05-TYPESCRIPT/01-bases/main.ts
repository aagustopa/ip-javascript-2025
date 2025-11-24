//* Declarar tipos de variables AL CREARLAS

let nombre: string = 'Ivan';
let edad: number = 38;
let isMarried: boolean = true;
let noDefinido: undefined = undefined;
let valorNulo: null = null;

let valorCualquiera: any = 'hola';
valorCualquiera = 23;
valorCualquiera = true;

const frutas: string[] = ['manzana', 'pera', 'limón'];
const ages: number[] = [23, 50, 13];


//! En realidad cuando creamos una variable, no necesitamos decirle el tipo
let numero: number = 20.9876237563;

//! A partir de ahora, todas estas variables NO TE VA A DEJAR QUE LES CAMBIES EL TIPO

// numero = 'hola';

numero = Number(numero.toFixed(2)); 


//* Cómo tipamos parámetros de una función

function sumar (num1: number, num2: number) {
  return num1 + num2;
}

let edad1 = 38;
let edad2 = "33";

const suma1 = sumar(edad1, Number(edad2));


//* Podemos poner parámetros opcionales

sumar(4, 2);

function sumarOpcional (num1: number, num2?: number) {
  
  if (num2 !== undefined) {
    return num1 + num2;
  }

  return num1;
}

sumarOpcional(3);


//* Podemos tipar el retorno de una función

function restar (a: number, b: number): number {
  return a + b;
}

const multiplicar = (a: number, b: number): number => a * b;


//****************************************************/
//****************************************************/

interface Usuario {
  nombre: string;
  edad: number;
}



function saludarUsuario (usuario: Usuario) {
  console.log(`¡Hola, ${usuario.nombre}, tienes ${usuario.edad} años!`);
}

const ivan = {
  edad: 38,
  nombre: 'Ivan'
};


saludarUsuario(ivan);


//****************************************************/
//****************************************************/

//* Un valor puede tener más de un tipo de dato, para ello usamos union types usando el |
const isConnected = true;
let user: Usuario | null;

if (isConnected) {
  user = {  nombre: 'Ureña', edad: 24 };
} else {
  user = null;
}

console.log(user);

//****************************************************/
//****************************************************/

//* Podemos usar valores literales para tipar

interface Estudiante {
  nombre: string;
  genero: "masculino" | "femenino" | "no-binario";
}

const albert: Estudiante = {
  nombre: 'Albert',
  genero: 'masculino'
};

const sergi: Estudiante = {
  nombre: 'Sergi',
  genero: "masculino"
}


//* Podemos crear tipos NUEVOS usando type, por ejemplo muy util para guardar unions (uno | otro | otro)

// type Genero = "masculino" | "femenino" | "no-binario";

// interface Profesor {
//   nombre: string;
//   genero: Genero;
// }

import { Profesor } from './config/types';

const profeIvan: Profesor = {
  nombre: 'Ivan',
  genero: "no-binario"
}

console.log(profeIvan);