//! No podemos utilizar lo mismo que en un navegador, por ejemplo, no podemos usar alert, prompt, confirm, ni nada que sea de la ventana.

// alert();

//! La forma antifua de hace importaciones de módulos es con require, no con import.

//* Importar con ES Modules
// import { sumar } from './functions.js';

//* Importar con CommonJS

const { sumar } = require('./functions.js');

console.log(sumar(1, 2));
