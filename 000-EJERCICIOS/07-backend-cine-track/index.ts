import express, { NextFunction, Request, Response, json } from 'express';
require('dotenv').config();
const cors = require('cors');
// import logger from './middlewares/logger.js';
import HTTPError from './models/HTTPError.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Soporta datos codificados en URL

app.post('/user/login', (req, res) => {
    res.send({});
})

app.get('/', (req, res) => {
    res.send('GET method to / (getting users)');
})

app.post('/user/register', (req, res) => {
    res.send(`POST method to /user/register (usuario registrado)`)
})

app.patch('/user/:userId', (req, res) => {
    res.send('PATCH method to /user/:userId (usuario actualizado)')
})

app.delete('/user/:userId', (req, res) => {
    res.send('DELETE method to /user/:userId (user deleted)')
})

// middleware
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

// app.get('/', (req, res) => {
//     throw new Error('Supererror');
//     res.send('¡Hola holita!');
//   });

app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto 3000...');
});