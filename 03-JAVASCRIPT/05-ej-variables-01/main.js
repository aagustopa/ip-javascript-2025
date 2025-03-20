// ejercicios VARIABLES
/*1*/
const horas = 24;
const minutos = 60;
const segundos = 60;
const multiplicacion = horas * minutos * segundos;
const resultado = multiplicacion;
console.log(`un día tiene ${resultado} segundos`);
/*2*/
const euros = 7;
// const euros = prompt('euros a convertir a dolar');
const conversion = 1.0845187;
const calculo = euros * conversion;
console.log(`la conversión es ${calculo}$ dolares`);

/*3*/
const precio = 135;
// const precio = prompt("cual es el precio?");
const IVA = 21;
const calculoIva = (precio * IVA) / 100;
const stringToNumber = Number(precio); //also parseInt (numeros enteros) y parseFloat (todo tipo de numeros incluso decimales)
const precioFinal = stringToNumber + calculoIva;
console.log(`el precio con iva del artículo es de ${precioFinal}€ euros`);
// console.log(`el precio con iva del artículo es de ${precioFinal}€ euros`);