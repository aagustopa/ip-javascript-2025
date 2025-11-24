import fs from 'node:fs';
import path from 'node:path';

const newFolderPath = path.join('assets', 'imagenes');

//! Ojo porque si ya existe va a hacer crash

try {
  fs.mkdirSync(newFolderPath);
} catch (error) {
  console.log('❌', error.message);
}
