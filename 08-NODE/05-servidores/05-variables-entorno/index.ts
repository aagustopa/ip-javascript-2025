import express from 'express';

import 'dotenv/config';

const app = express();

app.get('/', (_, res) => {
  res.send('¡Hola holita!');
});

app.use(/(.*)/, (req, res) => {
  res.status(404).send({ error: 'Ruta no establecida' });
});

const PORT = process.env.PORT || 2222;
app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}...`);
});
