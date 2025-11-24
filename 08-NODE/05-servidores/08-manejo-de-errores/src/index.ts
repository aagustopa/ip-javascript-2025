import express, { NextFunction, Request, Response } from 'express';
import 'dotenv/config';

import logger from './middlewares/logger.js';
import HTTPError from './models/HTTPError.js';

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
  throw new Error('Supererror');
  res.send('¡Hola holita!');
});

app.post('/todos', (req, res) => {
  const newToDo = req.body;
  console.log(newToDo);
  res.send('ToDo Añadido');
});

app.get('/todos/:toDoId', (req, res) => {
  const { toDoId } = req.params;

  const toDoIdNumber = Number(toDoId); // NaN

  if (isNaN(toDoIdNumber)) throw new HTTPError(400, 'El id no es un número');

  const toDo = allToDos.find((toDo) => toDo.id === toDoIdNumber);

  if (!toDo) throw new HTTPError(404, 'No se encontró el toDo');

  res.send({ message: 'ToDo encontrado', data: toDo });
});

app.get('/todos', (req, res) => {
  const { limit } = req.query;

  let toDosToSend = allToDos;

  if (limit) {
    const limitNumber = Number(limit);
    if (isNaN(limitNumber))
      throw new HTTPError(400, 'El limite no es un número');
    toDosToSend = toDosToSend.slice(0, limitNumber);
  }

  res.send({ message: 'Lista de todos', data: toDosToSend });
});

//* Middleware RUTA NO ENCONTRADA
app.use(/(.*)/, (req, res) => {
  res.status(404).send({ error: 'Ruta no establecida' });
});

//* Middleware DE LOS ERRORES
app.use(
  (
    error: Error | HTTPError,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.log('❌ ', error.message);

    if (error instanceof HTTPError) {
      res.status(error.statusCode).send({ error: error.message });
      return;
    }

    res.status(500).send({ error: error.message });
  }
);

const PORT = process.env.PORT || 2222;
app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}...`);
});
