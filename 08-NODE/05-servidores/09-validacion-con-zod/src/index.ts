import express, { NextFunction, Request, Response } from 'express';
import 'dotenv/config';

import logger from './middlewares/logger.js';
import HTTPError from './models/HTTPError.js';
import { positiveNumberSchema } from './schemas/positiveNumberSchema.js';
import { positive, z, ZodError } from 'zod/v4';
import ValidationError from './models/ValidationError.js';
import { toDoSchema } from './schemas/toDoSchema.js';

interface ToDo {
  id: number;
  task: string;
  isCompleted: boolean;
}

const allToDos: ToDo[] = [
  { id: 1, task: 'Hacer el bootcamp', isCompleted: false },
  { id: 2, task: 'Estudiar JavaScript', isCompleted: true },
  { id: 3, task: 'Echar la siesta', isCompleted: false },
];

const app = express();

//* Middlewares
app.use(logger);
app.use(express.json());
//****************************************************/

app.get('/', (req, res) => {
  throw new Error('Supererror');
  res.send('¡Hola holita!');
});

app.post('/todos', (req, res) => {
  const newToDo = req.body;

  // const validatedToDo = toDoSchema.parse(newToDo);
  const { success, data: validatedToDo, error } = toDoSchema.safeParse(newToDo);

  if (!success) {
    throw new ValidationError(error);
  }

  const newId = allToDos.length + 1;

  const newToDoWithId = {
    id: newId,
    task: validatedToDo.task,
    isCompleted: validatedToDo.isCompleted || false,
  };
  allToDos.push(newToDoWithId);

  res.send('ToDo Añadido');
});

app.get('/todos/:toDoId', (req, res) => {
  const { toDoId } = req.params;

  // const toDoIdNumber = positiveNumberSchema.parse(toDoId);
  const {
    success,
    data: toDoIdNumber,
    error,
  } = positiveNumberSchema.safeParse(toDoId);

  if (!success) {
    throw new ValidationError(error);
  }

  // if (isNaN(toDoIdNumber)) throw new HTTPError(400, 'El id no es un número');

  const toDo = allToDos.find((toDo) => toDo.id === toDoIdNumber);

  if (!toDo) throw new HTTPError(404, 'No se encontró el toDo');

  res.send({ message: 'ToDo encontrado', data: toDo });
});

app.get('/todos', (req, res) => {
  const { limit } = req.query;

  let toDosToSend = allToDos;

  if (limit) {
    const { success, data, error } = positiveNumberSchema.safeParse(limit);

    if (!success) {
      throw new ValidationError(error);
    }

    toDosToSend = toDosToSend.slice(0, data);
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
    error: Error | HTTPError | ValidationError | ZodError,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (error instanceof HTTPError) {
      console.log(`❌ HTTPError: `, error.message);
      res.status(error.statusCode).send({ error: error.message });
      return;
    }

    if (error instanceof ValidationError) {
      console.log(`❌ ValidationError: `, error.message);

      // console.log('Soy un error de Zod 🫳💪');
      // const flattenedErrors = z.flattenError(error);
      // console.log(flattenedErrors);
      res.status(400).send({ error: error.message });
      return;
    }

    if (error instanceof ZodError) {
      console.log(`❌ ZodError: `, error.message);

      const prettyfiedErrors = z.prettifyError(error);
      res.status(400).send({ error: prettyfiedErrors });
      return;
    }

    console.log(`❌ Error: `, error.message);

    res.status(500).send({ error: error.message });
  }
);

const PORT = process.env.PORT || 2222;
app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}...`);
});
