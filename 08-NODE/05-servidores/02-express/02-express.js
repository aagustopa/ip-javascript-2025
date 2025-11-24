import express from 'express';

const app = express();

const users = [
  { id: 1, name: 'Ivan', email: 'ivan@example.com' },
  { id: 2, name: 'Andrea', email: 'andrea@example.com' },
];

app.get('/users', (_, res) => {
  res.send(users);
});

app.get('/users/1', (req, res) => {
  const findUser1 = users.find((user) => user.id === 1);
  res.send(findUser1);
});

app.get('/users/4', (req, res) => {
  const findUser4 = users.find((user) => user.id === 4);

  if (!findUser4) {
    res.status(404).send({ error: 'No encontrado' });
    return;
  }

  console.log('hola');
  res.send(findUser4);
});

app.post('/users', (req, res) => {});

app.use('*', (req, res) => {
  res.status(404).send({ error: 'Ruta no establecida' });
});

app.listen(2222, () => {
  console.log('Escuchando en el puerto 2222...');
});
