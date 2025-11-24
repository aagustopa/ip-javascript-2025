import fs from 'node:fs';
import fsPromise from 'node:fs/promises';

//* Forma 1: Síncrono (Es decir, se espera a que termine la operación)
// console.log('readFileSync: 1');
const quijoteSync = fs.readFileSync('./assets/quijote-largo2.txt', 'utf-8');
// console.log(quijoteSync);
// console.log('readFileSync: 2');

//* Forma 2: Asíncrona con callbacks

// console.log('readFile: 1');

// fs.readFile('./assets/quijote-corto.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log('❌', err.message);
//     return;
//   }
//   console.log(data);
// });

// console.log('readFile: 2');

//****************************************************/

//* Forma 3: asíncrona con Promises
// console.log('readFilePromise: 1');

// async function leerQuijote() {
//   const quijotePromise = await fsPromise.readFile(
//     './assets/quijote-largo.txt',
//     'utf-8'
//   );

//   console.log(quijotePromise);
// }

// leerQuijote();

// console.log('readFilePromise: 2');
