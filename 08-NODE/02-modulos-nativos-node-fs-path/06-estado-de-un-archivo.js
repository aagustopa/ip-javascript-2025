import fs from 'node:fs';
import path from 'node:path';

const files = fs.readdirSync('.');

//* Estado de un archivo
const packageJson = fs.statSync('./package.json');
const assetsDir = fs.statSync('./assets');

console.log(packageJson.size);
console.log(packageJson.isFile());
console.log(packageJson.isDirectory());

console.log(assetsDir.isFile());
console.log(assetsDir.isDirectory());

//* Ahora ya podemos hacer cosas segun sea un archivo o una carpeta

let fileCount = 0;
let folderCount = 0;
files.forEach((path) => {
  const fileStat = fs.statSync(path);
  if (fileStat.isFile()) {
    fileCount++;
  } else if (fileStat.isDirectory()) {
    folderCount++;
  }
});

console.log(
  `Esta carpeta tiene ${fileCount} archivos y ${folderCount} carpetas`
);
