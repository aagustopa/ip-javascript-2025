function sumar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function restar(a, b) {
  return a - b;
}

function dividir(a, b) {
  return a / b;
}

//* Exportar con ES Modules
// export { sumar, multiplicar, restar, dividir };

//* Exportar con CommonJS

module.exports = { sumar, multiplicar, restar, dividir };
