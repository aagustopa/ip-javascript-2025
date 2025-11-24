import express from 'express';
import 'dotenv/config';

import logger from './middlewares/logger.js';

const allToDos = [
  { id: 1, title: 'Hacer el bootcamp', isCompleted: false },
  { id: 2, title: 'Estudiar JavaScript', isCompleted: true },
  { id: 3, title: 'Echar la siesta', isCompleted: false },
];

const app = express();

//? Ejemplo de middleware para hacer de logger
app.use(logger);

//* Middleware nativo de EXPRESS para parsear el body que llega en formato JSON
//* Lo parsea y lo mete en req.body
app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Hola holita!');
});

app.post('/todos', (req, res) => {
  const newToDo = req.body;
  console.log(newToDo);
  res.send('ToDo Añadido');
});

app.get('/todos/:toDoId', (req, res) => {
  const { toDoId } = req.params;

  const toDoIdNumber = Number(toDoId);

  if (isNaN(toDoIdNumber)) {
    res.status(400).send({ error: 'El id no es un número' });
    return;
  }

  const toDo = allToDos.find((toDo) => toDo.id === toDoIdNumber);

  if (!toDo) {
    res.status(404).send({ error: 'No se encontró el toDo' });
    return;
  }

  res.send({ message: 'ToDo encontrado', data: toDo });
});

app.get('/todos', (req, res) => {
  const { limit } = req.query;

  let toDosToSend = allToDos;

  if (limit) {
    const limitNumber = Number(limit);
    if (isNaN(limitNumber)) {
      res.status(400).send({ error: 'El limite no es un número' });
      return;
    }
    toDosToSend = toDosToSend.slice(0, limitNumber);
  }

  res.send({ message: 'Lista de todos', data: toDosToSend });
});

app.use(/(.*)/, (req, res) => {
  res.status(404).send({ error: 'Ruta no establecida' });
});

const PORT = process.env.PORT || 2222;
app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}...`);
});
