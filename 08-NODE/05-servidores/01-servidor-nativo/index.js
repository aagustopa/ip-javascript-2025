import { error } from 'node:console';
import http from 'node:http';

const users = [
  { id: 1, name: 'Ivan', email: 'ivan@example.com' },
  { id: 2, name: 'Andrea', email: 'andrea@example.com' },
];

const server = http.createServer((req, res) => {
  //* Aquí es donde vamos a definir lo que hacemos en CADA PETICIÓN
  console.log(req.url);
  console.log(req.method);

  if (req.method === 'GET' && req.url === '/users') {
    //* Sé que lo que quieres es PEDIRME USUARIOS

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users));
  } else if (req.method === 'GET' && req.url === '/users/1') {
    const findUser1 = users.find((user) => user.id === 1);

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(findUser1));
  } else if (req.method === 'GET' && req.url === '/users/4') {
    const findUser4 = users.find((user) => user.id === 4);

    if (!findUser4) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'application/json');
      const errorResponse = JSON.stringify({ error: 'No encontrado' });
      res.end(errorResponse);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(findUser1));
    }
  } else if (req.method === 'POST' && req.url === '/users') {
    //* Sé que lo que quiers es AÑADIRME UN USUARIO
  }
});

server.listen(2222, () => {
  console.log('Escuchando en el puerto 2222...');
});
