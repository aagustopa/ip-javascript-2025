import fs from 'node:fs';
import path from 'node:path';

//* Borrar archivos
// const fileToRemovePath = path.join('assets', 'imagenes', 'gato.jpg');
// fs.rmSync(fileToRemovePath);

//* Borrar carpetas
const folderVideosToRemovePath = path.join('assets', 'videos');
const folderImagesToRemovePath = path.join('assets', 'imagenes');
//! Si la carpeta está vacía te deja borrarla sin problema, si no, hay que poner recursive: true
// fs.rmSync(folderVideosToRemovePath);
fs.rmSync(folderImagesToRemovePath, { recursive: true });
