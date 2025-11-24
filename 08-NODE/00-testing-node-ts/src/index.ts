import express, { NextFunction, Request, Response, json } from 'express';
require('dotenv').config();

interface ToDo {
    id: number;
    task: string;
    isCompleted: boolean
}

const allToDos: ToDo[] = [
    { id: 1, task: 'Hacer el bootcamp', isCompleted: false },
    { id: 2, task: 'Estudiar JavaScript', isCompleted: true },
    { id: 3, task: 'Echar la siesta', isCompleted: false },
]

const app = express();
app.use(express.json());

app.get('/todos', (req, res) => {
    let toDosToSend = allToDos;
    res.send({ message: 'lista de todos', data: toDosToSend });
})

app.post('todos/', (req, res) => {
    const newToDo = req.body;

    console.log(newToDo);

    const newId = allToDos.length + 1;
    const newToDoWithId = {
        id:newId,
    }
})

app.listen(process.env.PORT, () => {
    console.log(`escuchando en el puerto ${process.env.PORT}`);
})