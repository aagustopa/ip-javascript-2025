// import { multiply, add } from './utils/math-operations.js';
// import module from './utils/math-operations.js';

import modulo, { multiply, add } from './utils/math-operations.js';
import myPrompt from './utils/ask-and-check-number.js';

const numero1 = myPrompt('Dame un número');
const numero2 = myPrompt('Dame otro número');

// const numero1 = 5;
// const numero2 = 7;

const multi1 = multiply(numero1, numero2);
const add1 = add(numero1, numero2);
const module1 = modulo(numero1, numero2);

console.log(multi1);
console.log(add1);
console.log(module1);