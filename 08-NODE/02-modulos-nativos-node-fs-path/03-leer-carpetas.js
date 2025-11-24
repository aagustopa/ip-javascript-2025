import fs from 'node:fs';

const files = fs.readdirSync('./assets');
console.log(files);

// files.forEach((file) => {
//   const data = fs.readFileSync(file, 'utf-8');
//   console.log('--------------------');
//   console.log(data);
//   console.log('--------------------');
// });
