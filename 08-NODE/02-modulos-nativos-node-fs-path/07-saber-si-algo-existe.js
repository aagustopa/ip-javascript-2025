import fs from 'node:fs';
import path from 'node:path';

const rutaArchivo = path.join('assets', 'imagenes', 'texto.txt');

if (fs.existsSync(rutaArchivo)) {
  fs.rmSync(rutaArchivo);
} else {
  fs.writeFileSync(rutaArchivo, 'Hola qué ase\n');
}
