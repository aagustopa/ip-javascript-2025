import express, { NextFunction, Request, Response } from 'express';
import fs from 'node:fs';
import path from 'node:path';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

import logger from './middlewares/logger.js';
import errorMiddleware from './middlewares/errorMiddleware.js';

import HTTPError from './models/HTTPError.js';

import { positiveNumberSchema } from './schemas/positiveNumberSchema.js';
import { toDoSchema } from './schemas/toDoSchema.js';
import { loginSchema, registerSchema } from './schemas/userSchemas.js';
import { AuthorizedRequest, AuthorizedUser, User } from './config/types.js';

interface ToDo {
  id: number;
  task: string;
  isCompleted: boolean;
}

let allToDos: ToDo[] = [
  { id: 1, task: 'Hacer el bootcamp', isCompleted: false },
  { id: 2, task: 'Estudiar JavaScript', isCompleted: true },
  { id: 3, task: 'Echar la siesta', isCompleted: false },
];

const usersDataPath = path.join(
  process.cwd(),
  'src',
  'config',
  'data',
  'users.json'
);

const app = express();

//* Middlewares
app.use(logger);
app.use(express.json());

function userAuth(req: Request, res: Response, next: NextFunction) {
  const authorization = req.headers.authorization;
  if (!authorization) throw new HTTPError(401, 'No se encontró el token');
  const token = authorization.split(' ')[1];
  if (!token) throw new HTTPError(401, 'No se encontró el token');

  const verifiedUser = jwt.verify(
    token,
    process.env.TOKEN_SECRET!
  ) as AuthorizedUser;

  (req as AuthorizedRequest).user = verifiedUser;

  next();
}

//****************************************************/

//* USERS
app.get('/users', (req, res) => {
  const users = JSON.parse(fs.readFileSync(usersDataPath, 'utf-8'));
  res.send({ messsage: 'Lista de usuarios', data: users });
});

app.post('/users/register', (req, res) => {
  const user = req.body;
  const validatedUser = registerSchema.parse(user);

  //* Validar si el usuario ya existe
  const usersJSON = JSON.parse(
    fs.readFileSync(usersDataPath, 'utf-8')
  ) as User[];
  const userAlreadyExists = usersJSON.find(
    (user) => user.email === validatedUser.email
  );
  if (userAlreadyExists) throw new HTTPError(400, 'El usuario ya existe');

  //* Guardamos el usuario en la base de datos
  //! Pero no puedo guardar la contraseña tal cual
  // Encriptar en una dirección implica que solo se puede encriptar, pero no desencriptar
  // pepito1234  ==> lfjkho8y7483uhfi //* esto se puede

  // skdj8oweyolhfn3oi8 ==> pepito1234 //! esto no se puede
  const encriptedPassword = bcrypt.hashSync(validatedUser.password, 10);

  //* Meterlo en la base de datos
  const newUser = {
    id: usersJSON.length + 1,
    username: validatedUser.username,
    email: validatedUser.email,
    password: encriptedPassword,
  };

  const users = JSON.parse(fs.readFileSync(usersDataPath, 'utf-8'));

  users.push(newUser);

  fs.writeFileSync(usersDataPath, JSON.stringify(users, null, 2));

  // allUsers.push(newUser);
  // console.log(allUsers);

  //* Antes de responder con el usuario creado, le quitamos los datos sensibles

  const { password, ...newUserWithoutPassword } = newUser;

  res
    .status(201)
    .send({ message: 'Usuario registrado', data: newUserWithoutPassword });
});

app.post('/users/login', (req, res) => {
  const user = req.body;
  const { email, password } = loginSchema.parse(user);

  const usersJSON = JSON.parse(
    fs.readFileSync(usersDataPath, 'utf-8')
  ) as User[];

  const userFound = usersJSON.find((user) => user.email === email);
  if (!userFound)
    throw new HTTPError(401, 'Usuario y/o contraseña incorrectos');

  const passwordMatch = bcrypt.compareSync(password, userFound.password);

  if (!passwordMatch)
    throw new HTTPError(401, 'Usuario y/o contraseña incorrectos');

  //****************************************************/
  //* Aquí sabemos que el usuario se ha logeado correctamente
  // const { email, password, ...tokenData} = userFound;
  const tokenData = { id: userFound.id, username: userFound.username };

  //* Tenemos que crear un TOKEN (tarjeta de acceso del juego misterios de pekin) con los datos que quiero leer cada vez que intente acceder
  const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
    expiresIn: '1h',
  });

  //* Varias opciones:
  //* 1. Enviar el token en el body de la response y que el cliente lo almacene en localStorage
  //* 2. Enviar el token en el header de la response y que el cliente lo almacene en localStorage

  res.send({ message: 'Usuario logueado', data: token });

  //* 3. Enviar el token en una cookie que se creará en el navegador
});

//****************************************************/

//* ToDos
app.get('/', (req, res) => {
  throw new Error('Supererror');
  res.send('¡Hola holita!');
});

app.post('/todos', userAuth, (req, res) => {
  const newToDo = req.body;

  const user = (req as AuthorizedRequest).user;
  console.log(user);

  const validatedToDo = toDoSchema.parse(newToDo);

  const newId = allToDos.length + 1;

  const newToDoWithId = {
    id: newId,
    task: validatedToDo.task,
    isCompleted: validatedToDo.isCompleted || false,
  };
  allToDos.push(newToDoWithId);

  res.send('ToDo Añadido');
});

app.get('/todos/:toDoId', userAuth, (req, res) => {
  const { toDoId } = req.params;

  const toDoIdNumber = positiveNumberSchema.parse(toDoId);

  const toDo = allToDos.find((toDo) => toDo.id === toDoIdNumber);

  if (!toDo) throw new HTTPError(404, 'No se encontró el toDo');

  res.send({ message: 'ToDo encontrado', data: toDo });
});

app.get('/todos', (req, res) => {
  const { limit } = req.query;

  let toDosToSend = allToDos;

  if (limit) {
    const validatedLimit = positiveNumberSchema.parse(limit);

    toDosToSend = toDosToSend.slice(0, validatedLimit);
  }

  res.send({ message: 'Lista de todos', data: toDosToSend });
});

//* Ejemplo de una ruta que necesitamos que el usuario esté logueado para lo que sea (por ejemplo borrar un toDo)

app.delete('/todos/:toDoId', (req, res) => {
  const { toDoId } = req.params;
  const toDoIdNumber = positiveNumberSchema.parse(toDoId);

  //* Aquí se puede hacer el check de que el usuario esté logueado

  const authorization = req.headers.authorization;
  if (!authorization) throw new HTTPError(401, 'No se encontró el token');

  const token = authorization.split(' ')[1];

  //* Aquói tengo que revisar el token y ver si es correcto, si no está caducado, etc

  const verifiedUser = jwt.verify(token, process.env.TOKEN_SECRET!);

  //* Ahora ya se quien eres y te permito borrar l toDo
  console.log(verifiedUser);

  const foundToDo = allToDos.find((toDo) => toDo.id === toDoIdNumber);
  if (!foundToDo) throw new HTTPError(404, 'No se encontró el toDo');

  allToDos = allToDos.filter((toDo) => toDo.id !== toDoIdNumber);
  res.send('ToDo borrado');
});

//* Middleware RUTA NO ENCONTRADA
app.use(/(.*)/, (req, res) => {
  res.status(404).send({ error: 'Ruta no establecida' });
});

//* Middleware DE LOS ERRORES
app.use(errorMiddleware);

const PORT = process.env.PORT || 2222;
app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}...`);
});
