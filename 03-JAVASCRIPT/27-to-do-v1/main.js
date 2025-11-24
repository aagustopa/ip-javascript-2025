import { readToDos, createToDo, updateToDo, deleteToDo } from './functions/toDo-functions.js';

let selection;
do {
    selection = prompt(`
    Bienevenid@ a tu lista de tareas 1.0. 
    ¿Qué quieres hacer?
    (c) Create ToDo
    (r) Read ToDos
    (u) Update ToDo
    (d) Delete ToDo
    (x) Exit
  `);

    if (selection === 'c') createToDo()
    else if (selection === 'r') readToDos()
    else if (selection === 'u') updateToDo()
    else if (selection === 'd') deleteToDo()

} while (selection !== 'x' && selection !== null)