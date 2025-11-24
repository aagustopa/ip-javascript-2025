"use strict";
//* Declarar tipos de variables AL CREARLAS
Object.defineProperty(exports, "__esModule", { value: true });
let nombre = 'Ivan';
let edad = 38;
let isMarried = true;
let noDefinido = undefined;
let valorNulo = null;
let valorCualquiera = 'hola';
valorCualquiera = 23;
valorCualquiera = true;
const frutas = ['manzana', 'pera', 'limón'];
const ages = [23, 50, 13];
//! En realidad cuando creamos una variable, no necesitamos decirle el tipo
let numero = 20.9876237563;
//! A partir de ahora, todas estas variables NO TE VA A DEJAR QUE LES CAMBIES EL TIPO
// numero = 'hola';
numero = Number(numero.toFixed(2));
//* Cómo tipamos parámetros de una función
function sumar(num1, num2) {
    return num1 + num2;
}
let edad1 = 38;
let edad2 = "33";
const suma1 = sumar(edad1, Number(edad2));
//* Podemos poner parámetros opcionales
sumar(4, 2);
function sumarOpcional(num1, num2) {
    if (num2 !== undefined) {
        return num1 + num2;
    }
    return num1;
}
sumarOpcional(3);
//* Podemos tipar el retorno de una función
function restar(a, b) {
    return a + b;
}
const multiplicar = (a, b) => a * b;
function saludarUsuario(usuario) {
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
let user;
if (isConnected) {
    user = { nombre: 'Ureña', edad: 24 };
}
else {
    user = null;
}
console.log(user);
const albert = {
    nombre: 'Albert',
    genero: 'masculino'
};
const sergi = {
    nombre: 'Sergi',
    genero: "masculino"
};
const profeIvan = {
    nombre: 'Ivan',
    genero: "no-binario"
};
console.log(profeIvan);
