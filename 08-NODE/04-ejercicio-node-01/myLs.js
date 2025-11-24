import fs, { statSync } from 'node:fs';
import path from 'node:path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(
    import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// const logg = console.log();
// console.log(chalk.blue.bgRed.bold('Hello world!'));

console.log(__dirname);
const stats = fs.statSync(__dirname);

console.log('is file ' + stats.size);

fs.readdir(__dirname, (err, files) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`\nCurrent directory filenames`);
        files.forEach(file => {
            if (fs.statSync(file).isDirectory()) {
                console.log(chalk.bgGreen.white(file) + fs.statSync(file).size);
            } else if (fs.statSync(file).isFile()) {
                console.log(chalk.bgYellow.white(file) + fs.statSync(file).size);

            }
        })
    }
})