import './styles/style.css';

import { nanoid } from 'nanoid';

const baseUrl = 'https://682eebfd746f8ca4a47ef2df.mockapi.io/v1';

let allToDos = [];

// Cargar todas las tareas desde el backend haciendo un GET

async function getAllToDos() {
    const URL = baseUrl + '/to-dos';

    try {
        const resp = await fetch(URL);
        if (!resp.ok) {
            throw new Error('Hubo un error al pedir los datos');
        }

        const toDos = await resp.json();
        allToDos = toDos;
        printToDos(toDos);
        // countItemsLeft();
    } catch (error) {
        console.error('❌ Error: ', error.message);
    }
}
getAllToDos();

const $toDoList = document.querySelector('.toDo-list');

// Cazamos el formulario
const $addToDoForm = document.querySelector('.add-todo-form');

$addToDoForm.addEventListener('submit', handleAddToDoFormSubmit);

$toDoList.addEventListener('click', (event) => {
    const deleteButton = event.target.closest(`button[data-delete]`);
    if (deleteButton !== null) {
        // console.log('boton delete clickado');
        deleteToDo();
    }
})


function printToDos(arrayToDos = allToDos) {
    // Borrar toda la lista de tareas
    $toDoList.innerHTML = '';

    // Recorro cada tarea de la lista de tareas
    // for (const toDo of allToDos) {
    arrayToDos.forEach((toDo) => {
        const article = createToDoHTML(toDo);
        // Lo meto en el DOM dentro de la sección
        $toDoList.append(article);
    });
}

function createToDoHTML(toDo) {
    // Creo un nuevo "article" por cada uno
    const article = document.createElement('article');

    // Le pongo las clases que necesita el article
    article.className =
        'bg-white py-2 px-4 first:rounded-t flex items-center gap-3  border-b border-b-gray-300 dark:bg-gray-700 dark:border-b-gray-00 dark:text-white';

    // Crear una variable para saber si el input estará checked o no
    const isChecked = toDo.isCompleted ? 'checked' : '';

    // Crear una variable para saber si el check icon estará visible o no
    const isCheckIconVisible = toDo.isCompleted ? '' : 'hidden';

    // Le pongo lo de dentro
    article.innerHTML = `
      <input aria-label="Complete to-do checkbox" id="${toDo.id}" class="complete-checkbox hidden peer" type="checkbox" ${isChecked}>
      <label data-complete="${toDo.id}" for="${toDo.id}" class="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-check-gradient">
        <svg class="${isCheckIconVisible} check-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
      </label>
      <span class="peer-checked:line-through peer-checked:opacity-30">${toDo.task}</span>
      <button data-delete="${toDo.id}"  aria-label="Delete button" type="button" class="ml-auto text-gray-600 dark:text-white cursor-pointer hover:scale-110 hover:rotate-90 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path fill="currentColor" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>
        </svg>
      </button>
      `;

    //! OPCION 1 PARA ESCUCHAR LOS EVENTOS DE LOS BOTONES DE LOS TO-DOS
    //* Justo aquí debajo, el article YA TIENE DENTRO el input y el Button que completan y borran el toDo.
    // const completedInput = article.querySelector('.complete-checkbox');
    // completedInput.addEventListener('change',  () => toggleCompleteToDo(toDo.id));

    //* Ahora caza el boton de borrar
    //* Le escuchas el click
    // const deleteButton = article.querySelector('[data-delete-button]');
    // deleteButton.addEventListener('click', () => deleteToDo(toDo.id));

    //! ***************************************************/
    // deleteToDo(toDo.id)

    return article;
}

function handleAddToDoFormSubmit(event) {
    event.preventDefault();

    const newTaskValue = $addToDoForm.addToDoInput.value;

    createNewToDo(newTaskValue);
    // console.log(`printando otra vez`);

}

async function createNewToDo(newTaskValue) {
    const newToDo = {
            task: newTaskValue,
            isCompleted: false,
        }
        // console.log(newToDo);
    const resp = await fetch(baseUrl + '/to-dos', {
        method: 'POST',
        body: JSON.stringify(newToDo),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    });
    if (!resp.status === 201) {
        throw new Error('Hubo un error al añadir el comentario');
    }
    getAllToDos();
    const data = await resp.json();
    console.log(data);
}

async function deleteToDo() {
    // const URL =
    console.log("clickado");

    // const URLToDelete = `https://682eebfd746f8ca4a47ef2df.mockapi.io/v1/to-dos/${id}`;
    // const resp = await fetch(URLToDelete, {
    //     method: 'DELETE'
    // });
    // const data = resp.data();
    // console.log(data);

}