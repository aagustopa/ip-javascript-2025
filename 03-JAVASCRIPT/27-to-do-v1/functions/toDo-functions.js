// Mini base de datos fake
const allToDos = [
    { id: 1, task: 'Pasear a las perras 🐶' },
    { id: 2, task: 'Comprar el pan 🥖' }
];

const readToDos = () => {

    // Haga que en la consola aparezca una lista con los titulos de las tareas
    //  1: Pasear a las perras 🐶
    //  2: Comprar el pan 🥖

    // for (let i = 0; i < allToDos.length; i++) {
    //     const tareas = allToDos[i].task;
    //     console.log(`${i + 1} : ${tareas}`);
    // }
    for (const toDo of allToDos) {
        console.log(`${toDo.id} : ${toDo.task}`);
    }
};

const createToDo = () => {

    // crear el toDo con
    // un id que vaya cada vez más alto
    // una tarea que le pidamos al usuario
    // const newToDo = { id: 3, task: 'Leer un libro' };
    // PASAR A VARIABLES GLOBAL
    const newId = allToDos.length + 1;
    const newTask = prompt("escriba una nueva tarea");
    const newValue = { id: newId, task: newTask };
    // for (let x = 0; x < allToDos.length; x++) {
    // console.log(allToDos[x]);
    // const newNew = { id: Number(i + 1), task: newTask };
    // allToDos.push(newNew);
    // }

    // Meterlo en el array
    allToDos.push(newValue);
    console.log(`tarea añadida correctamente`);
    // allToDos[allToDos.length] = newToDo;


};

const updateToDo = () => {
    let isUpdateIdFound = false;
    const askingIdUp = prompt(`escribe el ID que quieres actualizar`);
    const updateId = Number(askingIdUp);
    for (let j = 0; j < allToDos.length; j++) {
        if (allToDos[j].id === updateId) {
            console.log(`coincide, esta es la tarea que vas a actualizar`);
            console.log(allToDos[j].task);
            let updatingTask = prompt(`escribe la nueva tarea actualizada`)
            allToDos[j].task = updatingTask;
            isUpdateIdFound = true;
        }
    }
    isUpdateIdFound === true ? console.log(`tarea actualizada`) : console.log(`no existe la tarea con el id ${updateId} escrito`);
}

const deleteToDo = () => {
    // TENGO QUE PEDIR AL USUARIO EL ID DEL QUE QUIERE BORRAR
    let isIdFound = false;
    const askingId = prompt(`escribe el ID que quieras borrar`);
    const idConverted = Number(askingId);
    // for (const x in allToDos) {
    for (let x = 0; x < allToDos.length; x++) {
        if (allToDos[x].id === idConverted) {
            console.log(`coincide! eliminando...`);
            allToDos.splice(x, 1);
            isIdFound = true;
        }
    }
    if (isIdFound === true) {
        console.log(`tarea eliminada!`);
    } else {
        console.log(`no existe la tarea con el id ${idConverted} que has escrito`);
    }
    // Recorremos el array
    // Preguntamos en cada vuelta si el ID del toDo es igual o no al ID que me han pasado en el prompt

    // Si alguna de las vueltas el if da true
    // Borramos el elemento del array --> 
    // splice(indice, cuantoQuieresBorrar)


    // Mensaje final --> ToDo borrado correctamente

}
export { readToDos, createToDo, updateToDo, deleteToDo };