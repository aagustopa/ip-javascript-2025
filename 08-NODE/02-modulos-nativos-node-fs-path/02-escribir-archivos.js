import fs from 'node:fs';
import fsPromise from 'node:fs/promises';

//* Si no existe el archivo, lo crea.
//* Si existe, lo sobreescribe POR DEFECTO.

// fs.writeFileSync('./assets/to-dos.txt', 'Escribir un libro\n', {
//   encoding: 'utf-8',
// });

//* Si le cambiamos la flag a 'a' (append), no sobreescribe, sino que añade debajo
fs.writeFileSync('./assets/to-dos.txt', 'Leer una revista\n', {
  encoding: 'utf-8',
  flag: 'a',
});

//* También puedes usar el método appendFile para añadir en lugar de sobreescribir

fs.appendFileSync('./assets/to-dos.txt', 'Pasear a las perras\n', {
  encoding: 'utf-8',
});
