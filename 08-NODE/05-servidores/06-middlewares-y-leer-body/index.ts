import express from 'express';
import chalk from 'chalk';
import fs from 'fs';

import 'dotenv/config';

const app = express();

//* Middleware normalmente se crean con app.use();
//* Los middlewares interceptan las peticiones y suelen hacer algo con ellas antes de dejarlas pasar
//! Importantísimo: Para dejar pasar la petición, se debe llamar a next()

//? Ejemplo de middleware para hacer de logger
app.use((req, res, next) => {
  const text = `${req.method} - ${req.url} ${new Date().toLocaleString('es')}`;
  fs.appendFileSync('logs.txt', text + '\n', 'utf-8');
  console.log(chalk.yellow(req.method), '-', chalk.blue(req.url));
  next();
});

//? ejemplo de middleware para METERLE COSAS AL req

app.use((req, res, next) => {
  req.ivan = 'hola 🤘';
  next();
});

//* Middleware nativo de EXPRESS para parsear el body que llega en formato JSON
//* Lo parsea y lo mete en req.body
app.use(express.json());

app.get('/', (req, res) => {
  console.log(req.ivan);
  res.send('¡Hola holita!');
});

app.post('/users/login', (req, res) => {
  console.log(req.body);
  res.send('Usuario logueado');
});

app.use(/(.*)/, (req, res) => {
  res.status(404).send({ error: 'Ruta no establecida' });
});

const PORT = process.env.PORT || 2222;
app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}...`);
});
