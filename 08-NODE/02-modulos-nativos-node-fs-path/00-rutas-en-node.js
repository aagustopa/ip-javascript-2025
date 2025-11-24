//* Todas las rutas que usemos en node, deberíamos de crearlas con el módula path de node. Simplemente lo hacemos porque en windows, las rutas van con una barra diagonal y en linux y mac con la invertida.

import fs from 'node:fs';
import path from 'node:path';

const rutaLoQueSea = path.join('assets', 'loQueSea.txt');
console.log(rutaLoQueSea);

//! esto no
// fs.writeFileSync('./assets/loQueSea.txt', 'Hola qué ase\n');
fs.writeFileSync(rutaLoQueSea, 'Hola qué ase\n');
